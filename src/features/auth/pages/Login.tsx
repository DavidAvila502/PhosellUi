import { useLogin } from "../hooks/useLogin";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { LoginDto } from "../dtos/authDtos";

export function Login() {
   const [credentials, setCredentials] = useState<LoginDto>({
      email: "",
      password: "",
   });
   const { data, isLoading, error, login } = useLogin();

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCredentials((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      login(credentials);
   };

   function status() {
      if (isLoading) {
         return <>LOADING...</>;
      }
      if (error) {
         return <>Error: {error.message}</>;
      }

      if (data) {
         console.log(data);
         return <>SUCCESS</>;
      }

      return <>Not status yet</>;
   }

   return (
      <div className="flex flex-col items-center justify-center">
         <h1>Login</h1>

         <div className="min-w-[40%] min-h-[300px] bg-blue-500 flex items-center justify-center flex-col">
            <div>
               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <label className="text-white text-2xl">
                     email:
                     <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                        className="ml-[10px]"
                     />
                  </label>

                  <label className="text-white text-2xl">
                     password:
                     <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        className="ml-[10px]"
                     />
                  </label>

                  <button type="submit" className="bg-green-500">
                     Enviar
                  </button>
               </form>

               <div>
                  <p>Estado:</p>
                  <p>{status()}</p>
               </div>
            </div>
         </div>
      </div>
   );
}
