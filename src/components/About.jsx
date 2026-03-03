import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
            <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 10 }}
                viewport={{ once: true }}
            >
                <img src="/assets/about-me.svg" alt="About Me Illustration" />
            </motion.div>

            <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
                    About <span className="font-extrabold">Me</span>
                </h2>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
                    I&apos;m a backend-focused developer with over <strong>1+ years of professional experience</strong> building scalable and maintainable server-side systems. My core expertise lies in <strong>PHP and Laravel</strong>, where I design clean architectures, develop secure RESTful APIs, and implement robust business logic for modern web applications.
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    I have solid experience working with <strong>MySQL and PostgreSQL</strong>, optimizing queries, designing efficient database schemas, and ensuring data integrity. I’m also comfortable working with <strong>JavaScript and TypeScript</strong>, allowing me to collaborate effectively across full-stack environments when needed.
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    In addition to backend development, I actively use <strong>Git</strong> for version control and follow team-based workflows such as feature branching and pull request reviews. I also have hands-on experience with <strong>Docker</strong> for containerization, enabling consistent development and deployment environments.
                </p>

            </motion.div>
        </div>
    );
}
