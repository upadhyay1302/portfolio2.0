import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaYahoo,
  FaWikipediaW,
} from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { LuSoup } from "react-icons/lu";
import CIcon from "../components/CIcon";
import MLIcon from "../components/MLIcon";
import PyGame from "../components/PyGameIcon";
import Image from "next/image";

const projects = [
  {
    title: "Smart and Reactive Speaker System",
    description:
    "A smart and reactive speaker system that senses your mood via facial recognition and plays music to match it.",

    img: "/proj1.png",
    tech: [<FaPython />, <FaReact />],
    link: "https://github.com/upadhyay1302/Smart-and-Reactive-Speaker-System-",
  },
  {
    title: "Athena",
    description: "Python-based AI voice assistant.",
    img: "/EchoSphere3.jpg",
    tech: [<FaPython />, <LuSoup />],
    link: "https://github.com/upadhyay1302/Athena",
  }
,  
  {
    title: "MiniMax Master",
    description:
      "Unbeatable AI Tic Tac Toe Game .",
    img: "/proj4.png",
    tech: [<FaPython />, <MLIcon />],
    link: "https://github.com/upadhyay1302/Minimax-Master",
  },
  {
    title: "Active Track",
    description:
      "ML-powered fitness tracker.",
    img: "/Active Track.png",
    tech: [<FaPython />],
    link: "https://github.com/upadhyay1302/ActiveTrack",
  },
  {
    title: "Crypto Price Prediction",
    description:
      "Predicts cryptocurrency prices using sentiment analysis on web data.",
    img: "/Crypto Price Prediction.jpg",
    tech: [<FaPython />, <SiTensorflow />, <FaYahoo />, <FaWikipediaW />],
    link: "https://github.com/upadhyay1302/Crypto-Price-Prediction",
  },
  {
    title: "Cosmic Intruders",
    description:
      "Multiplayer space shooter built with Python and Pygame.",
    img: "/bg-explosion.png",
    tech: [<FaPython />, <PyGame />],
    link: "https://github.com/upadhyay1302/Cosmic-Intruders",
  },
];

const Projects = () => {
  return (
    <div className="bg-primary/30 py-24 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-accent text-center mb-12">Projects</h2>

        {/* Grid: responsive and consistent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full bg-black/40 rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:border-accent transition-all duration-300"
            >
              {/* image block: fixed height so cards align */}
              <div className="relative h-48 w-full">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-accent transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-white/70 mt-3 text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-3 text-xl text-accent">
                    {proj.tech.map((icon, j) => (
                      <span key={j}>{icon}</span>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs">
                      View
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
