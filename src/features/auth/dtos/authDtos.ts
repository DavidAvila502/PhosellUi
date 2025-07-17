export interface LoginDto {
   email: string;
   password: string;
}

export interface LoginResponseDto {
   id: string;
   email: string;
   fullName: string;
   role: string;
   jwtToken: string;
   expiresIn: number;
}

export interface RegisterClientDto {
   fullName: string;
   email: string;
   password: string;
   phone: string;
   city: string;
}

export interface RegisterClientResponseDto {
   id: string;
   fullName: string;
   email: string;
   phone: string;
   city: string;
}
