"use client"
import { fadeIn } from "@/utils/iMotion";
import Image from "next/image";
import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  tags:any[],
  githubLink:string,
  live:string,
  index:any
}

const ProjectCard = ({ src, title, description,tags,githubLink,live,index }: Props) => {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="flex-1">
    <div    
className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
  <div className="relative w-full h-[200px]">
  <Image
        src={src}
        alt={title}
        className="w-full object-cover"
        fill
      />
  </div>
  


      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 line-clamp-4">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 p-4">
          {tags.map((tag) => (
            <p
              key={`name-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="absolute inset-0 z-40 flex justify-end m-3 card-img_hover gap-3">
            <div
              onClick={() => window.open(githubLink, "_blank")}
              className=" black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="/assets/github.png"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(live, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <span className="text-center">live</span>
            </div>
          </div>
    </div>
    </motion.div>
  );
};

export default ProjectCard;
