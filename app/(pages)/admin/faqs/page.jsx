"use client";

import axios from "axios";
import { apiBaseUrl } from "@/db/constants";
import React, { useEffect, useState } from "react";
import Model from "./Model";
import { toast } from "react-toastify";

export default function Page() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetchfaqs();
  }, []);

  const fetchfaqs = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/faqs`);
      setFaqs(response.data);
      console.log(faqs);
    } catch (error) {
      console.error("Error fetching faqs:", error);
    }
  };

  const deletefaq = async (id) => {
    try {
      const res = await axios.delete(`${apiBaseUrl}/api/faqs`, { id });
      console.log(res);
      toast.success("faq deleted");
    } catch (error) {
      toast.error("some error");
      console.error("Error creating new post:", error);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold my-6">FAQ Management</h1>
      <table className="w-full border-collapse border border-gray-300 overflow-x-scroll">
        <thead>
          <tr className="bg-skin-on-fill">
            <th className="p-2">Sr. No.</th>
            <th className="p-2">Question</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqs?.map((faq, i) => (
            <tr key={i} className="border-b border-gray-300">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{faq.question}</td>
              <td className="p-2">
                <div className="flex space-x-2">
                  <Model
                    id={faq._id}
                    question={faq.question}
                    answer={faq.answer}
                  />
                  <button
                    className="bg-error text-white px-2 py-1 rounded"
                    onClick={() => deletefaq(faq._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
