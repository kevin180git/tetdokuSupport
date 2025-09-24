import Link from "next/link"

interface HeaderProps {
  currentPage?: "home" | "support" | "privacy"
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-5 flex justify-between items-center h-[70px]">
        <div className="logo">
          <Link href="/" className="text-indigo-500 text-3xl font-bold">
            Tetdoku
          </Link>
        </div>
        <ul className="flex list-none gap-8">
          <li>
            <Link
              href="/"
              className={`font-medium transition-colors ${
                currentPage === "home" ? "text-indigo-500" : "text-slate-500 hover:text-indigo-500"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className={`font-medium transition-colors ${
                currentPage === "support" ? "text-indigo-500" : "text-slate-500 hover:text-indigo-500"
              }`}
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              className={`font-medium transition-colors ${
                currentPage === "privacy" ? "text-indigo-500" : "text-slate-500 hover:text-indigo-500"
              }`}
            >
              Privacy
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
