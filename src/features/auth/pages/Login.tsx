import { useLogin } from "../hooks/useLogin";
import { useEffect, useState, type ChangeEvent } from "react";
import type { LoginDto } from "../dtos/authDtos";
import { ROUTES } from "../../../app/constants/routes";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../../app/constants/roles";
import ClassicButton from "../../../shared/components/ClassicButton";
import ClassicLabelField from "../../../shared/components/ClassicLabelField";

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

   useEffect(() => {
      if (data?.role == ROLES.CLIENT)
         navigate(ROUTES.CLIENT.ROOT, { replace: true });
   }, [data, navigate]);

   return (
      <div className="flex flex-col items-center justify-center min-h-[100vh]">
         <div
            className="bg-white flex items-center rounded-[20px] min-h-[300px] px-[40px] py-[60px]
                        justify-center flex-col border-solid border-2 border-gray-200 shadow-2xl
                        w-[350px] max-[411px]:w-[300px] sm:w-[400px]
                        "
         >
            <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-9 w-full"
            >
               <p className="text-blue-600 font-bold text-2xl">
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
                  color="bg-blue-600"
                  type="submit"
                  style="rounded-[10px]"
                  isLoading={isLoading}
               />
            </form>
         </div>
      </div>
   );
}
