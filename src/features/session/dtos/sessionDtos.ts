export interface RegisterAndReserveFormDto {
   fullName: string;
   email: string;
   phone: string;
   phoneCode: string;
   password: string;
   rePassword: string;
   city: string;
   packageId: string;
   location: string;
   date: string;
   time: string;
}

export interface SessionAndClientInsertDto {
   fullName: string;
   email: string;
   password: string;
   phone: string;
   city: string;
   sessionPackageId: string;
   sessionDate: string;
   sessionTime: string;
   location: string;
}

export interface SessionClientDto {
   id: string;
   fullName: string;
   phone: string;
}

export interface SessionPhotographerDto {
   id: string;
   fullName: string;
   phone: string;
}
