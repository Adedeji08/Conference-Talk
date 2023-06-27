import axios from "axios";
import { Attendee, AddAttendees } from "../Types/Attendees";

export const getAttendees = async (): Promise<Attendee[]> => {
  const response = await axios.get<Attendee[]>(
    `https://conference-api.onrender.com/attendee`
  );
  return response.data;
};

export const createAttendee = async (
  attendee: AddAttendees
): Promise<AddAttendees> => {
  const response = await axios.post<AddAttendees>(
    `https://conference-api.onrender.com/attendee`,
    attendee
  );
  return response.data;
};
