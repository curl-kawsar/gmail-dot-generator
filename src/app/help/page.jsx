import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Mail, Copy, Download, AlertCircle, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Help - Gmail Dot Generator",
  description: "Learn how to use the Gmail Dot Generator tool effectively.",
};

export default function HelpPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent mb-4">
            How to Use Gmail Dot Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step-by-step guide to generating and using Gmail dot variants.
          </p>
        </div>

        <div className="space-y-8">
          {/* Getting Started */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Getting Started
              </CardTitle>
              <CardDescription>
                Follow these simple steps to generate your Gmail dot variants
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto font-semibold">
                    1
                  </div>
                  <h3 className="font-medium">Enter Email</h3>
                  <p className="text-sm text-gray-600">Type your Gmail address in the input field</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto font-semibold">
                    2
                  </div>
                  <h3 className="font-medium">View Variants</h3>
                  <p className="text-sm text-gray-600">See all possible dot combinations instantly</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto font-semibold">
                    3
                  </div>
                  <h3 className="font-medium">Copy or Download</h3>
                  <p className="text-sm text-gray-600">Copy individual variants or download all</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Available Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Copy className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Copy Individual Variants</h3>
                    <p className="text-sm text-gray-600">Click the copy button next to any variant to copy it to your clipboard</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Copy className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Copy All Variants</h3>
                    <p className="text-sm text-gray-600">Use the "Copy All" button to copy all variants at once</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Download className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Download as File</h3>
                    <p className="text-sm text-gray-600">Download all variants as a text file for later use</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Real-time Validation</h3>
                    <p className="text-sm text-gray-600">Instant feedback on email format and Gmail validation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-purple-600" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Do all these variants really go to the same inbox?</h3>
                  <p className="text-sm text-gray-600">Yes! Gmail ignores dots in the username part of email addresses. This is a documented feature of Gmail.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Is my email address stored or sent anywhere?</h3>
                  <p className="text-sm text-gray-600">No. All processing happens locally in your browser. Your email address never leaves your device.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Can I use this for non-Gmail addresses?</h3>
                  <p className="text-sm text-gray-600">This tool is specifically for Gmail addresses. Other email providers may handle dots differently.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">What's the maximum number of variants generated?</h3>
                  <p className="text-sm text-gray-600">For a username with n characters, there are 2^(n-1) possible variants. For example, "test" generates 8 variants.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Why would I want to use different dot variants?</h3>
                  <p className="text-sm text-gray-600">Common uses include testing, organizing emails by source, or understanding Gmail's behavior for development purposes.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>💡 Pro Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Use different variants when signing up for services to track where emails come from</li>
                <li>• All variants share the same inbox, so you won't miss any emails</li>
                <li>• The tool works offline - no internet connection required after loading</li>
                <li>• You can bookmark specific variants for easy access</li>
                <li>• Remember that this only works with @gmail.com addresses</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Need More Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have questions, suggestions, or found a bug, we'd love to hear from you!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/curl-kawsar/gmail-dot-generator/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Report an Issue on GitHub →
                </a>
                <a
                  href="https://github.com/curl-kawsar/gmail-dot-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Star the Repository →
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
