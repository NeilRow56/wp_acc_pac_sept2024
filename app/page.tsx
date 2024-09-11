import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center space-y-4 p-8 sm:p-20">
      <Hero />

      <div className="flex gap-6">
        <Button className="bg-red-700 text-white">Logout</Button>

        <Button asChild className="bg-green-700 text-white">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>

      <div className="flex gap-4">
        <Button>Sign in</Button>

        <Button>Register</Button>
      </div>
    </div>
  );
}
