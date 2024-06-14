import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="md:mx-12 md:p-6">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="md:flex-grow md:w-1/2 md:pr-24 mb-6 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Exploring Software Engineering:
            <br className="hidden md:inline-block" />
            Pointer for Careers and Preparation Guide
          </h1>
          <p className="mb-3 md:mb-6 leading-relaxed">
            Your go-to resource for coding tips, tech insights, and software engineering best practices. Whether you're a novice or a pro, find inspiration and knowledge to fuel your development journey.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-skin-on-fill rounded text-lg">
              <Link href="/posts">All Posts</Link>
            </button>
            <button className="ml-4 inline-flex text-base bg-skin-on-fill border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-muted rounded text-lg">
              <Link href="/about-us">About Us</Link>
            </button>
          </div>
        </div>
        <div className="md:max-w-lg md:w-full w-5/6">
          <Image
            height={720}
            width={600}
            className="object-cover object-center rounded"
            alt="hero image"
            src="/hero.png"
          />
        </div>
      </div>
    </section>
  );
}
