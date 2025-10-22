import CIcon from "../../components/CIcon";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiVisualstudiocode,
  SiJupyter,
  SiEclipseide,
  SiHaskell,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
      <Circles />

      <div className="container mx-auto flex flex-col items-center xl:items-start gap-y-24 px-4">

        

        {/* Experience Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          <h3 className="text-3xl font-semibold text-accent mb-10 text-center xl:text-left">
            Co-op & Internship Experience
          </h3>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* AutoTrader Fall 2025 */}
            <div className="bg-black/30 p-8 rounded-2xl shadow-lg hover:shadow-accent/20 transition-all">
              <h4 className="text-2xl font-semibold text-white">
                Software Developer Co-op — AutoTrader
              </h4>
              <p className="text-white/60 text-sm mb-2">
                Mississauga, ON | Sept 2025 – Dec 2025
              </p>
              <p className="text-white/80 leading-relaxed">
                Returning to AutoTrader for another term to continue enhancing
                internal tools and services. I’m focusing on performance tuning,
                optimizing backend systems, and integrating new technologies
                that support large-scale automotive data processing.
              </p>
            </div>

            {/* AutoTrader Winter 2025 */}
            <div className="bg-black/30 p-8 rounded-2xl shadow-lg hover:shadow-accent/20 transition-all">
              <h4 className="text-2xl font-semibold text-white">
                Software Developer Co-op — AutoTrader
              </h4>
              <p className="text-white/60 text-sm mb-2">
                Mississauga, ON | Jan 2025 – Apr 2025
              </p>
              <p className="text-white/80 leading-relaxed">
                During my first co-op at AutoTrader, I modernized legacy systems
                by migrating WCF services to <strong>.NET 8 Web APIs</strong>,
                improving response times by 40%. I built automated{" "}
                <strong>CI/CD pipelines</strong> with <strong>Jenkins</strong>,
                upgraded cross-compatible rule engines using{" "}
                <strong>Unity IoC</strong>, and developed an internal dashboard
                with <strong>React.js</strong>, <strong>ASP.NET MVC</strong>,
                and <strong>SQL</strong>, deployed on <strong>AWS</strong>.
              </p>
            </div>

            {/* St Marys Cement */}
            <div className="bg-black/30 p-8 rounded-2xl shadow-lg hover:shadow-accent/20 transition-all">
              <h4 className="text-2xl font-semibold text-white">
                Systems Engineer Co-op — St Marys Cement
              </h4>
              <p className="text-white/60 text-sm mb-2">
                St Marys, ON | May 2024 – Aug 2024
              </p>
              <p className="text-white/80 leading-relaxed">
                At St Marys, I automated industrial reporting workflows with{" "}
                <strong>Python</strong> and <strong>SQL</strong>, improving
                accuracy by 80%. I also designed real-time dashboards using{" "}
                <strong>React.js</strong> and <strong>Ignition SCADA</strong>,
                integrated automated email notifications, and programmed{" "}
                <strong>PLCs</strong> to streamline operations.
              </p>
            </div>

            {/* Comet */}
            <div className="bg-black/30 p-8 rounded-2xl shadow-lg hover:shadow-accent/20 transition-all">
              <h4 className="text-2xl font-semibold text-white">
                Front-End Developer — Comet
              </h4>
              <p className="text-white/60 text-sm mb-2">
                Dubai, UAE | Jan 2022 – Apr 2022
              </p>
              <p className="text-white/80 leading-relaxed">
                At Comet, I built and maintained internal dashboards with{" "}
                <strong>React.js</strong> and <strong>TypeScript</strong>,
                supported front-end testing through <strong>UAT</strong>, and
                collaborated with designers using <strong>Figma</strong> to
                refine user interfaces and enhance the user experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          <h3 className="text-3xl font-semibold text-accent mb-10 text-center xl:text-left">
            Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 text-white/80">
            {/* Programming */}
            <div className="bg-black/30 p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-accent">
                Programming
              </h4>
              <div className="flex flex-wrap gap-4 text-3xl">
                <FaPython />
                <FaJava />
                <CIcon />
                <SiHaskell />
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-black/30 p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-accent">
                Web Development
              </h4>
              <div className="flex flex-wrap gap-4 text-3xl">
                <FaHtml5 />
                <FaCss3 />
                <FaJs />
                <FaReact />
                <SiNextdotjs />
                <SiFramer />
              </div>
            </div>

            {/* Tools */}
            <div className="bg-black/30 p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-accent">
                Development Tools
              </h4>
              <div className="flex flex-wrap gap-4 text-3xl">
                <SiVisualstudiocode />
                <FaGithub />
                <FaLinux />
                <SiJupyter />
                <SiEclipseide />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
