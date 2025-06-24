const RegisterAndReserveFormulary = () => {
   return (
      <form
         className="flex flex-col items-center justify-center
             rounded-[20px] pt-[8px] w-[80%] bg-white h-[700px]"
      >
         <div className="bg-blue-500 p-[10px] flex justify-center w-full rounded-bl-[20px] rounded-br-[20px]">
            <ul className="steps text-xl">
               <li className="step text-white step-primary">
                  Contacto y cuenta
               </li>
               <li className="step text-white">Paquetes</li>
               <li className="step text-white">Sesion</li>
            </ul>
         </div>

         <div className="flex flex-col items-center h-full w-full gap-3 overflow-auto">
            <p className="text-2xl font-bold text-gray-600 text-center mt-[40px]">
               Información de Contacto y Cuenta
            </p>

            <label htmlFor="name" className="block w-[60%]">
               <span className="text-[18px] text-gray-500">Nombre:</span>
               <input
                  id="name"
                  type="text"
                  className="input w-full focus:outline-none text-xl 
               focus:border-blue-400 bg-gray-50 focus:bg-white p-5 
               transition-all duration-200"
               />
            </label>

            {/* ------- */}
         </div>
      </form>
   );
};

export default RegisterAndReserveFormulary;
