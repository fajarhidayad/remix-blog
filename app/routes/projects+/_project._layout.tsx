import { LoaderFunction, json } from "@remix-run/node";
import { Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { ChevronLeftIcon } from "lucide-react";
import { readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { motion } from "framer-motion";

export const loader: LoaderFunction = async ({ request }) => {
  const { pathname } = new URL(request.url);
  const filePath = path.join(
    process.cwd(),
    `./app/routes/projects+/_project.${pathname.split("/")[2]}.mdx`,
  );
  const source = await readFile(filePath);
  const { data } = matter(source);
  return json({
    title: data.meta[0].title,
    publishDate: data.meta[1].publishDate,
  });
};

const animateVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectLayout() {
  const { title, publishDate } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            duration: 0.8,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 underline"
        >
          <ChevronLeftIcon />
          <span>Back</span>
        </button>
      </div>
      <motion.header variants={animateVariant} className="mb-16 text-center">
        <p className="mb-8 font-sans font-semibold uppercase">{publishDate}</p>
        <h1 className="text-4xl font-bold leading-[1.3] text-gray-800 dark:text-gray-200 md:text-5xl">
          {title}
        </h1>
      </motion.header>
      <motion.div
        variants={animateVariant}
        className="prose mx-auto max-w-3xl text-base leading-[1.8] dark:prose-invert md:prose-lg lg:prose-xl"
      >
        <Outlet />
      </motion.div>
      <hr className="border-slate-300 dark:border-slate-700" />
      <div className="mx-auto mt-10 max-w-3xl text-slate-600 dark:text-slate-400">
        <p className="mb-5">
          Thank you for reading! Feel free to reach out if you have any
          questions or feedback.
        </p>
        <ul className="flex items-center space-x-4 font-semibold text-primary-1">
          <li>
            <a className="underline" href="https://twitter.com/surya_hidayad">
              Twitter
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://www.linkedin.com/in/fajar-hidayad-0a6963133/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
