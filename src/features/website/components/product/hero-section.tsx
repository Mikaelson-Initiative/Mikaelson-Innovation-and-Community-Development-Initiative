import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ProductHero = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto text-center max-w-7xl">
        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold leading-tight">
          The Productivity Companion
          <br />
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            for Communities
          </span>
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          RIO AI is a blazing fast productivity platform powering the next
          generation of community-driven applications.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/product">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
