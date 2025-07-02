import { useEffect, useState, type ChangeEvent } from "react";
import TropixField from "../../../shared/components/TropixField";
import PackageOption from "../../sessionPackage/components/PackageOption";
import { DayPicker } from "react-day-picker";
import {
   getCurrentDate,
   getDatePlusDays,
   parseLocalDate,
} from "../utils/DateUtils";
import TimeSelector from "./TimeSelector";
import ClassicButton from "../../../shared/components/ClassicButton";
import type { SessionPackage } from "../../sessionPackage/models/package";
import { splitBenefits } from "../utils/SessionPackageUtils";
import StepsIndicator from "./StepsIndicator";
import useGetAvailableSlots from "../hooks/useGetAvailableSlots";

interface RegisterAndReserveFormularyProps {
   packages: SessionPackage[];
}

const steps: string[] = ["Contacto y cuenta", "Paquetes", "Sesión"];

const RegisterAndReserveFormulary = ({
   packages,
}: RegisterAndReserveFormularyProps) => {
   const [registerAndReserveData, setRegisterAndReserveData] = useState({
      fullName: "",
      email: "",
      phone: "",
      phoneCode: "+52",
      password: "",
      rePassword: "",
      packageId: packages.length > 0 ? packages[0].id : "",
      location: "",
      date: "--",
      time: "",
   });

   const [isDayPickerOpen, setIsDayPickerOpen] = useState(false);

   const { getAvailableSlots } = useGetAvailableSlots();

   useEffect(() => {
      if (registerAndReserveData.date != "--") {
         getAvailableSlots(registerAndReserveData.date);
      }
   }, [registerAndReserveData.date]);

   const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
   ) => {
      const { name, value } = e.target;

      setRegisterAndReserveData((prev) => ({ ...prev, [name]: value }));
   };

   const handleDayPicker = (date: Date | undefined) => {
      setIsDayPickerOpen(!isDayPickerOpen);

      if (!date) return;

      setRegisterAndReserveData((prev) => ({
         ...prev,
         ["date"]: date ? date.toLocaleDateString("en-CA") : "",
      }));
   };

   return (
      <form
         className="flex flex-col items-center justify-center
             rounded-[20px] pt-[8px] w-[80%] bg-white h-[700px]"
      >
         <div className="bg-blue-500 p-[10px] flex justify-center w-full ">
            <StepsIndicator stepList={steps} />
         </div>

         <div
            id="register-reserve-body"
            className="flex flex-col items-center h-full w-full gap-3 overflow-auto scroll-smooth pb-[100px]"
         >
            <div className="step-section divider mt-[40px] w-[90%] mx-auto">
               <p className="text-2xl font-bold text-gray-600 text-center">
                  Información de Contacto y Cuenta
               </p>
            </div>

            <TropixField
               id="fullName"
               textLabel="Nombre completo"
               type="text"
               value={registerAndReserveData.fullName}
               width="w-[60%]"
               onChange={handleChange}
               required={true}
            />

            <TropixField
               id="email"
               textLabel="Email"
               type="email"
               value={registerAndReserveData.email}
               width="w-[60%]"
               onChange={handleChange}
               required={true}
            />

            <div className="w-[60%]">
               <label
                  htmlFor="phone"
                  className="text-[18px] mb-[5px] text-gray-500"
               >
                  Telefono (WhatsApp){" "}
                  <span className="text-red-400 font-bold">*</span>
               </label>
               <div className="flex flex-row place-items-start gap-2">
                  <select
                     id="phoneCode"
                     name="phoneCode"
                     value={registerAndReserveData.phoneCode}
                     onChange={handleChange}
                     className="select select-bordered w-[20%] 
                        focus:outline-none focus:border-blue-400"
                  >
                     <option value="+1">+1</option>
                     <option value="+52">+52</option>
                     <option value="+34">+34</option>
                  </select>

                  <TropixField
                     id="phone"
                     type="text"
                     value={registerAndReserveData.phone}
                     width="w-[100%]"
                     onChange={handleChange}
                     required={true}
                  />
               </div>
            </div>

            <TropixField
               id="password"
               type="password"
               value={registerAndReserveData.password}
               textLabel="Contraseña"
               width="w-[60%]"
               onChange={handleChange}
               required={true}
            />

            <TropixField
               id="rePassword"
               type="password"
               value={registerAndReserveData.rePassword}
               textLabel="Repetir contraseña"
               width="w-[60%]"
               onChange={handleChange}
               required={true}
            />

            <div className="step-section divider mt-[40px] w-[90%] mx-auto">
               <p className="text-2xl font-bold text-gray-600 text-center">
                  Seleccione un paquete
               </p>
            </div>

            <div className="w-[60%] flex flex-col gap-2">
               {packages.map(
                  (currentPackage: SessionPackage, index: number) => (
                     <PackageOption
                        key={index}
                        value={currentPackage.id}
                        checked={
                           registerAndReserveData.packageId == currentPackage.id
                        }
                        packageName={`${currentPackage.name} ($${currentPackage.price} MXN)`}
                        benefits={splitBenefits(currentPackage.benefits)}
                        nameGroup="packageId"
                        onChange={handleChange}
                     />
                  )
               )}
            </div>

            <div className="step-section divider mt-[40px] w-[90%] mx-auto">
               <p className="text-2xl font-bold text-gray-600 text-center">
                  Sesión
               </p>
            </div>

            <TropixField
               id="location"
               textLabel="Dónde"
               type="text"
               value={registerAndReserveData.location}
               width="w-[60%]"
               onChange={handleChange}
               required={true}
               placeholder="Hotel,Playa o Dirección"
            />

            <div className="w-[60%]">
               <TropixField
                  type="button"
                  popoverTarget="rdp-popover"
                  textLabel="Fecha"
                  required={true}
                  style={{ anchorName: "--rdp" } as React.CSSProperties}
                  value={registerAndReserveData.date}
                  className="text-left pt-1 cursor-pointer flex items-center"
                  onClick={() => setIsDayPickerOpen(!isDayPickerOpen)}
               />

               {isDayPickerOpen && (
                  <div
                     popover="auto"
                     id="rdp-popover"
                     className="dropdown"
                     style={{ positionAnchor: "--rdp" } as React.CSSProperties}
                  >
                     <DayPicker
                        className="react-day-picker"
                        mode="single"
                        selected={parseLocalDate(registerAndReserveData.date)}
                        onSelect={handleDayPicker}
                        disabled={{
                           before: getCurrentDate(),
                           after: getDatePlusDays(14),
                        }}
                     />
                  </div>
               )}
            </div>

            <div className="w-[60%] min-h-[200px] mt-[20px] flex flex-col gap-3">
               <p className="text-lg text-gray-500">
                  Hora <span className="text-red-400">*</span>
               </p>
               <TimeSelector
                  func={(time: string) =>
                     setRegisterAndReserveData((prev) => ({
                        ...prev,
                        ["time"]: time,
                     }))
                  }
                  timeList={["02:00", "03:00", "04:00"]}
                  selected={registerAndReserveData.time}
               />
            </div>

            <div className="mt-[20px]"></div>

            <ClassicButton type="submit" color="bg-blue-400" text="Continuar" />
         </div>
      </form>
   );
};

export default RegisterAndReserveFormulary;
