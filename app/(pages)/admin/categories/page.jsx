"use client";

import axios from "axios";
import { apiBaseUrl } from "@/db/constants";
import React, { useEffect, useState } from "react";
import Model from "./Model";

export default function Page() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/category`);
      setCategories(response.data);
      console.log(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`${apiBaseUrl}/api/category/?id=${id}`);
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <Model heading="Create a New Category" btnText="Add New" />
      <h1 className="text-2xl font-bold my-6">Category Management</h1>
      <table className="w-full border-collapse border border-gray-300 overflow-x-scroll">
        <thead>
          <tr className="bg-skin-on-fill">
            <th className="p-2">Sr. No.</th>
            <th className="p-2">Title</th>
            <th className="p-2">Slug</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category, i) => (
            <tr key={i} className="border-b border-gray-300">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{category.title}</td>
              <td className="p-2">{category.slug}</td>
              <td className="p-2">
                <div className="flex space-x-2">
                  <Model
                    heading={`Update The Category`}
                    btnText="Update"
                    id={category._id}
                    title={category.title}
                    description={category.description}
                    slug={category.slug}
                    metaKeywords={category?.metaKeywords}
                  />
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => deleteCategory(category._id)}
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
