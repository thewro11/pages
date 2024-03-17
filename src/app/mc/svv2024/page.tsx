'use client'

import { useEffect, useState } from "react";
import FormModal from "./components/FormModal";
import CompleteModal from "./components/CompleteModal";
import { getForm } from "./libs/FirebaseDb";
import { Form } from "./interfaces/form";

import colors from './data/colors.json';

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

  useEffect(() => {
    getForms();
  }, []);

  return (
    <main className="pt-24 pb-24">
      <div className="top-0 fixed py-3 px-8 w-full text-sm rounded-lg bg-[#1A1040]" style={{display: isRegistrationOpening ? "flex" : "none"}} role="alert">
        <span className="grow items-center inline-flex">
          Minecraft Survival 2024 is now recruiting members!&nbsp;<span className="font-semibold">Register now!</span>
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
        <div className="text-black px-12 py-12 mx-auto w-[50vw] bg-white rounded-2xl shadow-lg">
          <p className="text-purple-700 text-2xl font-semibold uppercase mb-4 text-center">Minecraft Survival 2024</p>
          <p className="text-6xl font-semibold uppercase my-16 text-center align-middle">COMING SOON</p>
        </div>

        <div className="text-black px-12 py-12 mx-auto w-[50vw] bg-white rounded-2xl shadow-lg">
          <p className="text-purple-700 text-2xl font-semibold uppercase mb-6 text-center">Server information</p>
          <div className="space-y-8">
            <ul className="font-light space-y-3 text-justify">
              <li className="font-bold text-purple-700">SERVER RULE</li>
              <li>→ Actually, there are no rules in this server. But I would like everyone to <span className="font-bold">respect each others and not harassing other players</span>.</li>
              <li>→ Violation only results in <span className="font-bold">PERMANENT BAN</span>.</li>
            </ul>
            <ul className="font-light space-y-3 text-justify">
              <li className="font-bold text-purple-700">GENERAL INFO</li>
              <li>→ Only registered players can join this server. Players who want to join after the server starts have to individually contact Théo and will be marked as GUEST.</li>
              <li>→ This server is <span className="font-semibold">vanilla</span>; there are no mods and resource packs required to play this server. You can install any client mods or resource packs that enchance your gaming experiences, <span className="font-semibold">EXCEPT CHEATING MODS</span>.</li>
              <li>→ Server difficulty of this server is <span className="font-semibold">hard</span>. But it is not hard enough (trust me! 👌), so I decided to modify the difficulty by using datapacks (see more at Datapack Section below).</li>
              <li>→ This server has <span className="font-semibold">friendly fire enabled</span>, so you could be able to poke your friends for fun 👀.</li>
              <li>→ Players cannot travel further than ±5000 blocks in x and z axis. This will be increased later if players have already explored major of the available area.</li>
            </ul>
            <ul className="font-light space-y-3 text-justify">
              <li className="font-bold text-purple-700">DIMENSION LOCKED</li>
              <li>To make the game not progressing so fast for everyone, I decided to lock <span className="font-semibold text-red-600">The Nether</span> and <span className="font-semibold text-purple-900">The End</span>, so that players can focus on having fun exploring the Overworld rather than raging to the end of the game.</li>
              <li>→ <span className="font-semibold text-red-600">The Nether</span> is locked for <span className="font-semibold">ONE WEEK</span> after the server starts.</li>
              <li>→ <span className="font-semibold text-purple-900">The End</span> is locked <span className="font-semibold">until later players&apos; discussion</span>. While The End is locked, players will not be able to craft <b>The Eye of Ender</b> and the crafting recipe for <b>Ender Chest</b> are changed (see more at Datapack Section below).</li>
            </ul>
          </div>
        </div>

        <div className="text-black px-12 py-12 mx-auto w-[50vw] bg-white rounded-2xl shadow-lg">
          <p className="text-purple-700 text-2xl font-semibold uppercase mb-4 text-center">Server Datapacks</p>
          <ul>
            <li>- Théo&apos;s Survival+ (additional block of ore smelting)</li>
            <li>- Armor Statues</li>
            <li>- Cauldron Concrete</li>
            <li>- Compass Coordinates</li>
            <li>- Craftable Bundles (Leather)</li>
            <li>- Custom Nether Portals</li>
            <li>- Deep Mobs</li>
            <li>- Double Shulker Shells</li>
            <li>- Dragon Drops</li>
            <li>- Fast Leaf Decay</li>
            <li>- Graves</li>
            <li>- Larger Phantoms</li>
            <li>- More Mob Heads</li>
            <li>- Player Head Drops</li>
            <li>- Silence Mobs</li>
            <li>- Technical Enchant+ (enabled after the server starts for one month)</li>
            <li>- Track Raw Statistics</li>
            <li>- Track Statistics</li>
            <li>- Villager Death Messages</li>
            <li>- Workstation Highlights</li>
          </ul>
        </div>

        <div className="text-black px-12 py-12 mx-auto w-[50vw] bg-white rounded-2xl shadow-lg" style={{display: isRegistrationOpening ? "block" : "none"}}>
          <p className="text-purple-700 text-2xl font-semibold uppercase mb-4 text-center">Registered Players</p>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name Prefix
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Minecraft Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {
                    registeredPlayers.map(form => 
                      <tr key={form.username} className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {form.prefix}
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" style={{color: colors.find(color => form.color === color.codeName)?.hexName}}>
                            {colors.find(color => form.color === color.codeName)?.displayName}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {form.username}
                        </td>
                      </tr>
                    )
                  }
                </tbody>
            </table>
          </div>
        </div>

      </div>

      <FormModal openModal={openFormModal} onCloseModal={onCloseFormModal} onComplete={onComplete}></FormModal>
      <CompleteModal openModal={openCompleteModal} onCloseModal={onCloseCompleteModal}></CompleteModal>

    </main>
  );
}
