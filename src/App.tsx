import React from "react";
import "./App.css";
import AllTalks from "./components/AllTalks";
import GetAttendees from "./components/GetAttendees";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className=" shadow-md font-bold flex flex-col2 justify-between text-center bg-slate-300">
        <h2 className="text-4xl h-20 pt-5 ml-6 uppercase text-purple-500">
          Conference-Talk App
        </h2>
        <div>
          <ul className="flex justify-evenly pt-5 mr-6">
            <li className="pr-8">
              <Link to="/"> Attendees </Link>
            </li>
            <li>
              <Link to="/allTalks"> Talks </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<GetAttendees />} />
        <Route path="allTalks" element={<AllTalks />} />
      </Routes>
    </div>
  );
}

export default App;
