export default function Footer() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 text-sm text-ink-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Bharat Verma · Pune, India</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href="https://github.com/bindian0509/bindian0509.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="link-rule hover:text-ink"
          >
            Source
          </a>
          <a href="mailto:bharatv@outlook.in" className="link-rule hover:text-ink">
            Email
          </a>
          <a
            href="https://linkedin.com/in/bharatverma"
            target="_blank"
            rel="noopener noreferrer"
            className="link-rule hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
