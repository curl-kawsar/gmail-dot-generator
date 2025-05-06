import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Next.js Boilerplate
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          A modern starter template with Next.js, Shadcn UI, and Tailwind CSS
        </p>
      </div>
    </div>
  );
}
