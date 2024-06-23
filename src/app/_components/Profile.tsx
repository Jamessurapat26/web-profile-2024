import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-400 h-full p-4 rounded-xl px-4 text-slate-200	">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/profile.jpeg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Surapat Saetan</h1>
        <p className="text-base">Computer Engineer and Artificial Intelligence</p>
      </div>

      <div className="py-10 text-center ">" May the force be with you "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-slate-200 rounded-md text-slate-800	">
        <p>
          <b>Age:</b> 20
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Nakhonsithammarat
        </p>
      </div>
    </div>
  );
};

export default Profile;
