import type { RegisterAndReserveFormularyDto } from "../dtos/sessionDtos";

export interface RegisterAndReserveFormularyErrors {
   fullName: string | null;
   email: string | null;
   phone: string | null;
   phoneCode: string | null;
   password: string | null;
   rePassword: string | null;
   city: string | null;
   packageId: string | null;
   location: string | null;
   date: string | null;
   time: string | null;
}
//TODO: Add a validation for the location length
export const validateAll = (formularyData: RegisterAndReserveFormularyDto) => {
   const foundedErrors: RegisterAndReserveFormularyErrors = {
      fullName: null,
      email: null,
      phone: null,
      phoneCode: null,
      password: null,
      rePassword: null,
      city: null,
      packageId: null,
      location: null,
      date: null,
      time: null,
   };

   foundedErrors.fullName = validateFullName(formularyData.fullName);

   foundedErrors.rePassword = validateRepassword(
      formularyData.rePassword,
      formularyData.password
   );

   foundedErrors.date = validateDate(formularyData.date);

   foundedErrors.time = validateTime(formularyData.time);

   return foundedErrors;
};

const validateFullName = (param: string) => {
   if (param == "") {
      return "Este campo es requerido.";
   }

   return null;
};

const validateRepassword = (param1: string, param2: string) => {
   if (param1 == "") return "Este campo es requerido.";
   if (param1 != param2) return "La contraseña no coincide.";

   return null;
};

const validateDate = (param: string) => {
   if (param == "") return "Este campo es requerido.";
   if (param == "--") return "Seleccione una fecha valida.";

   return null;
};

const validateTime = (param: string) => {
   if (param == "") {
      return "Este campo es requerido.";
   }

   return null;
};
