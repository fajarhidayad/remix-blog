import { LoaderFunction, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BlogItem from "~/components/BlogItem";

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
            href={`${posts[item].meta[1].link}`}
            description={posts[item].meta[1].content}
            publishDate={posts[item].meta[1].publishDate}
          />
        ))}
      </ul>
    </div>
  );
}
