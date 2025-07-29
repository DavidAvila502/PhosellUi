export const apiErrorMessages: Record<string, string> = {
   // AUTH
   USERNAME_OR_PASSWORD_INVALID: "El usuario o contraseña invalidos.",
   USER_ALREADY_EXISTS: "Este usuario ya existe.",

   //GENENERAL
   UNKNOWN: "Ha ocurrido un error inesperado, intentalo más tarde.",
   TOKEN_EXPIRED: "Tu inicio de sesión ha expirado.",
   VALIDATION_ERROR: "Algunos campos son invalidos",
};

export const getApiErrorMessage = (errorCode?: string) => {
   if (!errorCode) {
      return apiErrorMessages["UNKNOWN"];
   }

   return apiErrorMessages[errorCode] || apiErrorMessages.UNKNOWN;
};
