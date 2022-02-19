import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Events = () => {
  const [events, setEvents] = useState([]);
  const eventCollection = collection(db, "events");

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(eventCollection);
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  });

  return (
    <div className="bg-[#001220] text-white min-h-screen">
      {events.map((event) => {
        return (
          <div className=" p-4">
            <div className="grid justify-items-center py-2 border-2 rounded-md  lg:flex lg:justify-evenly lg:items-center lg:p-6 ">
              <img
                src={event.image}
                alt=""
                className="w-1/2 lg:w-1/3 rounded-lg"
              />
              <div className="text-center">
                <h1 className="my-3 text-2xl lg:text-4xl font-medium">
                  {event.title}
                </h1>
                <p className="text-lg lg:text-3xl my-2">{event.date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
