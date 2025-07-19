import type { RegisterAndReserveFormDto } from "../dtos/sessionDtos";

export interface RegisterAndReserveFormErrors {
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

export const validateAll = (formData: RegisterAndReserveFormDto) => {
   const foundErrors: RegisterAndReserveFormErrors = {
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

   foundErrors.fullName = validateFullName(formData.fullName);

   foundErrors.rePassword = validateRepassword(
      formData.rePassword,
      formData.password
   );

   foundErrors.date = validateDate(formData.date);

   foundErrors.time = validateTime(formData.time);

   foundErrors.location = validateLoation(formData.location);

   return foundErrors;
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

const validateLoation = (param: string) => {
   if (param == "") return "Este campo es requerido.";
   if (param.length < 15)
      return "La ubicación debe tener 15 caracteres minimo.";

   return null;
};
