"use client";

import { apiBaseUrl } from "@/db/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const AddNewFAQ = ({ id, question, answer, onCancel }) => {
  const [formData, setFormData] = useState({
    question: question || "",
    answer: answer || "",
  });
  const router = useRouter();

  const handleSubmit = async () => {
    const data = {id, ...formData};
      try {
        await axios.put(`${apiBaseUrl}/api/faqs`, data);
        setFormData({ ...formData, question: "", answer: "" });
        toast.success("Faq added Successfully")
        router.push("/admin/faqs")
      } catch (error) {
        console.error("Error adding new FAQ", error);
        toast.error("some error")
      }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="p-8 rounded-lg bg-skin-on-fill w-96">
        <form>
          <div className="mb-4">
            <label
              htmlFor="question"
              className="block text-base font-medium mb-2"
            >
              Question
            </label>
            <input
              type="text"
              id="question"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={formData.question}
              onChange={(e) =>
                setFormData({ ...formData, question: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="answer"
              className="block text-base font-medium mb-2"
            >
              Answer
            </label>
            <textarea
              id="answer"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={formData.answer}
              onChange={(e) =>
                setFormData({ ...formData, answer: e.target.value })
              }
              required
              rows="5"
            />
          </div>
        </form>

        <div className="flex justify-end">
          <button
            className="px-4 py-2 text-white bg-error rounded mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-success rounded"
            onClick={handleSubmit}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewFAQ;
