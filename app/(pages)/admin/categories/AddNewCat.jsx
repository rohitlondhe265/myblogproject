"use client";

import { apiBaseUrl } from "@/db/constants";
import axios from "axios";
import { useState } from "react";

const AddNewCat = ({
  id,
  title,
  description,
  slug,
  metaKeywords,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    id: id || "",
    title: title || "",
    description: description || "",
    slug: slug || "",
    metaKeywords: metaKeywords || [],
  });

  const updateKeywordsFromString = (keywordString) => {
    const newKeywords = keywordString
      .split(",")
      .map((keyword) => keyword.trim());

    setFormData((prevData) => ({
      ...prevData,
      metaKeywords: newKeywords,
    }));
  };
  const keywordsToString = () => {
    if (formData.metaKeywords) {
      return formData.metaKeywords.join(", ");
    }
  };
  const handleSubmit = async () => {
    if (formData.id) {
      try {
        const res = await axios.put(`${apiBaseUrl}/api/category`, formData);
        setFormData({
          ...formData,
          title: "",
          description: "",
          slug: "",
          metaKeywords: [],
        });
        console.log(res)
      } catch (error) {
        console.error("Error creating new post:", error);
      }
    } else {
      try {
        await axios.post(`${apiBaseUrl}/api/category`, formData);
        setFormData({ ...formData, title: "", description: "", slug: "" });
      } catch (error) {
        console.error("Error creating new post:", error);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="p-8 rounded-lg w-96">
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-base font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
              rows="5"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="slug"
              className="block text-gray-700 font-medium mb-2"
            >
              Slug
            </label>
            <input
              type="text"
              id="slug"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="keywords"
              className="block text-gray-700 font-medium mb-2"
            >
              Enter Comma Seperated Meta Keywords
            </label>
            <input
              type="text"
              id="keywords"
              value={keywordsToString()}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => updateKeywordsFromString(e.target.value)}
              required
            />
          </div>
          {/* <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded hover:opacity-75"
          >
            Submit
          </button> */}
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

export default AddNewCat;
