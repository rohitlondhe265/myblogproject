"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import ThemeButton from "./ThemeButton";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "@/db/constants";
import axios from "axios";
import Image from "next/image";

export default function Header() {
  const session = useSession();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/category`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  return (
    <header className="text-base md:bg-skin-on-fill md:p-1">
      <div className="flex flex-wrap flex-col md:flex-row items-center">
        <div className="md:ml-9 p-1 bg-skin-on-fill flex justify-around md:justify-between items-center w-full md:w-1/2">
          <Link href="/" className=" flex gap-6 font-medium items-center">
            <Image src="/logo.png" alt="Career Pages" width={150} height={75} />
          </Link>
          <div className="flex items-center justify-center space-x-3">
            <ThemeButton />
            {session.status === "authenticated" ? (
              <Link href={"/user"} className="flex items-center">
                  <UserCircleIcon className="w-9 h-9 text-base rounded-full" />
              </Link>
            ) : (
              <Link
                href={"/login"}
                className="inline-flex items-center bg-skin-fill border-0 py-1 px-3 focus:outline-none hover:opacity-75 rounded text-base"
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <nav className="px-2 md:ml-12 bg-primary md:bg-inherit space-x-3 flex flex-wrap items-center justify-center w-full md:w-auto">
          {/* <Link
            href="/posts"
            className="hover:text-gray-300 cursor-pointer text-lg"
          >
            All Posts
          </Link> */}
          {categories?.map((category, i) => (
            <Link
              key={i}
              href={`/category/${category?.slug}`}
              className="text-white md:text-base hover:text-muted cursor-pointer text-lg"
            >
              {category?.title}
            </Link>
          ))}
          {/* <Link
            href="/contact-us"
            className="hover:text-gray-300 cursor-pointer text-lg"
          >
            Contact Us
          </Link>
          <Link
            href="/about-us"
            className="hover:text-gray-300 cursor-pointer text-lg"
          >
            About Us
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
