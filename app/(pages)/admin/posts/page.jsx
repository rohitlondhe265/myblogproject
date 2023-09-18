"use client";
import { apiBaseUrl } from "@/db/constants";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import FaqModel from "./FaqModel";

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/posts`);
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDelete = async (slug) => {
    try {
      await axios.delete(`${apiBaseUrl}/api/posts/${slug}`);
      console.log("deleted");
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="">
        <table className="min-w-full border overflow-x-hidden">
          <thead>
            <tr>
              <th className="border px-3 py-2">Title</th>
              <th className="border px-3 py-2">Category</th>
              <th className="border px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post, i) => (
              <tr key={i}>
                <td className="border px-3 py-2">{post.title}</td>
                <td className="border px-3 py-2">{post.category?.title}</td>
                <td className="border px-3 py-2">
                  <button
                    onClick={() => router.push(`/admin/posts/${post.slug}`)}
                    className="mr-2 text-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.slug)}
                    className="text-error"
                  >
                    Delete
                  </button>
                </td>
                <td className="border px-3 py-2">
                  <FaqModel postId={post._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default PostsTable;
