import { useState, type ChangeEvent } from "react";
import TropixField from "../../../shared/components/TropixField";
import PackageOption from "./PackageOption";
import { DayPicker } from "react-day-picker";
import {
   getCurrentDate,
   getDatePlusDays,
   parseLocalDate,
} from "../utils/DateUtils";
import TimeSelector from "./TimeSelector";
import ClassicButton from "../../../shared/components/ClassicButton";

const RegisterAndReserveFormulary = () => {
   const [registerAndReserveData, setRegisterAndReserveData] = useState({
      fullName: "",
      email: "",
      phone: "",
      phoneCode: "+52",
      password: "",
      rePassword: "",
      packageId: "1",
      location: "",
      date: "--",
      time: "",
   });

   const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
   ) => {
      const { name, value } = e.target;

      setRegisterAndReserveData((prev) => ({ ...prev, [name]: value }));
   };

   return (
      <form
         className="flex flex-col items-center justify-center
             rounded-[20px] pt-[8px] w-[80%] bg-white h-[700px]"
      >
         <div className="bg-blue-500 p-[10px] flex justify-center w-full ">
            <ul className="steps text-xl">
               <li className="step text-white step-primary">
                  Contacto y cuenta
               </li>
               <li className="step text-white">Paquetes</li>
               <li className="step text-white">Sesion</li>
            </ul>
         </div>

         <div className="flex flex-col items-center h-full w-full gap-3 overflow-auto pb-[200px]">
            <div className="divider mt-[40px] w-[90%] mx-auto">
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

            <div className="divider mt-[40px] w-[90%] mx-auto">
               <p className="text-2xl font-bold text-gray-600 text-center">
                  Seleccione un paquete
               </p>
            </div>

            <div className="w-[60%] flex flex-col gap-2">
               <PackageOption
                  value="1"
                  checked={registerAndReserveData.packageId == "1"}
                  packageName="Básico ($1500 MXN)"
                  benefits={["30 Fotos digitales editadas"]}
                  nameGroup="packageId"
                  onChange={handleChange}
               />

               <PackageOption
                  value="2"
                  checked={registerAndReserveData.packageId == "2"}
                  packageName="Intermedio ($2300 MXN)"
                  benefits={[
                     "40 Fotos digitales editadas",
                     "2 Collages digitales",
                  ]}
                  nameGroup="packageId"
                  onChange={handleChange}
               />

               <PackageOption
                  value="3"
                  checked={registerAndReserveData.packageId == "3"}
                  packageName="Premium ($3000 MXN)"
                  benefits={[
                     "50 Fotos digitales editadas",
                     "2 Collages digitales",
                     "1 Video slideshow",
                  ]}
                  nameGroup="packageId"
                  onChange={handleChange}
               />
            </div>

            <div className="divider mt-[40px] w-[90%] mx-auto">
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
               />

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
                     onSelect={(date) =>
                        setRegisterAndReserveData((prev) => ({
                           ...prev,
                           ["date"]: date
                              ? date.toLocaleDateString("en-CA")
                              : "",
                        }))
                     }
                     disabled={{
                        before: getCurrentDate(),
                        after: getDatePlusDays(14),
                     }}
                  />
               </div>
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
