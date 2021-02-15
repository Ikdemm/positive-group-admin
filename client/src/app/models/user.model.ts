export class User {
    _id: String;
    firstName: String;
    lastName: String;
    birthDate: Date;
    gender: String;
    job: String;
    bonus: String;
    email: String;
    password: String;
    isActivated: Boolean;
    invitees: Array<String>;
    inviter: String;
}
