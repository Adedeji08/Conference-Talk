import React, { useState } from "react";
import { createAttendee } from "../services/AttendeeService";
import { AddAttendees } from "../Types/Attendees";

const AddAttendee: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    

  const handleAddAttendee = async () => {
    const attendee: AddAttendees = {
      name,
      email,
    };

    const addedAttendee = await createAttendee(attendee);
    console.log("Added attendee:", addedAttendee);

    setName("");
    setEmail("");
  };

  return (
    <div>
      <h1 className="font-bold text-green-400 text-2xl">Add Attendee</h1>
      <input
        className="shadow h-10 w-50 pl-4"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        className="shadow h-10 w-50 pl-4 ml-3"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button
        className="text-1xl bg-green-500 text-white w-20 h-10 text-center border rounded shadow ml-3"
        onClick={handleAddAttendee}
      >
        Add
      </button>
    </div>
  );
};

export default AddAttendee;
