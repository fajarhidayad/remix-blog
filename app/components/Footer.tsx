export default function Footer() {
  return (
    <footer className="mt-auto py-3 text-center text-sm">
      <p>
        Fajar <span className="text-blue-500">Surya</span> Hidayad &copy;{" "}
        {new Date().getFullYear()}
      </p>
      <p>
        Made with{" "}
        <a href="https://remix.run" className="text-blue-500 underline">
          Remix
        </a>
      </p>
    </footer>
  );
}
