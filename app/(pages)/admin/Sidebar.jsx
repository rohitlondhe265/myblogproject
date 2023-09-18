"use client";

import { Bars3BottomLeftIcon, Bars3BottomRightIcon, LinkIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const tabs = [
    { title: "Dashboard", slug: "dashboard" },
    { title: "Posts", slug: "posts" },
    { title: "Add New Post", slug: "add" },
    { title: "Categories", slug: "categories" },
    { title: "FAQ", slug: "faqs" },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="absolute top-28 md:top-16 left-2 md:left-60 z-20 "
      >
        {isSidebarOpen ? (
          <XMarkIcon className="h-6 w-6 text-base" />
        ) : (
          <Bars3BottomLeftIcon className="h-6 w-6 text-base" />
        )}
      </button>
      <div
        className={`text-base w-36 md:w-64 min-h-screen ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="hidden md:block">Admin Dashboard</h1>
        </div>
        <ul className="p-4">
          {tabs.map((tab, i) => (
            <li key={i} className="mb-4">
              <Link href={`/admin/${tab.slug}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
