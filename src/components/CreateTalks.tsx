import React, { useState } from "react";
import { TalkCreate } from "../Types/Talk";
import { createTalk } from "../services/TalkService";

const CreateTalks: React.FC = () => {
  const [title, setTitle] = useState("");
  const [attendee, setAttendee] = useState("");

  const hahandleCreateTalk = async () => {
    const newTalks: TalkCreate = {
      title,
      attendee,
    };

    const talksCreation = await createTalk(newTalks);
    console.log("Added attendee:", talksCreation);

    setTitle("");
    setAttendee("");
  };
  return (
    <div>
      <h1>Create New Talk</h1>
      <input
        className="shadow h-10 w-50 pl-4"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Name"
      />
      <textarea
        className="shadow w-50 ml-4 pl-4"
        value={attendee}
        onChange={(e) => setAttendee(e.target.value)}
        placeholder="Attendee"
      ></textarea>
      <button
        className="text-1xl bg-green-500 text-white w-20 h-10 text-center border rounded shadow ml-3"
        onClick={hahandleCreateTalk}
      >
        Create
      </button>
    </div>
  );
};

export default CreateTalks;
