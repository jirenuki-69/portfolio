import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon liRef={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target={'_blank'}
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="text-justify font-medium text-md w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0.5 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer"
            company="Universidad Modelo"
            companyLink="https://www.unimodelo.edu.mx/"
            time="January 2021 - July 2021"
            address="Mérida, Yucatán, México"
            work="Worked on a team responsible for planning and developing the Ebodas rebranding with ReactJS and React Native."
          />
          <Details
            position="Frontend Web Developer"
            company="José Miguel Cruz Miranda"
            companyLink="mailto:josemiguelcruz101@gmail.com"
            time="April 2021 - April 2022"
            address="Mérida, Yucatán, México"
            work="Front-end development with JavaScript (React). Development of styles with
            Material UI and SASS. React redux usage to maintain the state of the
            application. Use of NGINX and AWS for app deployment."
          />
          <Details
            position="Frontend Web Developer"
            company="Tyerra"
            companyLink="https://www.tyerra.com/"
            time="April 2022 - July 2022"
            address="Mérida, Yucatán, México"
            work="Frontend development with Javascript (NextJs). Cloud management in AWS to create a streaming video cloud solution. Material UI usage for component creation."
          />
          <Details
            position="Frontend Web Developer"
            company="HTK Identificación Inteligente"
            companyLink="https://htk-id.com/"
            time="April 2022 - September 2022"
            address="Mérida, Yucatán, México"
            work="Front-end development with JavaScript (React). Development of styles with
            Material UI and SASS. React redux usage to maintain the state of the
            application. Use of NGINX and AWS for app deployment."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
