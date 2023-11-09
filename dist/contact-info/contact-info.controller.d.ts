import { ContactInfoCredentialsDto, EditeAddressCredentialsDto } from './dto';
import { ContactInfoService } from './contact-info.service';
import { User } from 'src/auth/entity';
export declare class ContactInfoController {
    private contactInfoService;
    constructor(contactInfoService: ContactInfoService);
    getInfo(user: User): Promise<ContactInfoCredentialsDto>;
    addContactInfo(contactInfoCredentialsDto: ContactInfoCredentialsDto, user: User): Promise<any>;
    editeAddress(editeAddressCredentialsDto: EditeAddressCredentialsDto, user: User): Promise<any>;
}
