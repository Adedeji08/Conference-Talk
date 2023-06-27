import { Talk, TalkCreate } from "../Types/Talk";
import axios from "axios";

export async function getAllTalks(): Promise<Talk[]> {
  const response = await axios.get(`https://conference-api.onrender.com/talk`);
  return response.data;
}

export const createTalk = async (talks: TalkCreate): Promise<TalkCreate> => {
  const response = await axios.post<TalkCreate>(
    `https://conference-api.onrender.com/talk`,
    talks
  );
  return response.data;
};

export const deleteTalk = async (_id: string): Promise<void> => {
  await axios.delete(`https://conference-api.onrender.com/talk/${_id}`);
};
