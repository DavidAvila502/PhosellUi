import type { RegisterClientFormDataDTO } from "../dtos/authDtos";

export interface RegisterFormDataErrors {
   fullName: string | null;
   email: string | null;
   password: string | null;
   rePassword: string | null;
   phone: string | null;
   phoneCode: string | null;
   city: string | null;
}

export const validateAll = (
   formularyData: RegisterClientFormDataDTO
): RegisterFormDataErrors => {
   const foundErrors: RegisterFormDataErrors = {
      fullName: null,
      email: null,
      password: null,
      rePassword: null,
      phone: null,
      phoneCode: null,
      city: null,
   };

   foundErrors.fullName = validateFullName(formularyData.fullName);
   foundErrors.email = validateEmail(formularyData.email);
   foundErrors.password = validatePassword(formularyData.password);
   foundErrors.phone = validatePhone(formularyData.phone);
   foundErrors.city = validateCity(formularyData.city);
   foundErrors.rePassword = validateRepassword(
      formularyData.rePassword,
      formularyData.password
   );

   return foundErrors;
};

const validateFullName = (param: string) => {
   if (param == "") {
      return "Este campo es requerido.";
   }

   return null;
};

const validateEmail = (param: string) => {
   if (param == "") {
      return "Este campo es requerido.";
   }

   return null;
};

const validatePassword = (param: string) => {
   if (param == "") {
      return "Este campo es requerido.";
   }

   return null;
};

const validatePhone = (param: string) => {
   if (param == "") {
      return "Este campo es requerido.";
   }

   return null;
};
const validateCity = (param: string) => {
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
