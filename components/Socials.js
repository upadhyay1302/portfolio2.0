import Link from "next/link";

import {RiInstagramLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link target="_blank" href={'https://www.instagram.com/maayankkk/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link target="_blank" href={'https://www.linkedin.com/in/mayank-upadhyay-/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link target="_blank" href={'https://github.com/upadhyay1302'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>

  </div>
  );
};

export default Socials;
