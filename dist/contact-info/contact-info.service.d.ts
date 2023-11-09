import { ContactInfoRepository } from './contact-info.repository';
import { ContactInfoCredentialsDto } from "./dto/contact-info-credentials.dto";
import { User } from 'src/auth/entity';
import { EditeAddressCredentialsDto } from './dto';
export declare class ContactInfoService {
    private contactInfoRepository;
    constructor(contactInfoRepository: ContactInfoRepository);
    getInfo(user: User): Promise<ContactInfoCredentialsDto>;
    addContactInfo(contactInfoCredentials: ContactInfoCredentialsDto, user: User): Promise<any>;
    editeAddress(editeAddressCredentialsDto: EditeAddressCredentialsDto, user: User): Promise<any>;
}
