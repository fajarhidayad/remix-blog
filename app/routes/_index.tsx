import { type MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import { ReactNode } from "react";
import ExpressIcon from "~/icons/ExpressIcon";
import GoIcon from "~/icons/GoIcon";
import LaravelIcon from "~/icons/LaravelIcon";
import MediumIcon from "~/icons/MediumIcon";
import NestjsIcon from "~/icons/NestjsIcon";
import NextjsIcon from "~/icons/NextjsIcon";
import ReactIcon from "~/icons/ReactIcon";
import RemixIcon from "~/icons/RemixIcon";
import { SassIcon } from "~/icons/SassIcon";
import { TailwindIcon } from "~/icons/TailwindIcon";
import TrpcIcon from "~/icons/TrpcIcon";
import { TypescriptIcon } from "~/icons/TypescriptIcon";
import VueIcon from "~/icons/VueIcon";

export const meta: MetaFunction = () => {
  return [
    { title: "SuryaDev" },
    { name: "description", content: "Welcome to my blog!" },
  ];
};

const textVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const certificates = [
  {
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/A4VMBTJ2NBQK",
    title: "Meta Front-End Developer Specialization",
    description: "Coursera",
    date: "September 2023",
  },
  {
    href: "https://www.coursera.org/account/accomplishments/certificate/QAUPASQMA9ER",
    title: "Database Structures and Management with MySQL",
    description: "Coursera",
    date: "May 2024",
  },
];

export default function Index() {
  return (
    <div className="py-10">
      <section className="my-10 flex flex-col items-center justify-between space-x-5 py-10 md:flex-row">
        <motion.div
          variants={{
            initial: { opacity: 1 },
            animate: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                duration: 1,
              },
            },
          }}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={textVariant}
            className="mb-5 text-center text-4xl font-bold leading-relaxed md:text-start"
          >
            👋 Hello!{" "}
            <span className="text-primary-1">I&apos;m Fajar Hidayad</span>
          </motion.h1>
          <motion.h2
            variants={textVariant}
            className="text-center text-xl font-medium leading-8 md:text-start"
          >
            A passionate Fullstack Developer dedicated to bringing creative
            solutions to life.
          </motion.h2>
        </motion.div>
        <motion.div
          variants={{
            initial: {
              scale: 0,
            },
            animate: {
              scale: 1,
            },
          }}
          transition={{ type: "spring", duration: 0.7 }}
          initial="initial"
          animate="animate"
          className="p-10"
        >
          <picture className="block min-h-[250px]">
            <source srcSet="/assets/home.png" media="(min-width: 600px)" />
            <img
              className="max-w-lg:max-w-[400px] mb-[1em] w-full max-w-[550px]"
              alt="Illustration of person reading a book"
              src="/assets/home.png"
              width="550"
              height="466"
            />
          </picture>
          <div className="text-sm">
            Illustration by{" "}
            <a
              className="text-primary-2 underline dark:text-primary-1"
              href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
            >
              Icons 8
            </a>{" "}
            from{" "}
            <a
              className="text-primary-2 underline dark:text-primary-1"
              href="https://icons8.com/illustrations"
            >
              Ouch!
            </a>
          </div>
        </motion.div>
      </section>

      <section className="my-10 py-10">
        <motion.div
          variants={{
            initial: { opacity: 1 },
            animate: { opacity: 1 },
          }}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.8 }}
          className="grid grid-cols-3 gap-y-5"
        >
          <div className="col-span-3 place-self-center md:col-span-1">
            <motion.h1
              variants={{
                initial: {
                  x: 50,
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                  x: 0,
                },
              }}
              className="text-2xl font-semibold"
            >
              About me
            </motion.h1>
          </div>

          <div className="col-span-3 border-l-0 border-l-primary-1 pl-5 md:col-span-2 md:border-l-2">
            <motion.p variants={textVariant} className="mb-5 text-lg leading-8">
              Welcome to my corner of the web! As a Fullstack Developer, I am
              dedicated to creating sleek and functional designs that resonate
              with contemporary needs.
            </motion.p>
            <motion.p variants={textVariant} className="mb-5 text-lg leading-8">
              Browse through my portfolio to see a collection of projects that
              highlight my commitment to excellence and innovation.
            </motion.p>
            <motion.p
              variants={textVariant}
              className="text-lg font-semibold leading-8 text-primary-1"
            >
              Let’s work together to bring your vision to life!
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="my-10 py-10">
        <h1 className="mb-5 text-center text-2xl font-semibold">Experiences</h1>
        <div className="mb-8 grid grid-cols-3 gap-x-5">
          <div className="col-span-1 place-content-center border-r-2 border-r-primary-1 px-5">
            <h2 className="text-center text-xl font-semibold">2021</h2>
            <h3 className="text-center">Freelance</h3>
          </div>
          <ul className="col-span-2">
            <li className="mb-4">
              <h4 className="text-lg font-semibold">Korlantas Polri</h4>
              <p className="">
                Create a responsive landing page using Tailwind CSS and Laravel
                8
              </p>
            </li>
            <li className="mb-4">
              <h4 className="text-lg font-semibold">Coffeehub</h4>
              <p className="">
                Create a whole frontend page for CoffeeHub shop
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-8 grid grid-cols-3 gap-x-5">
          <div className="col-span-1 place-content-center border-r-2 border-r-primary-1 px-5">
            <h2 className="text-center text-xl font-semibold">2020</h2>
            <h3 className="text-center">Intern</h3>
          </div>
          <ul className="col-span-2">
            <li className="mb-4">
              <h4 className="text-lg font-semibold">Gojek Clone</h4>
              <p className="">
                Create mobile app with functionality like GoJek App. The
                technology used for building this app is React Native and
                Firebase.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="my-10 py-10">
        <h1 className="mb-8 text-center text-2xl font-semibold">
          My Tech Stacks
        </h1>

        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2">
          <div className="p-5">
            <h2 className="mb-4 text-center text-lg font-semibold">Frontend</h2>
            <ul className="grid grid-cols-3 gap-x-5 gap-y-7 md:grid-cols-4 md:gap-y-4">
              <WebIconItem name="React">
                <ReactIcon fontSize={60} />
              </WebIconItem>
              <WebIconItem name="Next.js">
                <NextjsIcon fontSize={60} />
              </WebIconItem>
              <WebIconItem name="Remix">
                <RemixIcon fontSize={60} />
              </WebIconItem>
              <WebIconItem name="Vue">
                <VueIcon fontSize={60} />
              </WebIconItem>
              <WebIconItem name="TypeScript">
                <TypescriptIcon fontSize={60} />
              </WebIconItem>
              <WebIconItem name="Tailwindcss">
                <TailwindIcon fontSize={60} />
              </WebIconItem>
              <WebIconItem name="Sass">
                <SassIcon fontSize={60} />
              </WebIconItem>
            </ul>
          </div>
          <div className="p-5">
            <h2 className="mb-4 text-center text-lg font-semibold">Backend</h2>
            <ul className="grid grid-cols-3 gap-x-5 gap-y-7 md:grid-cols-4 md:gap-y-4">
              <WebIconItem name="Express.js">
                <ExpressIcon fontSize={60} />
              </WebIconItem>
              <WebIconItem name="Nest.js">
                <NestjsIcon fontSize={60} />
              </WebIconItem>
              <WebIconItem name="tRPC">
                <TrpcIcon fontSize={60} />
              </WebIconItem>
              <WebIconItem name="Laravel">
                <LaravelIcon fontSize={60} />
              </WebIconItem>
              <WebIconItem name="Go">
                <GoIcon fontSize={60} />
              </WebIconItem>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-10 py-10">
        <h1 className="mb-5 text-center text-2xl font-semibold">
          Certifications
        </h1>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {certificates.map((item) => (
            <CertificationItem key={item.title} {...item} />
          ))}
        </ul>
      </section>

      <section className="my-10 py-10">
        <motion.div
          variants={{
            initial: { opacity: 1 },
            animate: { opacity: 1 },
          }}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.8 }}
          className="mx-auto flex w-fit flex-col items-center space-y-10 md:flex-row md:space-x-5 md:space-y-0"
        >
          <div className="col-span-3 place-self-center md:col-span-1">
            <motion.h1
              variants={{
                initial: {
                  x: 50,
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                  x: 0,
                },
              }}
              className="text-2xl font-semibold"
            >
              You can reach out here
            </motion.h1>
          </div>

          <div className="col-span-3 border-l-0 border-l-primary-1 pl-5 md:col-span-2 md:border-l-2">
            <motion.a
              variants={textVariant}
              href="https://www.linkedin.com/in/fajar-hidayad-0a6963133/"
              className="mb-5 flex cursor-pointer items-baseline space-x-4 text-lg leading-8 hover:text-primary-1"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              variants={textVariant}
              href="https://github.com/fajarhidayad"
              className="mb-5 flex cursor-pointer items-baseline space-x-4 text-lg leading-8 hover:text-primary-1"
            >
              <GithubIcon />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              variants={textVariant}
              href="https://twitter.com/surya_hidayad"
              className="mb-5 flex cursor-pointer items-baseline space-x-4 text-lg leading-8 hover:text-primary-1"
            >
              <TwitterIcon />
              <span>Twitter</span>
            </motion.a>
            <motion.a
              variants={textVariant}
              href="https://medium.com/@fajarhidayad"
              className="mb-5 flex cursor-pointer items-baseline space-x-4 text-lg leading-8 hover:text-primary-1"
            >
              <MediumIcon />
              <span>Medium</span>
            </motion.a>
            <motion.p
              variants={textVariant}
              className="mb-5 flex items-baseline space-x-4 text-lg leading-8"
            >
              <MailIcon />
              <span>fajarsuryahidayad@gmail.com</span>
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const WebIconItem = (props: { children: ReactNode; name: string }) => {
  return (
    <li className="flex flex-col items-center space-y-2">
      {props.children}
      <p className="text-center text-sm">{props.name}</p>
    </li>
  );
};

const CertificationItem = (props: {
  title: string;
  description: string;
  href: string;
  date: string;
}) => {
  return (
    <li className="rounded-xl border border-primary-1 p-7">
      <p className="mb-3">{props.date}</p>
      <a
        href={props.href}
        className="text-xl font-semibold leading-relaxed underline"
      >
        {props.title}
      </a>
      <p className="mt-3 font-semibold leading-relaxed">{props.description}</p>
    </li>
  );
};
