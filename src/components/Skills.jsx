import { useState } from "react";
import { motion } from "framer-motion";
import {
    TbBrandNextjs,
    TbBrandTypescript,
    TbBrandReact,
    TbBrandPhp,
    TbBrandLaravel,
    TbBrandMysql,
    TbBrandMongodb,
    TbBrandTailwind,
    TbBrandGolang,
    TbBrandDocker,
    TbBrandGit,
} from "react-icons/tb";
import { SiLinux, SiNestjs, SiPostgresql } from "react-icons/si";

export default function Skills() {
    const [skills] = useState([
        { id: 10, name: "Typescript", icon: <TbBrandTypescript size={50} /> },
        { id: 4, name: "PHP", icon: <TbBrandPhp size={50} /> },
        { id: 1, name: "GO", icon: <TbBrandGolang size={50} /> },
        { id: 6, name: "Laravel", icon: <TbBrandLaravel size={50} /> },
        { id: 11, name: "Nest.js", icon: <SiNestjs size={50} /> },
        { id: 2, name: "React", icon: <TbBrandReact size={50} /> },
        { id: 8, name: "Next.js", icon: <TbBrandNextjs size={50} /> },
        { id: 3, name: "MySQL", icon: <TbBrandMysql size={50} /> },
        { id: 7, name: "Postgresql", icon: <SiPostgresql size={50} /> },
        { id: 5, name: "MongoDB", icon: <TbBrandMongodb size={50} /> },
        { id: 9, name: "Tailwind", icon: <TbBrandTailwind size={50} /> },
        { id: 12, name: "Linux", icon: <SiLinux size={50} /> },
        { id: 13, name: "Docker", icon: <TbBrandDocker size={50} /> },
        { id: 14, name: "Git", icon: <TbBrandGit size={50} /> },
    ]);

    const [experiences] = useState([
        {
            id: 1,
            company: "Al-Farg'oniy Education",
            role: "Full-Stack Web Teacher",
            period: "Sep 2026 - Present",
            description:
                "Teaching full-stack web development, covering both frontend and backend fundamentals to students.",
        },
        {
            id: 2,
            company: "First Coder Group",
            role: "Full Stack Developer",
            period: "Sep 2025 - Jan 2026",
            description:
                "Built and maintained RESTful APIs to support core backend functionality. Developed a Telegram bot using PHP and OpenAI to automate user interactions and educational workflows. Worked on a Telegram Mini App built with React.js and Tailwind CSS for an interactive user experience.",
        },
        {
            id: 3,
            company: "HighTech",
            role: "Backend Developer",
            period: "Jul 2025 - Sep 2025",
            description:
                "Supported and enhanced backend projects using Laravel, MySQL, Blade, and JavaScript to maintain product functionality.",
        },
    ]);

    return (
        <div className="mt-3 lg:mt-16" id="skills">
            <div className="px-5 lg:px-28">
                <motion.h2
                    className="text-2xl lg:text-4xl text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    My <span className="font-extrabold">Skills</span>
                </motion.h2>

                {/* Skill Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: skill.id * 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            {skill.icon}
                            <p>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Experience Section */}
            <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
                <motion.h2
                    className="text-2xl lg:text-4xl text-center text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    My <span className="font-extrabold">Experience</span>
                </motion.h2>

                {/* Experience Timeline */}
                <div className="px-5 lg:px-28 my-8 lg:mt-16">
                    <ol className="relative space-y-10 before:absolute before:inset-y-0 before:left-2 before:w-px before:bg-neutral-800 lg:space-y-14 lg:before:left-1/2">
                        {experiences.map((exp, index) => (
                            <motion.li
                                key={exp.id}
                                className="relative pl-10 lg:grid lg:grid-cols-[1fr_3rem_1fr] lg:pl-0"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.55,
                                    ease: "easeOut",
                                    delay: index * 0.12,
                                }}
                                viewport={{ once: true }}
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute left-[5px] top-1.5 z-10 h-[7px] w-[7px] rounded-full border border-neutral-600 bg-black lg:left-1/2 lg:-translate-x-1/2"
                                />
                                <article
                                    className={`lg:col-span-1 ${index % 2 === 0 ? "lg:col-start-1 lg:row-start-1 lg:text-right" : "lg:col-start-3 lg:row-start-1"}`}
                                >
                                    <div
                                        className={`flex flex-col gap-1 lg:flex-row lg:items-baseline lg:justify-between ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                                    >
                                        <h3 className="text-lg font-bold text-white lg:text-xl">
                                            {exp.role} at {exp.company}
                                        </h3>
                                        <span className="text-sm font-medium text-gray-400 lg:shrink-0 lg:text-base">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="mt-3 text-sm/6 font-light text-gray-400 lg:text-base">
                                        {exp.description}
                                    </p>
                                </article>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
