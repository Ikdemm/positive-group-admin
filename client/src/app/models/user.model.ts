enum AccountTypeEnum {
    free = 'free',
    requested = 'requested',
    premium = 'premium',
}

enum genderEnum {
    'male',
    'female',
    null
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
    accountType: AccountTypeEnum;
    password: String;
    isActivated: Boolean;
    invitees: Array<String>;
    inviter: String;
    image: String;
    phone: Number;
    location: String;
}
