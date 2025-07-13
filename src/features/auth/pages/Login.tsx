import { useLogin } from "../hooks/useLogin";
import { useEffect, useState, type ChangeEvent } from "react";
import type { LoginDto } from "../dtos/authDtos";
import { ROUTES } from "../../../app/constants/routes";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../../app/constants/roles";
import ClassicButton from "../../../shared/components/ClassicButton";
import ClassicLabelField from "../../../shared/components/ClassicLabelField";
import loginImage from "../assets/login_image.jpg";

export function Login() {
   const navigate = useNavigate();

   const [credentials, setCredentials] = useState<LoginDto>({
      email: "",
      password: "",
   });

   const { data, isLoading, login } = useLogin();

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCredentials((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!isLoading) {
         login(credentials);
      }
   };

   //TODO: change this into a hook
   useEffect(() => {
      if (data?.role == ROLES.CLIENT)
         navigate(ROUTES.CLIENT.ROOT, { replace: true });
   }, [data, navigate]);

   return (
      <div
         className={`flex flex-col items-center justify-center min-h-[calc(100vh-70px)]`}
      >
         <div
            className="grid grid-cols-[1fr_2fr] rounded-[20px] h-[500px] w-[900px] border-2 border-gray-100 shadow-xl
                  max-lg:w-[700px] max-md:grid-cols-[0fr_1fr] max-md:w-[70%] max-sm:w-[90%]"
         >
            <div className="relative w-full h-full">
               <img
                  src={loginImage}
                  alt="loginImage"
                  className="absolute inset-0 object-cover h-full w-full rounded-tl-[20px] rounded-bl-[20px]"
               />
            </div>

            <div className="w-full h-full bg-white flex items-center justify-center rounded-[20px]">
               {/* Login form */}

               <div
                  className="bg-white flex items-center rounded-br-[20px] rounded-tr-[20px] h-full px-[40px] py-[60px]
                        justify-center flex-col w-[350px] max-sm:w-full"
               >
                  <form
                     onSubmit={handleSubmit}
                     className="flex flex-col gap-9 w-full"
                  >
                     <p className="text-blue-400 font-bold text-2xl">
                        Iniciar sesión
                     </p>

                     <div className="flex flex-col gap-2 items-start">
                        <ClassicLabelField
                           id="emial"
                           name="email"
                           type="email"
                           value={credentials.email}
                           textLabel="Email"
                           onChange={handleChange}
                           required={true}
                        />
                     </div>

                     <div className="flex flex-col gap-2 items-start">
                        <ClassicLabelField
                           id="password"
                           name="password"
                           type="password"
                           value={credentials.password}
                           textLabel="Password"
                           onChange={handleChange}
                           required={true}
                        />
                     </div>

                     <ClassicButton
                        text="Enviar"
                        color="bg-blue-400"
                        type="submit"
                        style="rounded-[10px]"
                        isLoading={isLoading}
                     />
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
