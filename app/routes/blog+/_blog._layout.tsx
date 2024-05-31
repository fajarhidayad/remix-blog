import { Outlet } from "@remix-run/react";

export default function BlogLayout() {
  return (
    <>
      <article className="prose">
        <Outlet />
      </article>
    </>
  );
}
