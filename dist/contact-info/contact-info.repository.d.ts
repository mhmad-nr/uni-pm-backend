import { Repository } from "typeorm";
import { ContactInfoCredentialsDto } from './dto/contact-info-credentials.dto';
import { ContactInfo } from "./contactInfo.entity";
import { User } from "src/auth/entity";
import { EditeAddressCredentialsDto } from "./dto";
export declare class ContactInfoRepository extends Repository<ContactInfo> {
    getInfo(user: User): Promise<ContactInfoCredentialsDto>;
    editeAddress(editeAddressCredentialsDto: EditeAddressCredentialsDto, user: User): Promise<void>;
    addInfo(contactInfoCredentialsDto: ContactInfoCredentialsDto, user: User): Promise<void>;
}
