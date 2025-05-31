import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Shield, Code, Heart, Lightbulb, Users } from 'lucide-react';

export const metadata = {
  title: "About - Gmail Dot Generator",
  description: "Learn how Gmail dot variants work and why this tool was created.",
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent mb-4">
            About Gmail Dot Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding how Gmail handles dots in email addresses and why this tool exists.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* How it Works */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                How Gmail Dots Work
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Gmail ignores dots (periods) in the username part of email addresses. This means:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• kawsar@gmail.com</li>
                <li>• k.awsar@gmail.com</li>
                <li>• ka.wsar@gmail.com</li>
                <li>• k.a.w.s.a.r@gmail.com</li>
              </ul>
              <p className="text-gray-600">
                All these variations deliver to the same inbox!
              </p>
            </CardContent>
          </Card>

          {/* Why This Tool */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                Why This Tool?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                This tool helps you:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Understand Gmail's dot behavior</li>
                <li>• Generate all possible variants</li>
                <li>• Use for testing or organization</li>
                <li>• Educational purposes</li>
              </ul>
              <p className="text-gray-600">
                Perfect for developers, testers, and curious users!
              </p>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Your privacy matters:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• No data is stored or transmitted</li>
                <li>• All processing happens locally</li>
                <li>• No tracking or analytics</li>
                <li>• Open source and transparent</li>
              </ul>
              <p className="text-gray-600">
                Your email addresses never leave your browser.
              </p>
            </CardContent>
          </Card>

          {/* Open Source */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-600" />
                Open Source
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Built with modern technologies:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Next.js 15 with React</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Shadcn UI components</li>
                <li>• Deployed on Vercel</li>
              </ul>
              <p className="text-gray-600">
                Contributions and feedback welcome!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Community Section */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm mt-8">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Made with Love for the Community
            </CardTitle>
            <CardDescription>
              This tool is completely free and open source
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Created to help developers, testers, and anyone curious about how Gmail handles email addresses.
              If you find this tool useful, consider starring it on GitHub or sharing it with others!
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Users className="h-4 w-4" />
              <span>Join thousands of users who have discovered Gmail's dot behavior</span>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800 text-center">
            <strong>Disclaimer:</strong> This tool is for educational purposes only and is not affiliated with Google or Gmail.
            Gmail's behavior regarding dots in email addresses is a documented feature of their service.
          </p>
        </div>
      </div>
    </div>
  );
}
