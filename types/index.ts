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

export interface ICourse {
  id: string;
  name: string;
  code: string;
  description: string;
  opening_day: string;
  start_time: string;
  end_time: string;
  room: IRoom;
  is_done: string;
  teacher_id: string;
  session: ISession[];
  students: IUser[];
  teacher: IUser;
  _count: {
    students: number;
    session: number;
  };
}

export interface ISession {
  id: string;
  name: string;
  start: string;
  duration: number;
  repeat: string;
  course_id: string;
  course: ICourse;
}

export interface ISearchResult {
  subjects: ICourse[];
  sessions: ISession[];
}

export interface IRoom {
  id: string;
  address: string;
  name: string;
  wifi: IWifiStatus[];
}

export interface IWifiStatus {
  room_id: string;
  wifi_id: string;
  type: "LARGER" | "SMALLER";
  rssi: number;
  wifi: IWifi;
}

export interface IWifi {
  id: string;
  name: string;
  mac: string;
}
