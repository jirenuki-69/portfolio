import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='my-8 mb-0 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'
    >
      <LiIcon liRef={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a
            href={companyLink}
            target={'_blank'}
            className='text-primary dark:text-primaryDark capitalize'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <ReactMarkdown
          components={{
            ul: ({ children }) => <ul style={{ all: 'revert', whiteSpace: 'pre-wrap' }} className='markdown'>{children}</ul>,
            li: ({ children }) => <li style={{ whiteSpace: 'pre-wrap' }} className='markdown'>{children}</li>,
            p: ({ children }) => <p className='markdown'>{children}</p>
          }}
        >
          {work}
        </ReactMarkdown>
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
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          className='absolute left-9 top-0.5 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
          style={{ scaleY: scrollYProgress }}
        />
        <ul
          className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'
          style={{ listStyle: 'unset' }}
        >
          <Details
            position='Software Engineer'
            company='Autmix'
            companyLink='https://autmix.com/'
            time='September 2023 - April 2025'
            address='Querétaro, México'
            work={`- Led the website development using **Next.js** and **React.js**, coordinating the team and managing updates, improvements, and integrations.\n- Implemented code, integrated and consumed APIs, managed version control with **Git**, **CI/CD pipelines**, **AWS services**, **cookie management**, and **functional testing**.\n- Responsible for the security and proper functioning of the website domain, managing configurations and DNS records in **Cloudflare** according to established protocols.\n- Collaborated with the marketing team using **Google Analytics** tools to optimize campaigns, analyze user behavior, and improve website conversion rates.\n- Worked closely with content and design teams, strengthening my knowledge in user experience (UX) and **SEO**.`}
          />
          <Details
            position='Frontend Web Developer'
            company='HTK Identificación Inteligente'
            companyLink='https://htk-id.com/'
            time='April 2021 - September 2022'
            address='Mérida, Yucatán, México'
            work={`- Developed an asset manager using modern development tools and frameworks like React.js that accelerated development time and improved page performance.\n- Created reusable components, improving code maintainability and speeding up the development of new features.\n- Built a data import module using Excel to extend the application's functionality.`}
          />
          <Details
            position='Frontend Web Developer'
            company='Tyerra'
            companyLink='https://www.tyerra.com/'
            time='April 2022 - July 2022'
            address='Mérida, Yucatán, México'
            work={`- Developed a TikTok-style application for renting and selling real estate using the MERN stack (React.js).\n- Created reusable components, improving code maintainability and accelerating the development of new features.\n- Designed and implemented a cloud-based solution where videos were hosted on an external company domain and streamed within the application.
`}
          />
          <Details
            position='Frontend Web and Mobile Developer'
            company='Universidad Modelo'
            companyLink='https://www.unimodelo.edu.mx/'
            time='January 2020 - July 2021'
            address='Mérida, Yucatán, México'
            work={`- Led the development of a mobile application built with React Native for Ebodas magazine to promote and selltheir services.\n- Developed the web admin panel using the MERN stack (MongoDB, Express, React.js, and Node.js) to managethe company’s clients and vendors.
`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
