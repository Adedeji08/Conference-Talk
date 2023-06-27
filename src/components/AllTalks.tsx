import React, { useEffect, useState } from "react";
import { Talk } from "../Types/Talk";
import { getAllTalks } from "../services/TalkService";
import CreateTalks from "./CreateTalks";
import { deleteTalk } from "../services/TalkService";
import Chat from "./Chat";

const AllTalks: React.FC = () => {
  const [talks, setTalks] = useState<Talk[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFetchTalksForAttendee = async (attendeeId: string) => {
    setLoading(true);
    const talksForAttendee = await getAllTalks();
    setTalks(talksForAttendee);
    setLoading(false);
  };
  const handleDeleteTalk = async (_id: string) => {
    await deleteTalk(_id);
    setTalks((prevTalks) => prevTalks.filter((talk) => talk.id !== _id));
  };
  return (
    <div className="p-4 container">
      <div className="w-[90%] m-auto p-4 border rounded-lg bg-white overflow-y-auto">
        <CreateTalks />
        <div className="my-3 p-2 grid md:grid-cols-5 sm-grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
          <span>Name</span>
          <span className="sm:text-left text-right">Email</span>
          <span className="sm:text-left text-right">Date Created</span>
          <span className="sm:text-left text-right">Version</span>
          <span className="sm:text-left text-right">Delete</span>
        </div>
        <ul>
          {talks.map((talk) => (
            <li
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              key={talk.id}
            >
              {talk.attendees.map((attendee) => (
                <p>{attendee.name}</p>
              ))}
              {talk.attendees.map((attendee) => (
                <p>{attendee.email}</p>
              ))}
              {talk.attendees.map((attendee) => (
                <p>{attendee.dateCreated}</p>
              ))}
              {talk.attendees.map((attendee) => (
                <p>{attendee.__v}</p>
              ))}
              <button
                className="pr-20"
                onClick={() => handleDeleteTalk(talk.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleFetchTalksForAttendee("specificAttendeeId")}
          disabled={loading}
        >
          {loading ? "Loading..." : "Fetch Talks for Attendee"}
        </button>
      </div>
      <Chat />
    </div>
  );
};

export default AllTalks;
