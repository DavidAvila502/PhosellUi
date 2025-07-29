import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import ClassicButton from "../../../shared/components/ClassicButton";
import TropixField from "../../../shared/components/TropixField";
import type { RegisterClientFormDataDTO } from "../dtos/authDtos";
import { Bounce, toast, ToastContainer } from "react-toastify";
import {
   type RegisterFormDataErrors,
   validateAll,
} from "../utils/registerFormValidations";
import useRegisterCLient from "../hooks/useRegisterClient";
import { getApiErrorMessage } from "../../../shared/utils/apiCodeErrors";

const RegisterForm = () => {
   const [registerFormData, setRegisterFormData] =
      useState<RegisterClientFormDataDTO>({
         fullName: "",
         email: "",
         password: "",
         rePassword: "",
         phoneCode: "+52",
         phone: "",
         city: "",
      });

   const [registerFormErrors, setRegisterFormErrors] =
      useState<RegisterFormDataErrors>({
         fullName: null,
         email: null,
         password: null,
         rePassword: null,
         phoneCode: null,
         phone: null,
         city: null,
      });

   const {
      registerCLientResponseData,
      registerClientLoading,
      registerClientError,
      registerClient,
   } = useRegisterCLient();

   const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
   ) => {
      const { name, value } = e.target;

      setRegisterFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (registerClientLoading) return;

      const formErrors = validateAll(registerFormData);

      const hasSomeError: boolean = Object.values(formErrors).some(
         (value) => value != null
      );

      if (hasSomeError) {
         setRegisterFormErrors(formErrors);
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

      registerClient(registerFormData);
   };

   useEffect(() => {
      if (registerCLientResponseData) {
         toast.success("¡Registro exitoso!", {
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
      }
   }, [registerCLientResponseData]);

   useEffect(() => {
      if (registerClientError?.response?.data) {
         console.error(registerClientError);
         toast.error(
            getApiErrorMessage(registerClientError.response?.data.code),
            {
               position: "top-center",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "colored",
               transition: Bounce,
            }
         );
      }
   }, [registerClientError]);

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
               value={registerFormData.fullName}
               width="w-[60%] max-md:w-[95%]"
               onChange={handleChange}
               required={true}
               isthereError={registerFormErrors.fullName}
            />

            <TropixField
               id="email"
               textLabel="Email"
               type="email"
               value={registerFormData.email}
               width="w-[60%] max-md:w-[95%]"
               onChange={handleChange}
               required={true}
               isthereError={registerFormErrors.email}
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
                     value={registerFormData.phoneCode}
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
                     value={registerFormData.phone}
                     width="w-[100%]"
                     onChange={handleChange}
                     required={true}
                     isthereError={registerFormErrors.phone}
                  />
               </div>
            </div>

            <TropixField
               id="password"
               type="password"
               value={registerFormData.password}
               textLabel="Contraseña"
               width="w-[60%] max-md:w-[95%]"
               onChange={handleChange}
               required={true}
               isthereError={registerFormErrors.password}
            />

            <TropixField
               id="rePassword"
               type="password"
               value={registerFormData.rePassword}
               textLabel="Repetir contraseña"
               width="w-[60%] max-md:w-[95%]"
               onChange={handleChange}
               required={true}
               isthereError={registerFormErrors.rePassword}
            />

            <TropixField
               id="city"
               type="text"
               value={registerFormData.city}
               textLabel="Ciudad de procedencia"
               width="w-[60%] max-md:w-[95%]"
               onChange={handleChange}
               required={true}
               isthereError={registerFormErrors.city}
            />

            <ClassicButton text="Aceptar" type="submit" color="bg-blue-400" />
         </form>
      </>
   );
};

export default RegisterForm;
