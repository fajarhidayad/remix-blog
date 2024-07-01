import { Link } from "@remix-run/react";

export default function BlogItem(props: {
  href: string;
  title: string;
  description: string;
  publishDate: string;
}) {
  return (
    <li className="my-5 rounded-xl bg-gradient-to-r from-primary-1 to-primary-2 p-1 dark:to-secondary">
      <div className="flex flex-col space-y-5 rounded-lg bg-slate-100 p-5 dark:bg-slate-700">
        <Link
          to={`${props.href}`}
          className="text-3xl font-semibold underline decoration-primary-1"
        >
          {props.title}
        </Link>
        <p className="text-xl">{props.description}</p>
        <p className="font-semibold">{props.publishDate}</p>
      </div>
    </li>
  );
}
