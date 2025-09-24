import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center flex-wrap gap-4">
        <p>&copy; 2025 Nervous Hippo LLC. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/support" className="text-slate-400 hover:text-white transition-colors">
            Support
          </Link>
          <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
