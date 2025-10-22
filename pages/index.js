import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen overflow-y-auto relative">
      <div className="w-full min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left min-h-screen container mx-auto px-4">
          
          {/* Name */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hey I&apos;m <br /> <span className="text-accent">Mayank Upadhyay</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-lg leading-relaxed text-center xl:text-left text-white"
          >
            Building smart systems, one bug at a time.
            <br />
            Software Engineering student @ UWaterloo who loves making ideas come alive in code.
          </motion.p>
        </div>
      </div>

      {/* Background Particles */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
