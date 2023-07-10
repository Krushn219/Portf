import Link from "next/link";
import React from "react";
import { CircularText, CircularText2 } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto lg:right-8 lg:left-auto  lg:bottom-auto md:absolute sm:right-0 xs:top-[-10px] lg:top-[-10px]">
      <div className="w-48 h-auto flex items-center justify-center relative lg:w-36">
        <CircularText2
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:krushnavandangaudani@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-0.3 -translate-x-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light lg:w-16 lg:h-16 lg:text-[14px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
