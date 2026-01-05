import React from "react";
import Link from "next/link";
import { projects } from "@/data";
import { GridBg } from "@/components/ui/gridBg";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="relative py-24">
      <GridBg />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4">
        <h1 className="heading">
          All <span className="text-purple">Projects</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-24">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
        <div className="mt-20 flex justify-center gap-6">
          <Link
            href="/#home"
            className="px-6 py-3 rounded-xl border border-white/10 bg-[#10132E] hover:bg-[#161a31] transition-colors text-sm">
            Back to Home
          </Link>
          <Link
            href="/#projects"
            className="px-6 py-3 rounded-xl border border-purple/30 bg-purple/10 hover:bg-purple/20 text-sm text-purple transition-colors">
            Go to Recent
          </Link>
        </div>
      </div>
    </main>
  );
}
