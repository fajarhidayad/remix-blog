export default function Footer() {
  return (
    <footer className="mt-auto py-8 text-center text-xs text-gray-700 dark:text-gray-200">
      <p>
        Fajar <span className="text-primary-1">Surya</span> Hidayad &copy;{" "}
        {new Date().getFullYear()}
      </p>
      <p>
        Made with{" "}
        <a href="https://remix.run" className="underline decoration-primary">
          Remix
        </a>
      </p>
    </footer>
  );
}
