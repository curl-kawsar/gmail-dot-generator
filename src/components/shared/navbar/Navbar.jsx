"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, Github, Star, Info, HelpCircle } from "lucide-react"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="max-w-7xl mx-auto flex h-16 items-center px-4">
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-r from-blue-600 to-red-500 flex items-center justify-center">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
            Gmail Dot Generator
          </span>
        </div>

        <div className="flex items-center justify-center flex-1 px-8">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-blue-600 flex items-center gap-1 ${
                pathname === "/" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Mail className="h-4 w-4" />
              Generator
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-blue-600 flex items-center gap-1 ${
                pathname === "/about" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Info className="h-4 w-4" />
              About
            </Link>
            <Link
              href="/help"
              className={`text-sm font-medium transition-colors hover:text-blue-600 flex items-center gap-1 ${
                pathname === "/help" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <HelpCircle className="h-4 w-4" />
              Help
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/curl-kawsar/gmail-dot-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-red-500 text-white border-0 hover:from-blue-700 hover:to-red-600"
            asChild
          >
            <a
              href="https://github.com/curl-kawsar/gmail-dot-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Star</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
