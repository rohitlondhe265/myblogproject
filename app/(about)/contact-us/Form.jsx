"use client";

import { apiBaseUrl } from "@/db/constants";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiBaseUrl}/api/contact`, formData);
      toast.success("Message sent successfully");
      setFormData({ name: "", email: "", message: "" });
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block  font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Your Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block  font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg"
            placeholder="Your Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block  font-semibold mb-2">
            Message
          </label>
          <textarea
            className="w-full p-2 border rounded-lg"
            rows="3"
            placeholder="Your Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:opacity-75"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
