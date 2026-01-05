import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

export interface ProjectCardProps {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  tecnologies?: string[];
}

import TechBadge from "./ui/TechBadge";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  des,
  img,
  iconLists,
  link,
  tecnologies,
}) => {
  return (
    <article className=" relative rounded-2xl border border-white/10 bg-[#0f1324]/10 backdrop-blur-sm flex flex-col overflow-hidden sm:w-[280px] lg:w-[360px] w-[80vw] mx-auto shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-500 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_28px_-6px_rgba(0,0,0,0.15),0_0_20px_10px_rgba(139,92,246,0.10)] p-4 gap-4">
      {/* Glow ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.25),transparent_60%)]" />
        <div className="absolute -inset-px rounded-2xl border border-white/5 group-hover:border-white/15 transition-colors" />
      </div>

      {/* Top media */}
      <div className="relative aspect-[16/9] w-full bg-[#13162d] rounded-xl overflow-hidden">
        <Image
          src="/bg.png"
          alt="background grid"
          fill
          className="object-cover opacity-50"
        />
        {img ? (
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width:768px) 280px, (max-width:1024px) 360px, 360px"
            className="object-contain object-bottom drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xs">
            No preview
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col grow">
        <h2 className="font-semibold tracking-tight lg:text-xl text-lg mb-1 line-clamp-1 group-hover:text-white transition-colors">
          {title}
        </h2>
        <p className="text-xs md:text-sm text-white/60 lg:line-clamp-4 line-clamp-3 leading-relaxed group-hover:text-white/70 transition-colors md:h-[80px] h-[58.5px]">
          {des}
        </p>

        {/* Tech stack icons */}
        <div className="mt-4 flex items-start flex-wrap gap-2 h-[72px]">
          {iconLists.map((icon, idx) => {
            const label =
              tecnologies?.[idx] ?? icon.replace(/^\/(.+)\..+$/, "$1");
            return (
              <div key={idx} className="relative group/icon">
                <div className="border border-white/10 bg-[#10132E]/80 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center shadow-[0_0_0_1px_rgba(255,255,255,0.06)] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18)] transition-shadow">
                  <Image src={icon} alt={label} width={22} height={22} />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/5 group-hover:ring-white/15" />
                {label && <TechBadge label={label} />}
              </div>
            );
          })}
        </div>

        {/* Footer action */}
        <div className="mt-auto pt-5 flex justify-end">
          <Link
            href={link}
            target="_blank"
            aria-label={`Visit live site for ${title}`}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-purple hover:text-white transition-colors">
            <span>Check Live</span>
            <FaLocationArrow className="mt-[1px] w-3 h-3 md:w-4 md:h-4 rotate-45" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
