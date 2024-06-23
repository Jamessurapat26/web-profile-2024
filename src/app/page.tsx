import Image from "next/image";
import Profile from "./_components/Profile";
import Bio from "./_components/Bio";
import Personality from "./_components/Personality";
import Social from "./_components/profilebtn"
import Education from "./_components/Education";
import Skill from "./_components/Skill";
import Goals from "./_components/Goals";
import Portfolio from "./_components/Portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="basis-1/4 bg-blue-900 h-screen">
          <Profile></Profile>
        </div>
        <div className="basis-3/4">
          <Bio />
          <Social />
          <Goals></Goals>
          {/* <Personality /> */}
          <Education />
          <Skill></Skill>
        </div>
      </div>

    </div>
  );
}
