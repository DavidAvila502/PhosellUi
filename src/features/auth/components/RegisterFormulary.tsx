import { useState, type ChangeEvent, type FormEvent } from "react";
import ClassicButton from "../../../shared/components/ClassicButton";
import TropixField from "../../../shared/components/TropixField";
import type { RegisterFormularyDataDTO } from "../dtos/authDtos";
import { Bounce, toast, ToastContainer } from "react-toastify";
import {
   type RegisterFormularyDataErrors,
   validateAll,
} from "../utils/registerFormularyValidations";

const RegisterFormulary = () => {
   const [registerFormularyData, setRegisterFormularyData] =
      useState<RegisterFormularyDataDTO>({
         fullName: "",
         email: "",
         password: "",
         rePassword: "",
         phoneCode: "+52",
         phone: "",
         city: "",
      });

   const [registerFormularyErrors, setRegisterFormularyErrors] =
      useState<RegisterFormularyDataErrors>({
         fullName: null,
         email: null,
         password: null,
         rePassword: null,
         phoneCode: null,
         phone: null,
         city: null,
      });

   const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
   ) => {
      const { name, value } = e.target;

      setRegisterFormularyData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formularyErrors = validateAll(registerFormularyData);

      const hasSomeError: boolean = Object.values(formularyErrors).some(
         (value) => value != null
      );

      if (hasSomeError) {
         setRegisterFormularyErrors(formularyErrors);
         toast.error("Parece que el formulario contiene errores.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
         });

         return;
      }
   };

   return (
      <>
         <ToastContainer />
         <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[80%] min-h-[200px] bg-white
                gap-3 items-center justify-center max-lg:w-[100%] pb-[30px]"
         >
            <div className="step-section divider mt-[40px] w-[90%] mx-auto">
               <p
                  className="text-2xl font-bold text-gray-600 text-center
                     max-md:text-[18px]"
               >
                  Contacto y Cuenta
               </p>
            </div>

            <TropixField
               id="fullName"
               textLabel="Nombre completo"
               type="text"
               value={registerFormularyData.fullName}
               width="w-[60%] max-md:w-[95%]"
               onChange={handleChange}
               required={true}
               isthereError={registerFormularyErrors.fullName}
            />

            <TropixField
               id="email"
               textLabel="Email"
               type="email"
               value={registerFormularyData.email}
               width="w-[60%] max-md:w-[95%]"
               onChange={handleChange}
               required={true}
               isthereError={registerFormularyErrors.email}
            />

            <div className="w-[60%] max-md:w-[95%]">
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
                     value={registerFormularyData.phoneCode}
                     onChange={handleChange}
                     className="select select-bordered w-[30%] 
                        focus:outline-none focus:border-blue-400"
                  >
                     <option value="+1">+1</option>
                     <option value="+52">+52</option>
                     <option value="+34">+34</option>
                  </select>

                  <TropixField
                     id="phone"
                     type="text"
                     value={registerFormularyData.phone}
                     width="w-[100%]"
                     onChange={handleChange}
                     required={true}
                     isthereError={registerFormularyErrors.phone}
                  />
               </div>
            </div>

            <TropixField
               id="password"
               type="password"
               value={registerFormularyData.password}
               textLabel="Contraseña"
               width="w-[60%] max-md:w-[95%]"
               onChange={handleChange}
               required={true}
               isthereError={registerFormularyErrors.password}
            />

            <TropixField
               id="rePassword"
               type="password"
               value={registerFormularyData.rePassword}
               textLabel="Repetir contraseña"
               width="w-[60%] max-md:w-[95%]"
               onChange={handleChange}
               required={true}
               isthereError={registerFormularyErrors.rePassword}
            />

            <TropixField
               id="city"
               type="text"
               value={registerFormularyData.city}
               textLabel="Ciudad de procedencia"
               width="w-[60%] max-md:w-[95%]"
               onChange={handleChange}
               required={true}
               isthereError={registerFormularyErrors.city}
            />

            <ClassicButton text="Aceptar" type="submit" color="bg-blue-400" />
         </form>
      </>
   );
};

export default RegisterFormulary;
