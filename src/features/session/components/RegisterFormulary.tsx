import ClassicButton from "../../../shared/components/ClassicButton";
import TropixField from "../../../shared/components/TropixField";

const RegisterFormulary = () => {
   return (
      <>
         <form
            action=""
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
               //    value={registerAndReserveData.fullName}
               width="w-[60%] max-md:w-[95%]"
               //    onChange={handleChange}
               required={true}
               //    isthereError={registerAndReserveErrors.fullName}
            />

            <TropixField
               id="email"
               textLabel="Email"
               type="email"
               //    value={registerAndReserveData.email}
               width="w-[60%] max-md:w-[95%]"
               //    onChange={handleChange}
               required={true}
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
                     // value={registerAndReserveData.phoneCode}
                     // onChange={handleChange}
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
                     // value={registerAndReserveData.phone}
                     width="w-[100%]"
                     // onChange={handleChange}
                     required={true}
                  />
               </div>
            </div>

            <TropixField
               id="password"
               type="password"
               //    value={registerAndReserveData.password}
               textLabel="Contraseña"
               width="w-[60%] max-md:w-[95%]"
               //    onChange={handleChange}
               required={true}
            />

            <TropixField
               id="rePassword"
               type="password"
               //    value={registerAndReserveData.rePassword}
               textLabel="Repetir contraseña"
               width="w-[60%] max-md:w-[95%]"
               //    onChange={handleChange}
               required={true}
               //    isthereError={registerAndReserveErrors.rePassword}
            />

            <TropixField
               id="city"
               type="text"
               //    value={registerAndReserveData.city}
               textLabel="Ciudad de procedencia"
               width="w-[60%] max-md:w-[95%]"
               //    onChange={handleChange}
               required={true}
               //    isthereError={registerAndReserveErrors.city}
            />

            <ClassicButton text="Aceptar" type="submit" color="bg-blue-400" />
         </form>
      </>
   );
};

export default RegisterFormulary;
