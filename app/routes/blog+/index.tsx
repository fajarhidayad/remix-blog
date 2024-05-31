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
    <>
      <h1 className="mb-5 text-3xl font-semibold">Blog</h1>
      <ul className="space-y-4">
        {Object.keys(posts).map((item) => (
          <li key={item}>
            <Link
              to={`/blog/${posts[item].meta[2].link}`}
              className="text-xl font-semibold underline"
            >
              {posts[item].meta[0].title}
            </Link>
            <p>{posts[item].meta[2].content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
