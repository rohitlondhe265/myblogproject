import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="md:mx-12 md:p-6">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="md:flex-grow md:w-1/2 md:pr-24 mb-6 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Before they sold out
            <br className="hidden md:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-3 md:mb-6 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
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
