enum accountTypeEnum {
    'free',
    'pending',
    'premium',
}

export class User {
    _id: String;
    firstName: String;
    lastName: String;
    birthDate: Date;
    gender: String;
    job: String;
    bonus: String;
    email: String;
    accountType: accountTypeEnum;
    password: String;
    isActivated: Boolean;
    invitees: Array<String>;
    inviter: String;
    image: String;
    phone: Number;
    location: String;
}
