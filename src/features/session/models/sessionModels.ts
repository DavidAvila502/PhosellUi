import type { SessionPackage } from "../../sessionPackage/models/packageModels";
import type {
   SessionClientDto,
   SessionPhotographerDto,
} from "../dtos/sessionDtos";
import type { SessionStatus } from "../types/sessionStatus";

export interface Session {
   id: string;
   client: SessionClientDto;
   photographer: SessionPhotographerDto;
   sessionPackage: SessionPackage;
   sessionDate: string;
   sessionTime: string;
   location: string;
   sessionStatus: SessionStatus;
   photosLink: string;
   cancelReason?: string;
}
