import { Github, Twitter, Linkedin, Mail, Heart, Coffee, Shield, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-r from-blue-50/50 to-red-50/50 backdrop-blur supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-blue-50/30 supports-[backdrop-filter]:to-red-50/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-r from-blue-600 to-red-500 flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
                Gmail Dot Generator
              </span>
            </div>
            <p className="text-sm text-gray-600 max-w-md">
              Generate all possible dot variations of your Gmail address. A free tool that helps you understand
              how Gmail ignores dots in usernames - all variants go to the same inbox!
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for the community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  Generator
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <HelpCircle className="h-3 w-3" />
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Shield className="h-3 w-3" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800">Support the Project</h3>
            <p className="text-sm text-gray-600">
              This tool is free and open source. Help us keep it running!
            </p>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2 border-yellow-200 hover:bg-yellow-50"
                asChild
              >
                <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer">
                  <Coffee className="h-4 w-4 text-yellow-600" />
                  Buy me a coffee
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2 border-gray-200 hover:bg-gray-50"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Gmail Dot Generator. Made for educational purposes.
              </p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span>Not affiliated with Google or Gmail</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
