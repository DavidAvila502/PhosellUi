import { useState, type ChangeEvent } from "react";
import TropixField from "../../../shared/components/TropixField";

const RegisterAndReserveFormulary = () => {
   const [registerAndReserveData, setRegisterAndReserveData] = useState({
      fullName: "",
      email: "",
      phone: "",
      phoneCode: "+52",
      password: "",
      rePassword: "",
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

         <div className="flex flex-col items-center h-full w-full gap-3 overflow-auto">
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
                  Telefono <span className="text-red-400 font-bold">*</span>
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
         </div>
      </form>
   );
};

export default RegisterAndReserveFormulary;
