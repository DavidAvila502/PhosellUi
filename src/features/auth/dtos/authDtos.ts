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
