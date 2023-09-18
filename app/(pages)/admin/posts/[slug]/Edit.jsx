"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiBaseUrl } from "@/db/constants";
import { Editor } from "@tinymce/tinymce-react";

const Edit = ({ slug }) => {
  const [post, setPost] = useState({});
  const [categories, setCategories] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/posts/${slug}`);
      setPost(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/category`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchPost();
    fetchCategories();
  }, []);

  // Event handler for TinyMCE's onChange event
  const handleEditorChange = (content, editor) => {
    setPost({ ...post, content: content });
  };

  const options = ["published", "draft"];

  const updateKeywordsFromString = (keywordString) => {
    const newKeywords = keywordString
      .split(",")
      .map((keyword) => keyword.trim());

    setPost((prevData) => ({
      ...prevData,
      metaKeywords: newKeywords,
    }));
  };
  const keywordsToString = () => {
    if (post.metaKeywords) {
      return post.metaKeywords.join(", ");
    }
  };

  const save = (e) => {
    e.preventDefault();
    console.log(post);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${apiBaseUrl}/api/posts/${slug}`, post);
      console.log("New post Updated:", response.data);
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  return (
    <div className="max-w-full mx-auto p-6 rounded shadow text-base bg-skin-on-fill">
      <h2 className="text-xl font-semibold mb-4">Update the Post</h2>

      <form onSubmit={handleSubmit}>
        {/* title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={post?.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
        </div>
        {/* content */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-medium mb-2"
          >
            Content
          </label>
          <div className="editor overflow-scroll max-w-screen-md mx-auto p-4">
            <Editor
              value={post.content}
              onEditorChange={handleEditorChange}
              apiKey="idw7xyxfre7k97232m8itu8o6z8mtog3ehj5vk8qax5gn33t"
              init={{
                height: 500,
                menubar: false,
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>
        </div>
        {/* metaDescription */}
        <div className="mb-4">
          <label
            htmlFor="metaDescription"
            className="block text-gray-700 font-medium mb-2"
          >
            metaDescription
          </label>
          <textarea
            id="metaDescription"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={post.metaDescription}
            onChange={(e) =>
              setPost({ ...post, metaDescription: e.target.value })
            }
            required
            rows="5"
          />
        </div>
        {/* category */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-medium mb-2"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={post.category?._id}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category, i) => (
              <option key={i} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        {/* banner */}
        <div className="mb-4">
          <label
            htmlFor="banner"
            className="block text-gray-700 font-medium mb-2"
          >
            Banner
          </label>
          <input
            type="text"
            id="banner"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={post.banner}
            onChange={(e) => setPost({ ...post, banner: e.target.value })}
            required
          />
        </div>
        {/* slug */}
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
            value={post?.slug}
            onChange={(e) => setPost({ ...post, slug: e.target.value })}
            required
          />
        </div>
        {/* metaKeywords */}
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
        {/* status */}
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-700 font-medium mb-2"
          >
            Status
          </label>
          <select
            id="status"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={post.status}
            onChange={(e) => setPost({ ...post, status: e.target.value })}
            required
          >
            <option value="">Select a status</option>
            {options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div className="flex justify-between items-center">
        <button
          onClick={save}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Edit;
