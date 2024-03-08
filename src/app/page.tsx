'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="mx-auto w-[60vw]">
      <div className="flex mx-auto py-12 space-y-6 mt-32 mb-12 bg-[#1A1040] shadow-lg rounded-3xl justify-center space-x-8">
          <Image alt="thewro11 profile image" src="https://avatars.githubusercontent.com/u/31770710" className="h-[8vw] rounded-full border" />
          <div className="flex flex-col justify-center font-bold">
            <span className="text-[3vw] uppercase">Thiti Thaweesin</span>
            <span className="text-[1.5vw] text-center uppercase">Théo</span>
          </div>
      </div>

      <div className="mx-auto justify-center flex items-center space-x-6 mb-3">
          <span className="text-[1vw] text-center font-semibold uppercase">The full-stack developer</span>
          <span className="text-[1.3vw]">🚀</span>
        </div>

      <hr className="w-[40vw] mx-auto border-[0.08px] border-[#3B0C59] shadow-sm mb-24" />
      

      <div hidden>
        <span className="flex justify-center mx-auto font-normal my-6 text-lg uppercase">
          Ongoing programs
        </span>
        <div className="flex justify-center">
          <button 
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={() => {
              router.push("/mc/svv2024");
            }}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gradient-to-br from-[#3B0C59] to-[#0D0D0D] dark:bg-gray-900 rounded-md group-hover:bg-none">
              Minecraft Survival 2024 →
            </span>
          </button>
        </div>
      </div>

    </main>
  );
}
