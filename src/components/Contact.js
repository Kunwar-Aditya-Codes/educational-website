import React, { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const contactsCollectionRef = collection(db, "contacts");
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(contactsCollectionRef, { name, email, message });
    alert("Form Submitted!!");
    navigate("/");
  };

  return (
    <div className="bg-[#001220] text-white">
      <ScrollToTop />
      <form
        className="p-4 grid text-center lg:w-1/2 mx-auto "
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-medium text-amber-400 py-4">
          Contact Form
        </h1>
        <label className="text-lg my-2">Name</label>
        <input
          className="text-black"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <label className="text-lg my-2">Email</label>
        <input
          className="text-black"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <label className="text-lg my-2">Message</label>
        <textarea
          className="text-black"
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          cols={50}
          rows={5}
        />
        <button
          type="submit"
          className="my-6 text-xl bg-amber-400 w-1/2 mx-auto p-4 rounded-md text-black font-medium mt-12"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
