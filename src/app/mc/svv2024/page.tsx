'use client'

import { useEffect, useState } from "react";
import FormModal from "./components/FormModal";
import CompleteModal from "./components/CompleteModal";
import { getForm } from "./libs/FirebaseDb";
import { Form } from "./interfaces/form";

import Countdown from "./components/Countdown";
import { useRouter } from "next/navigation";
import Image from "next/image";

import colors from "./data/colors.json"

export default function Svv2024() {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);

  const [isRegistrationOpening, setRegistrationOpening] = useState(false);
  const [registeredPlayers, setRegisteredPlayers] = useState([] as Form[]);

  const onCloseFormModal = () => {
    setOpenFormModal(false);
  }

  const onCloseCompleteModal = () => {
    setOpenCompleteModal(false);
  }

  const onComplete = () => {
    onCloseFormModal();
    getForms();
    setOpenCompleteModal(true);
  }

  const getForms = () => {
    getForm().then(
      (forms) => {
        setRegisteredPlayers(forms);
        setRegistrationOpening(true);
      }
    )
  }
  
  const router = useRouter();

  useEffect(() => {
    getForms();
  }, []);

  return (
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
          <p className="text-purple-700 text-2xl font-semibold uppercase mb-4 text-center">Minecraft Survival 2024</p>
          <p className="text-3xl md:text-6xl font-semibold uppercase my-16 text-center align-middle">
            <Countdown endDate={new Date(new Date("8 JUN 2024 20:00 GMT+7"))} ></Countdown>
          </p>
          <p className="text-sm md:text-lg font-semibold uppercase my-16 text-center align-middle">
            Server starts at <span className="underline">JUN 8th, 2024, 8PM (ICT)</span>
          </p>
        </div>

        <div className="text-black px-12 py-12 mx-auto w-[95vw] md:w-[40rem] bg-white rounded-2xl shadow-lg rb-div">
          <p className="text-lg font-semibold uppercase mb-4 text-center">
            <Image 
              src={`https://mc-heads.net/avatar/DragonKnighX`} 
              alt={"DragonKnighX Player Face"}
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <span className="text-purple-600">DragonKnighX</span> will be hosting the exclusive event before the server opening time.
          </p>
          <div className="flex justify-center">
            <button 
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-normal rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            onClick={() => router.push('/mc/svv2024/events/guess-the-block')}>
              CHECK IT OUT HERE!
            </button>
          </div>
        </div>

        <div className="text-black px-12 py-12 mx-auto w-[95vw] md:w-[40rem] bg-white rounded-2xl shadow-lg">
          <p className="text-purple-700 text-2xl font-semibold uppercase mb-6 text-center">Server information</p>
          <div className="space-y-8 text-sm md:text-md">
            <ul className="font-light space-y-3 text-justify">
              <li className="font-bold text-purple-700">SERVER RULE</li>
              <li>→ Actually, there are no rules in this server. But I would like everyone to <span className="text-purple-700">respect each others and not harassing other players</span>.</li>
              <li>→ Violation only results in <span className="text-purple-700">PERMANENT BAN</span>.</li>
            </ul>
            <ul className="font-light space-y-3 text-justify">
              <li className="font-bold text-purple-700">GENERAL INFO</li>
              <li>→ Only registered players can join this server. Players who want to join after the server starts have to individually contact Thewro and will be marked as guest.</li>
              <li>→ This server is <span className="text-purple-700">vanilla</span>; there are no mods and resource packs required to play this server. You can install any client mods or resource packs that enhance your gaming experiences, <span className="text-purple-700">except cheating mods</span>.</li>
              <li>→ Server difficulty of this server is <span className="text-purple-700">hard</span>. But it is not hard enough (trust me! 👌), so I decided to modify the difficulty by using datapacks (see more at Datapack Section below).</li>
              <li>→ This server has <span className="text-purple-700">friendly fire enabled</span>, so you could be able to poke your friends for fun 👀.</li>
              <li>→ Players cannot travel further than ±5000 blocks in x and z axis. This will be increased later if players have already explored major of the available area.</li>
              <li>→ It requires 50% of online players to sleep in order to skip the night.</li>
            </ul>
            <ul className="font-light space-y-3 text-justify">
              <li className="font-bold text-purple-700">DIMENSION LOCKED</li>
              <li>To make the game not progressing so fast for everyone, I decided to lock <span className="font-semibold text-red-600">The Nether</span> and <span className="font-semibold text-purple-900">The End</span>, so that players can focus on having fun exploring the Overworld rather than raging to the end of the game.</li>
              <li>→ <span className="font-semibold text-red-600">The Nether</span> is locked for <span className="text-purple-700">one week</span> after the server starts.</li>
              <li>→ <span className="font-semibold text-purple-900">The End</span> is locked <span className="text-purple-700">until later players&apos; discussion</span>. While The End is locked, players will not be able to craft <b>The Eye of Ender</b> and the crafting recipe for <b>Ender Chest</b> are changed (see more at Datapack Section below).</li>
            </ul>
          </div>
        </div>

        <div className="text-black px-12 py-12 mx-auto w-[95vw] md:w-[40rem] bg-white rounded-2xl shadow-lg">
          <p className="text-purple-700 text-2xl font-semibold uppercase mb-4 text-center">Server Datapacks</p>

          <div className="space-y-5">
            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Thewro&apos;s Survival+</li>
              <ul>
                <li>- Player cannot craft the eye of ender while The End is locked.</li>
                <li>- The recipe of ender chest is changed to 7 obsidians, an ender pearl, and a blaze powder, instead of 8 obsidians and an eye of ender.</li>
                <li>- Player can smelt block of iron ore, block of gold ore, and block of copper ore in blast furnace.</li>
                <li>- Player can see each others health bar below player&apos;s name.</li>
                <li>- Player can see each others level in player list (tab) menu.</li>
                <li>- Player can glow themselves to make visible through walls by using command <code className="bg-gray-300 text-xs py-0.5 px-2 rounded-lg">/trigger glow</code>.</li>
                <li>- Player can put anything on their head by using command <code className="bg-gray-300 text-xs py-0.5 px-2 rounded-lg">/trigger hat</code>.</li>
                <li className="mt-2"><span className="font-semibold text-xs uppercase">Exclusive to Registered Members</span></li>
                <li>- Player can put Heart effect decoration on their head by using <code className="bg-gray-300 text-xs py-0.5 px-2 rounded-lg">/trigger heart</code>.</li>
                <li className="mt-2"><span className="font-semibold text-xs uppercase">Exclusive to Original Members</span></li>
                <li>- Player can enable Breath joining sound effect decoration by using <code className="bg-gray-300 text-xs py-0.5 px-2 rounded-lg">/trigger breath</code>. </li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Armor Statues</li>
              <ul>
                <li>- Player can customize armor stand into whatever styles they want it to be.</li>
                <li>- To customize armor stand, craft a book and quill, and name the book to <code className="bg-gray-300 text-xs py-0.5 px-2 rounded-lg">statues</code>. All available customizations are accessible via the book.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Cauldron Concrete</li>
              <ul>
                <li>- Throw concrete powders into a water cauldron to make concretes.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Compass Coordinates</li>
              <ul>
                <li>- Hold a compass in your hand to show coordinate in the action bar.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Craftable Bundles (Leather)</li>
              <ul>
                <li>- Add custom recipe for crafting a bundle.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Custom Nether Portals</li>
              <ul>
                <li>- Nether Portal can be built in different shapes.</li>
                <li>- Nether Portal can be built by using the combination of obsidians and crying obsidians.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Deep Mobs</li>
              <ul>
                <li>- Zombies, Skeletons, Spiders, and Creepers are more powerful when you go deeper underground.</li>
                <li>- Sometimes, Cave Spiders and Wither Skeletons can spawn in deep underground.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Double Shulker Shells</li>
              <ul>
                <li>- Shulker drops at least 2 shulker shells.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Dragon Drops</li>
              <ul>
                <li>- Ender Dragon always drops an ender egg and an elytra.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Fast Leaf Decay</li>
              <ul>
                <li>- Leaves from cut trees decay faster.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Graves</li>
              <ul>
                <li>- When player dies, they drop items in their grave.</li>
                <li>- Player can see their latest grave by using command <code className="bg-gray-300 text-xs py-0.5 px-2 rounded-lg">/trigger graves</code>.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Larger Phantoms</li>
              <ul>
                <li>- Phantom grows bigger when player does not sleep for a long time.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">More Mob Heads</li>
              <ul>
                <li>- There is a chance that mobs drop their head when being killed.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Player Head Drops</li>
              <ul>
                <li>- Player drops their head when being killed by another player.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Silence Mobs</li>
              <ul>
                <li>- Mobs can be made silence by naming them <code className="bg-gray-300 text-xs py-0.5 px-2 rounded-lg">Silence</code> using name tag.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Technical Enchant+</li>
              <ul>
                <li className="text-red-500 font-semibold text-xs uppercase">This datapack will be enabled on later date by players&apos; discussion.</li>
                <li>- Add bunches of new enchantments.</li>
                <li>- See more <a className="underline text-blue-500" href="https://github.com/Frektip/Technical-Enchant-Renewed/wiki" target="_blank">here</a>.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Track Statistics / Track Raw Statistics</li>
              <ul>
                <li>- Track players&apos; stats.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Villager Death Messages</li>
              <ul>
                <li>- Broadcast a message when villager dies.</li>
              </ul>
            </ul>

            <ul className="font-light space-y-3 text-justify text-sm md:text-md">
              <li className="font-semibold text-purple-700">Workstation Highlights</li>
              <ul>
                <li>- Aim at a villager and use command <code className="bg-gray-300 text-xs py-0.5 px-2 rounded-lg">/trigger whs</code> to highlight the villager&apos;s workstation.</li>
              </ul>
            </ul>

          </div>
        </div>

        <div className="text-black px-12 py-12 mx-auto w-[95vw] md:w-[40rem] bg-white rounded-2xl shadow-lg" style={{display: isRegistrationOpening ? "block" : "none"}}>
          <p className="text-purple-700 text-2xl font-semibold uppercase mb-4 text-center">Registered Players</p>
          <div className="relative overflow-x-auto text-black font-semibold text-center">
            There are {registeredPlayers.length} players registered to the server right now.
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mt-4">
            {
              registeredPlayers.map((value, index) =>
                <div className="text-center" key={index}>
                  <Image 
                    src={`https://mc-heads.net/avatar/${value.username}`} 
                    alt={value.username + " Player Face"}
                    width={40}
                    height={40}
                    className="mx-auto"
                  />
                  <span className="text-xs" style={{color:colors.find(e => e.codeName === value.color)?.hexName}}>{value.username}</span>
                </div>
              )
            }
          </div>
          <p className="text-3xl md:text-6xl font-semibold uppercase my-16 text-center align-middle">
            <Countdown endDate={new Date(new Date("1 JUN 2024 20:00 GMT+7"))} ></Countdown>
          </p>
          <p className="text-sm md:text-lg font-semibold uppercase my-16 text-center align-middle">
            The form closes at <span className="underline">JUN 1st, 2024, 8PM (ICT)</span>
          </p>
        </div>

      </div>

      <FormModal openModal={openFormModal} onCloseModal={onCloseFormModal} onComplete={onComplete}></FormModal>
      <CompleteModal openModal={openCompleteModal} onCloseModal={onCloseCompleteModal}></CompleteModal>

    </main>
  );
}
