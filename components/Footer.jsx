import { CursorArrowRippleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default async function Footer() {
  const res = await fetch(`${process.env.API_BASE_URL}/category`);
  const categories = await res.json();
  return (
    <footer className="text-base bg-skin-on-fill w-full">
      <div className="flex justify-center p-6 md:p-9 md:space-x-36 items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
     
        <div className="flex justify-center flex-col md:flex-row md:gap-36">
          <div>
            <h2 className="text-primary capitalize text-lg font-semibold">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10 flex flex-col">
              {categories?.map((category, i) => (
                <Link
                  key={i}
                  href={`/category/${category?.slug}`}
                  className="text-base hover:text-muted cursor-pointer text-lg"
                >
                  {category?.title}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-primary capitalize text-lg font-semibold">
              About
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href={"/about-us"}
                  className="text-base hover:text-muted cursor-pointer text-lg"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact-us"}
                  className="text-base hover:text-muted cursor-pointer text-lg"
                >
                  Contact Us
                </Link>
              </li>
            </nav>
          </div>
          <div>
            <h2 className="text-primary capitalize text-lg font-semibold">
              Legal Pages
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href={"/disclaimer"}
                  className="text-base hover:text-muted cursor-pointer text-lg"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href={"/terms-and-conditions"}
                  className="text-base hover:text-muted cursor-pointer text-lg"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href={"/privacy-policy"}
                  className="text-base hover:text-muted cursor-pointer text-lg"
                >
                  {" "}
                  Privacy Policy
                </Link>
              </li>
            </nav>
          </div>
        </div>

        <div className="text-center">
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <CursorArrowRippleIcon className="w-14 h-14" />
            <span className="ml-3 text-xl">Career Pages</span>
          </a>
          <p className="mt-2 text-muted">
            Copyright @CareerPages.me 2023
          </p>
        </div>

      </div>
    </footer>
  );
}
