'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Toast, ToastTitle, ToastDescription } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { Copy, Mail, Sparkles, CheckCircle2, AlertCircle, Download, X, Zap, Loader2 } from 'lucide-react';
import { isValidGmailAddress, extractUsername, generateDotVariants, copyToClipboard } from '@/lib/gmailUtils';

export default function GmailDotGenerator() {
  const [email, setEmail] = useState('');
  const [variants, setVariants] = useState([]);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [showVariants, setShowVariants] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const { toast, toasts } = useToast();

  useEffect(() => {
    if (!email) {
      setError('');
      setIsValid(false);
      setHasGenerated(false);
      return;
    }

    if (!isValidGmailAddress(email)) {
      setError('Please enter a valid Gmail address (must end with @gmail.com)');
      setIsValid(false);
      setHasGenerated(false);
      return;
    }

    setError('');
    setIsValid(true);
  }, [email]);

  const handleGenerate = async () => {
    if (!isValid) return;

    setIsGenerating(true);
    setShowVariants(false);

    const username = extractUsername(email);
    const generatedVariants = generateDotVariants(username);

    // For short usernames, generate instantly. For longer ones, show brief loading
    if (username.length <= 3) {
      // Instant generation for short usernames
      setVariants(generatedVariants);
      setIsGenerating(false);
      setHasGenerated(true);
      setShowVariants(true);
    } else {
      // Brief loading for longer usernames
      await new Promise(resolve => requestAnimationFrame(resolve));
      await new Promise(resolve => requestAnimationFrame(resolve));

      setVariants(generatedVariants);
      setIsGenerating(false);
      setHasGenerated(true);
      setShowVariants(true);
    }

    toast({
      title: "Variants Generated!",
      description: `${generatedVariants.length} email variants created successfully`,
      variant: "success"
    });
  };

  const handleCopyVariant = async (variant, index) => {
    const success = await copyToClipboard(variant);
    if (success) {
      setCopiedIndex(index);
      toast({
        title: "Copied!",
        description: `${variant} copied to clipboard`,
        variant: "success"
      });
      setTimeout(() => setCopiedIndex(null), 2000);
    } else {
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      });
    }
  };

  const handleCopyAll = async () => {
    const allVariants = variants.join('\n');
    const success = await copyToClipboard(allVariants);
    if (success) {
      setCopiedAll(true);
      toast({
        title: "All variants copied!",
        description: `${variants.length} email variants copied to clipboard`,
        variant: "success"
      });
      setTimeout(() => setCopiedAll(false), 2000);
    } else {
      toast({
        title: "Copy failed",
        description: "Failed to copy all variants to clipboard",
        variant: "destructive"
      });
    }
  };

  const handleDownloadVariants = () => {
    const content = variants.join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gmail-variants-${extractUsername(email)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download started!",
      description: "Gmail variants saved to file",
      variant: "success"
    });
  };

  const handleClear = () => {
    setEmail('');
    setVariants([]);
    setError('');
    setIsValid(false);
    setCopiedIndex(null);
    setCopiedAll(false);
    setShowVariants(false);
    setIsGenerating(false);
    setHasGenerated(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent mb-4">
            Generate Gmail Dot Variants
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create all possible dot variations of your Gmail address.
            Gmail ignores dots in usernames, so all variants go to the same inbox!
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <span className="font-medium">Example:</span> kawsar@gmail.com → k.awsar@gmail.com, ka.wsar@gmail.com, etc.
          </div>
        </div>

        {/* Main Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Enter Your Gmail Address</CardTitle>
            <CardDescription>
              We'll generate all possible dot combinations for you
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Gmail Address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="kawsar@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && isValid && !isGenerating) {
                      handleGenerate();
                    }
                  }}
                  className={`pl-10 h-12 text-lg ${
                    error ? 'border-red-500 focus-visible:ring-red-500' :
                    isValid ? 'border-green-500 focus-visible:ring-green-500' : ''
                  }`}
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                {email && (
                  <button
                    onClick={handleClear}
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                {isValid && (
                  <CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500" />
                )}
                {error && (
                  <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />
                )}
              </div>
              {error && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </p>
              )}
            </div>

            {/* Generate Button */}
            <div className="flex flex-col items-center space-y-2">
              <Button
                onClick={handleGenerate}
                disabled={!isValid || isGenerating}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : hasGenerated ? (
                  <>
                    <Zap className="h-5 w-5 mr-2" />
                    Generate Again
                  </>
                ) : (
                  <>
                    <Zap className="h-5 w-5 mr-2" />
                    Generate Variants
                  </>
                )}
              </Button>
              {isValid && !isGenerating && (
                <p className="text-xs text-gray-500 animate-pulse">
                  💡 Press Enter to generate
                </p>
              )}
            </div>

            {/* Loading Animation */}
            {isGenerating && (
              <div className="text-center space-y-4 animate-in fade-in duration-200">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-12 h-12 border-3 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-700">Generating variants...</p>
              </div>
            )}

            {/* Results Section */}
            {showVariants && variants.length > 0 && (
              <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
                {/* Success Animation */}
                <div className="text-center py-4">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200 animate-in zoom-in duration-300">
                    <CheckCircle2 className="h-5 w-5 animate-pulse" />
                    <span className="font-medium">
                      🎉 {variants.length} variants generated successfully!
                    </span>
                  </div>
                </div>

                {/* Info Banner */}
                <div className="bg-gradient-to-r from-blue-50 to-red-50 border border-blue-200 rounded-lg p-4 animate-in slide-in-from-left duration-300" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center gap-2 text-blue-700">
                    <Sparkles className="h-5 w-5 animate-pulse" />
                    <span className="font-medium">
                      Gmail ignores dots in usernames — all of these go to the same inbox!
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center animate-in slide-in-from-right duration-300" style={{ animationDelay: '150ms' }}>
                  <h3 className="text-lg font-semibold">
                    Generated Variants ({variants.length})
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleDownloadVariants}
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:scale-105 transition-transform duration-200"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button
                      onClick={handleCopyAll}
                      variant="outline"
                      className="gap-2 hover:scale-105 transition-transform duration-200"
                      disabled={copiedAll}
                    >
                      {copiedAll ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          Copied All!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy All
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Variants List */}
                <div className="grid gap-2 max-h-96 overflow-y-auto animate-in slide-in-from-bottom duration-300" style={{ animationDelay: '200ms' }}>
                  {variants.map((variant, index) => (
                    <div
                      key={variant}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border hover:bg-gray-100 hover:shadow-md transition-all duration-200 animate-in slide-in-from-left-2"
                      style={{
                        animationDelay: `${Math.min(200 + (index * 30), 800)}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <code className="text-sm font-mono text-gray-800 flex-1 select-all">
                        {variant}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopyVariant(variant, index)}
                        className="ml-2 h-8 w-8 p-0 hover:scale-110 transition-transform duration-200"
                        disabled={copiedIndex === index}
                      >
                        {copiedIndex === index ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600 animate-pulse" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            <div className="grid gap-1">
              {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
              {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            </div>
          </Toast>
        ))}
      </div>
    </div>
  );
}
