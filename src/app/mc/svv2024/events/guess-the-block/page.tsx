'use client';

import { useEffect, useState } from "react";
import FormModal from "../../components/FormModal";
import { getForm } from "../../libs/FirebaseDb";
import Countdown from "../../components/Countdown";
import Image from "next/image";

export default function GuessTheBlock() {

  const [openFormModal, setOpenFormModal] = useState(false);
  const [isRegistrationOpening, setRegistrationOpening] = useState(false);

  const getForms = () => {
    getForm().then(
      (forms) => {
        setRegistrationOpening(true);
      }
    )
  }

  useEffect(() => {
    getForms();
  }, []);

  const onCloseFormModal = () => {
    setOpenFormModal(false);
  }

  return (
    <>
      <main className="pt-24 pb-24">
        <div className="top-0 fixed py-3 px-8 w-full text-sm rounded-lg bg-[#1A1040]" style={{display: isRegistrationOpening ? "flex" : "none"}} role="alert">
          <span className="grow items-center inline-flex">
            Minecraft Survival 2024 is now recruiting members! Register now!
          </span>
          <button 
            type="button" 
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-xs px-5 py-2.5 focus:outline-none"
            onClick={() => {
              setOpenFormModal(true);
            }}
          >
            Register
          </button>
        </div>

        <div className="space-y-20">
          <div className="text-black px-12 py-12 mx-auto w-[95vw] md:w-[35rem] bg-white rounded-2xl shadow-lg">
            <p className="text-purple-700 text-3xl font-bold uppercase mb-0 text-center">
              Guess the Block
            </p>
            <p className="text-black text-md font-semibold uppercase mb-4 text-center">
              Minecraft Event
            </p>
            <p className="text-3xl md:text-6xl font-semibold uppercase my-16 text-center align-middle">
              <Countdown endDate={new Date(new Date("8 JUN 2024 18:00 GMT+7"))} ></Countdown>
            </p>
            <p className="text-sm md:text-lg font-semibold uppercase my-16 text-center align-middle">
              Event starts at <span className="underline">JUN 8th, 2024, 6PM (ICT)</span>
            </p>
            <div className="text-center">
              <p className="text-black text-sm font-semibold uppercase mb-1">
                Event Hosts
              </p>
              <p className="text-sm font-light text-purple-600">
                DragonKnighX
              </p>
              <p className="text-sm font-light">
                Thewro (Co-host)
              </p>
            </div>
          </div>

          <div className="text-black px-12 py-12 mx-auto w-[95vw] md:w-[40rem] bg-white rounded-2xl shadow-lg">
            <p className="text-purple-700 text-2xl font-semibold uppercase mb-6 text-center">Event Info</p>
            <div className="space-y-3 text-sm md:text-md font-light text-justify leading-6 indent-4">
              <p>
                Participants have to guess the Minecraft block from hints provided. In each games, participants will start receiving a hint from the host. Participants will get another hint after 10 seconds, at most 5 hints per a game. The first participant who correctly guesses the block wins that round. If the participant wrongly guesses, they are immediately suspended from answering on that game. Suspended participants can continue in the next game. The winning participants pass and continue in the next round. The last participant remaining in each round is eliminated from the game.
              </p>
              <p>
                We will repeat this process until we have the very last participant who is the winner of this event.
              </p>
              <div>
                <p className="indent-4">
                  Let&apos;s try!
                </p>
                <ol className="list-decimal ml-4">
                  <li>
                    This block exists in Biome Plain.
                  </li>
                  <li>
                    This block drops an item when being destroyed by player&apos;s bare hands.
                  </li>
                  <li>
                    This block drops different item when being destroyed by tools with Silk Touch.
                  </li>
                  <li>
                    This block can spread to other blocks.
                  </li>
                  <li>
                    This block consists of green color on the top part and brown color on the bottom part.
                  </li>
                </ol>
              </div>
              <p className="indent-4">
                The answer is <span className="px-2 py-1 mx-0.5 text-center text-purple-800 hover:text-white bg-purple-800 rounded-md">Grass Block</span>.
              </p>
              <p className="indent-4">
                (Guess correctly? If so, you pass to the next round. But beware, in the real event, you won’t get five hints from the start and you’ll have to be faster than your competitors!)
              </p>
              <p className="indent-4">
                In the final round, participants who get 3 scores first wins. 
              </p>
              <p className="indent-4">
                Rules are subject to slightly change depending solely on the hosts.
              </p>
            </div>
          </div>

          <div className="text-black px-12 py-12 mx-auto w-[95vw] md:w-[40rem] bg-white rounded-2xl shadow-lg">
            <p className="text-purple-700 text-2xl font-semibold uppercase mb-6 text-center">Eligibility</p>
            <div className="space-y-3 text-sm md:text-md font-light text-justify leading-6">
              <p>
                Participants must register to Minecraft Survival 1.21 Form.
              </p>
              <p>
                Participants must be present in <a className="underline text-blue-500" href="https://discord.gg/VMwsxXHUpD" target="_blank">Grand Theater</a> Discord Stage Channel by the time the event starts. Late participants are dismissed.
              </p>
            </div>
          </div>

          <div className="text-black px-12 py-12 mx-auto w-[95vw] md:w-[40rem] bg-white rounded-2xl shadow-lg">
            <p className="text-purple-700 text-2xl font-semibold uppercase mb-6 text-center">Rewards</p>
            <Image className="mx-auto my-6 rounded-3xl" src={"/pages/rewards.webp"} width={300} height={300} alt="rewards"></Image>
            <div className="space-y-6 text-sm md:text-md font-light text-justify leading-6">
              <div className="mx-auto grid grid-cols-2 gap-2 max-w-[28rem] hidden">
                <div className="font-bold uppercase text-purple-700">
                  The winner
                </div>
                <div className="font-bold uppercase text-purple-700">
                  Oak Log Plush Toy
                </div>
                <div className="font-bold">
                  1st runner-up
                </div>
                <div className="font-bold">
                  Chopsticks and Creeper Pin
                </div>
                <div className="font-bold">
                  2nd runner-up
                </div>
                <div className="font-bold">
                  ???
                </div>
                <div>
                  4th place
                </div>
                <div>
                  ???
                </div>
                <div>
                  5th place
                </div>
                <div>
                  ???
                </div>
                <div>
                  6th place
                </div>
                <div>
                  Discord Nitro
                </div>
              </div>
              <p>
                The hosts may privately contact you after the event for the reward shipping detail.
              </p>
            </div>
          </div>

        </div>
      </main>

      <FormModal openModal={openFormModal} onCloseModal={onCloseFormModal}></FormModal>
    </>
  );
}
