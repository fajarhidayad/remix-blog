import { MetaFunction } from "@remix-run/node";
import BlogItem from "~/components/BlogItem";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | SuryaDev" },
    { name: "description", content: "Project lists" },
  ];
};

const projects = [
  {
    href: "weather-app",
    title: "Weather App",
    description: "Simple weather forecasting app made with React + Vite",
    publishDate: "17 Nov 2023",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-10 text-4xl font-semibold">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <BlogItem key={project.href} {...project} />
        ))}
      </ul>
    </div>
  );
}
