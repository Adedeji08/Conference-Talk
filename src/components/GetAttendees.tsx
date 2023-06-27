import React, { useEffect, useState } from "react";
import { Attendee } from "../Types/Attendees";
import { getAttendees } from "../services/AttendeeService";
import AddAttendee from "./AddAttendee";

const GetAttendees: React.FC = () => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  useEffect(() => {
    const fetchTalks = async () => {
      const allAttendees = await getAttendees();
      setAttendees(allAttendees);
    };

    fetchTalks();
  }, []);
  console.log("Attendees", attendees[4]?.emailAddress);
  return (
    <div className=" container">
      <div className="p-4">
        <div className="w-[50%] m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <AddAttendee />
          <div className="my-3 p-2 grid md:grid-cols-2 sm-grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
          </div>
          <ul>
            {attendees.map((attendee, id) => (
              <li
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-2 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                key={id}
              >
                <div className="flex items-center">
                  <p className="pl-4">
                    {attendee.name.charAt(0).toUpperCase() +
                      attendee.name.slice(1)}
                  </p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {attendee.emailAddress.charAt(0).toLowerCase() +
                    attendee.emailAddress.slice(1)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetAttendees;
