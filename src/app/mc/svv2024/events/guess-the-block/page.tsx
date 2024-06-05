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
      <main>
        <div className="box-sm">
          <div className="text-center">
            <h1>Guess the Block</h1>
            <h3>Minecraft Event</h3>
            <div className="countdown-wrapper">
              <Countdown endDate={new Date("14 JUN 2024 20:00 GMT+7")} ></Countdown>
            </div>
            <h3 className="mb-6">
              Event starts at <span className="underline">14 JUN 2024 20:00 ICT</span>
            </h3>
          </div>
          <div className="text-center">
            <h4>Event Hosts</h4>
            <p><b>DragonKnighX</b></p>
            <p className="">Thewro (Co-host)</p>
          </div>
        </div>

        <div className="box-lg">
          <h2 className="text-center">Event Info</h2>
          <div className="info-box">
            <p>
              Participants have to guess the Minecraft block from hints provided. In each games, participants will start receiving a hint from the host. Participants will get another hint after 10 seconds, at most 5 hints per a game. The first participant who correctly guesses the block wins that round. If the participant wrongly guesses, they are immediately suspended from answering on that game. Suspended participants can continue in the next game. The winning participants pass and continue in the next round. The last participant remaining in each round is eliminated from the game.
            </p>
            <p>
              We will repeat this process until we have the very last participant who is the winner of this event.
            </p>
            <div>
              <p>
                Let&apos;s try!
              </p>
              <ol className="ml-4">
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
            <p>
              The answer is <span className="spoiler">Grass Block</span>.
            </p>
            <p>
              Guess correctly? If so, you pass to the next round. But beware, in the real event, you won’t get five hints from the start and you’ll have to be faster than your competitors!
            </p>
            <p>
              In the final round, participants who get 3 scores first wins. 
            </p>
            <p>
              Rules are subject to slightly change depending solely on the hosts.
            </p>
          </div>
        </div>

        <div className="box-lg">
          <h2 className="text-center">Eligibility</h2>
          <div className="info-box">
            <p>
              Participants must register to Minecraft Survival 1.21 Form.
            </p>
            <p>
              Participants must be present in <a className="hyperlink" href="https://discord.gg/VMwsxXHUpD" target="_blank">Grand Theater
              </a> Discord Stage Channel by the time the event starts. Late participants are dismissed.
            </p>
          </div>
        </div>

        <div className="box-lg">
        <h2 className="text-center">Rewards</h2>
        <Image className="mx-auto my-6 rounded-3xl" src={"/pages/rewards.webp"} width={300} height={300} alt="rewards"></Image>
        <div className="info-box">
          <h4 className="text-center">There are total of 6 rewards, including:</h4>
          <ol className="ml-4">
            <li>Oak Log Plush Toy</li>
            <li>Chopsticks with Creeper-face Base</li>
            <li>Steve-face Toy</li>
            <li>3-pack Tissue Set</li>
            <li>Zombie Villager Acrylic Stand</li>
            <li>Discord Nitro <span className="text-gray-400">(Digital Rewards)</span></li>
          </ol>
          <p>The winner can first choose one of the rewards. Then the second and so on.</p>
          <p>The hosts may privately contact you after the event for the reward shipping detail.</p>
          </div>
        </div>
      </main>

      <FormModal openModal={openFormModal} onCloseModal={onCloseFormModal}></FormModal>
    </>
  );
}
