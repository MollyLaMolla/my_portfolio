import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

// Lazy-load below-the-fold sections so they don't block initial paint
const Grid = dynamic(() => import("@/components/Grid"), { ssr: true });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: true,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: true,
});
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <Grid />
        <RecentProjects />
        <div className="py-24" id="skills">
          <Experience />
          <Skills />
          <Approach />
        </div>
        <Footer />
      </div>
    </main>
  );
}
