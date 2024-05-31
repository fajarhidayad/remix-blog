import { type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "SuryaDev" },
    { name: "description", content: "Welcome to my blog!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-center text-xl font-bold">Welcome to my Blog</h1>
    </div>
  );
}
