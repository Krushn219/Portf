import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between 
      md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-3">
          {position}&nbsp;
          <a
            href={companyLink}
            className="text-primary dark:text-primaryDark capitalize"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm mt-3">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32 lg:my-32 md:my-32 sm:my-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center lg:text-7xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            position="Back End Developer"
            company="GreeWeb"
            companyLink="http://www.greewebsolutions.com/"
            time="june 2022-Present"
            address="Surat, Gujarat, India"
            work="Joined As a Trainee. Learn and Work in Back-end Development. Worked on different projects for different clients. Assisted the head designer in numerous projects. Works closely with freshers and team."
          />
          <Details
            position="Front-end developer"
            company="FuthreTech BizSoft LLP "
            companyLink="http://futuretechbizsoft.com/NewWebsite/Default.aspx"
            time="June 2021- Jan 2019"
            address="Surat, Gujarat, India."
            work="Worked on a team responsible for developing new features for Clients's Websites using HTML5, CSS3, Bootstrap."
          />
          {/* <Details
            position="Software Developer"
            company="Amazon"
            companyLink="https://www.amazone.com"
            time="2020-2021"
            address="Battle, WA."
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
          />
          <Details
            position="Intern"
            company="Facebook"
            companyLink="https://www.facebook.com"
            time="Summer 2021"
            address="Menton Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
share short-form video content, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature."
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
