interface Attendee {
  _id: string;
  email: string;
  name: string;
  dateCreated: string;
  __v: number;
}

export interface Talk {
  id: string;
  attendees: Attendee[];
  title: string;
  dateCreated: string;
}

export interface TalkCreate {
  title: string;
  attendee: string;
}
