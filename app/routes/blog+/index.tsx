import { LoaderFunction, MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | SuryaDev" },
    { name: "description", content: "Blog lists" },
  ];
};

export const loader: LoaderFunction = async () => {
  const posts = import.meta.glob("./*.mdx", { eager: true });

  return json(posts);
};

export default function BlogPage() {
  const posts = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-10 text-4xl font-semibold">Blog</h1>
      <ul className="space-y-4">
        {Object.keys(posts).map((item) => (
          <BlogItem
            key={item}
            title={posts[item].meta[0].title}
            href={posts[item].meta[1].link}
            description={posts[item].meta[1].content}
            publishDate={posts[item].meta[1].publishDate}
          />
        ))}
      </ul>
    </div>
  );
}

function BlogItem(props: {
  href: string;
  title: string;
  description: string;
  publishDate: string;
}) {
  return (
    <li className="dark:to-secondary to-primary-2 from-primary-1 my-5 rounded-xl bg-gradient-to-r p-1">
      <div className="flex flex-col space-y-5 rounded-lg bg-slate-100 p-5 dark:bg-slate-700">
        <Link
          to={`/blog/${props.href}`}
          className="decoration-primary-1 text-3xl font-semibold underline"
        >
          {props.title}
        </Link>
        <p className="text-xl">{props.description}</p>
        <p className="font-semibold">{props.publishDate}</p>
      </div>
    </li>
  );
}
