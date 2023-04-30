import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/profile-pic-1.png';
import AnimatedText from '@/components/AnimatedText';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import TransitionEffect from '../components/TransitionEffect';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>MiguelFuentes | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="p-32 pt-0 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:mr-5">
              <Image
                src={profilePic}
                alt="MiguelFuentes"
                className="w-auto h-auto m-auto rounded-full shadow-2xl lg:inline-block lg:w-full"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi! My name is Miguel Fuentes and I'm a Frontend Developer"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium text-justify md:text-sm sm:text-xs">
              As a skilled frontend developer, I am dedicated to turning ideas
                into innovative web and mobile applications. Explore my latest
                projects, showcasing my expertise in React.js and web
                development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/CV_Miguel_Antonio_Fuentes_Gonzalez.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:mfuentesmodelo@gmail.com"
                  className="relative group ml-4 text-lg font-medium capitalize text-dark dark:text-light md:text-base"
                >
                  Contact
                  <span
                    className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                      router.asPath === 'mailto:mfuentesmodelo@gmail.com'
                        ? 'w-full'
                        : 'w-0'
                    }`}
                  ></span>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
};
