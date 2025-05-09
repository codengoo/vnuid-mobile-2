export interface IResponseLogin {
  token: string;
  uid: string;
  allow: string[];
}

export interface IUser {
  id: string;
  sid: string;
  email: string;
  dob?: Date;
  official_class: string;
  name: string;
  phone: string;
  address: string;
  department: string;
}
