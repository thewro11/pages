'use client'

import { useEffect, useState } from "react";
import { Form } from "./interfaces/form";

import { useRouter } from "next/navigation";
import Image from "next/image";

import colors from "./data/colors.json"
import playerData from "./data/playerData.json"

export default function Svv2024() {
  const [registeredPlayers, setRegisteredPlayers] = useState([] as Form[]);
  const router = useRouter();

  useEffect(() => {
    setRegisteredPlayers(playerData);
  }, []);

  return (
    <>
      <main>
          <div className="box-sm">
            <div className="text-center">
              <h1>Minecraft Survival 2024</h1>
              <h4 className="mt-8">This server has been shutdown</h4>
            </div>
          </div>

          <div className="box-lg">
            <h2 className="text-center">Event Archives</h2>
            <div className="space-y-8">
              <ul className="space-y-3">
                <h5>
                  GUESS THE BLOCK
                  <button 
                    className="primary-btn ml-2 py-0.5 px-3"
                    onClick={() => router.push('/mc/svv2024/events/guess-the-block')}>
                      →
                  </button>
                  <span className="text-black font-normal ml-4">
                    By
                    <Image 
                      src={`https://mc-heads.net/avatar/DragonKnighX`} 
                      alt={"DragonKnighX Player Face"}
                      width={20}
                      height={20}
                      className="ml-2 mr-1 inline-block"
                    />
                    DragonKnighX
                  </span>
                </h5>
              </ul>
            </div>
          </div>

          <div className="box-lg">
            <h2 className="text-center">Server information</h2>
            <div className="space-y-8">
              <ul className="space-y-3">
                <h5>SERVER RULE</h5>
                <li>→ Actually, there are no rules in this server. But I would like everyone to <b>respect each others and not harassing other players</b>.</li>
                <li>→ Violation only results in <b>PERMANENT BAN</b>.</li>
              </ul>
              <ul className="space-y-3">
                <h5>GENERAL INFO</h5>
                <li>→ Only registered players can join this server. Players who want to join after the server starts have to individually contact Thewro and will be marked as guest.</li>
                <li>→ This server is <b>vanilla</b>; there are no mods and resource packs required to play this server. You can install any client mods or resource packs that enhance your gaming experiences, <b>except cheating mods</b>.</li>
                <li>→ Server difficulty of this server is <b>hard</b>. But it is not hard enough (trust me! 👌), so I decided to modify the difficulty by using datapacks (see more at Datapack Section below).</li>
                <li>→ This server has <b>friendly fire enabled</b>, so you could be able to poke your friends for fun 👀.</li>
                <li>→ Players cannot travel further than ±5000 blocks in x and z axis. This will be increased later if players have already explored major of the available area.</li>
                <li>→ It requires 50% of online players to sleep in order to skip the night.</li>
              </ul>
              <ul className="space-y-3">
                <h5>DIMENSION LOCKED</h5>
                <li>To make the game not progressing so fast for everyone, I decided to lock <span className="nether">The Nether</span> and <span className="the-end">The End</span>, so that players can focus on having fun exploring the Overworld rather than raging to the end of the game.</li>
                <li>→ <span className="nether">The Nether</span> is locked for <b>one week</b> after the server starts.</li>
                <li>→ <span className="the-end">The End</span> is locked <b>until later players&apos; discussion</b>. While The End is locked, players will not be able to craft <b>The Eye of Ender</b> and the crafting recipe for <b>Ender Chest</b> are changed (see more at Datapack Section below).</li>
              </ul>
            </div>
          </div>

          <div className="box-lg">
            <h2 className="text-center">Server Datapacks</h2>
            <div className="space-y-5 text-left">
              <ul className="space-y-3">
                <h5>Thewro&apos;s Survival+</h5>
                <ul>
                  <li>- Player cannot craft the eye of ender while The End is locked.</li>
                  <li>- The recipe of ender chest is changed to 7 obsidians, an ender pearl, and a blaze powder, instead of 8 obsidians and an eye of ender.</li>
                  <li>- Player can smelt block of iron ore, block of gold ore, and block of copper ore in blast furnace.</li>
                  <li>- Player can see each others health bar below player&apos;s name.</li>
                  <li>- Player can see each others level in player list (tab) menu.</li>
                  <li>- Player can glow themselves to make visible through walls by using command <code>/trigger glow</code>.</li>
                  <li>- Player can put anything on their head by using command <code>/trigger hat</code>.</li>
                </ul>
                <ul className="pt-2">
                  <h4><span className="font-semibold text-xs uppercase">Exclusive to Registered Members</span></h4>
                  <li>- Player can put Heart effect decoration on their head by using <code>/trigger heart</code>.</li>
                </ul>
                <ul className="pt-2">
                  <h4><span className="font-semibold text-xs uppercase">Exclusive to Original Members</span></h4>
                  <li>- Player can enable Breath joining sound effect decoration by using <code>/trigger breath</code>. </li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Armor Statues</h5>
                <ul>
                  <li>- Player can customize armor stand into whatever styles they want it to be.</li>
                  <li>- To customize armor stand, craft a book and quill, and name the book to <code>statues</code>. All available customizations are accessible via the book.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Cauldron Concrete</h5>
                <ul>
                  <li>- Throw concrete powders into a water cauldron to make concretes.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Compass Coordinates</h5>
                <ul>
                  <li>- Hold a compass in your hand to show coordinate in the action bar.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Craftable Bundles (Leather)</h5>
                <ul>
                  <li>- Add custom recipe for crafting a bundle.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Custom Nether Portals</h5>
                <ul>
                  <li>- Nether Portal can be built in different shapes.</li>
                  <li>- Nether Portal can be built by using the combination of obsidians and crying obsidians.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Deep Mobs</h5>
                <ul>
                  <li>- Zombies, Skeletons, Spiders, and Creepers are more powerful when you go deeper underground.</li>
                  <li>- Sometimes, Cave Spiders and Wither Skeletons can spawn in deep underground.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Double Shulker Shells</h5>
                <ul>
                  <li>- Shulker drops at least 2 shulker shells.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Dragon Drops</h5>
                <ul>
                  <li>- Ender Dragon always drops an ender egg and an elytra.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Fast Leaf Decay</h5>
                <ul>
                  <li>- Leaves from cut trees decay faster.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Graves</h5>
                <ul>
                  <li>- When player dies, they drop items in their grave.</li>
                  <li>- Player can see their latest grave by using command <code>/trigger graves</code>.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Larger Phantoms</h5>
                <ul>
                  <li>- Phantom grows bigger when player does not sleep for a long time.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>More Mob Heads</h5>
                <ul>
                  <li>- There is a chance that mobs drop their head when being killed.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Player Head Drops</h5>
                <ul>
                  <li>- Player drops their head when being killed by another player.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Silence Mobs</h5>
                <ul>
                  <li>- Mobs can be made silence by naming them <code>Silence</code> using name tag.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Technical Enchant+</h5>
                <ul>
                  <li className="warning-text">This datapack will be enabled on later date by players&apos; discussion.</li>
                  <li>- Add bunches of new enchantments.</li>
                  <li>- See more <a className="hyperlink" href="https://github.com/Frektip/Technical-Enchant-Renewed/wiki" target="_blank">here</a>.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Track Statistics / Track Raw Statistics</h5>
                <ul>
                  <li>- Track players&apos; stats.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Villager Death Messages</h5>
                <ul>
                  <li>- Broadcast a message when villager dies.</li>
                </ul>
              </ul>

              <ul className="space-y-3">
                <h5>Workstation Highlights</h5>
                <ul>
                  <li>- Aim at a villager and use command <code>/trigger whs</code> to highlight the villager&apos;s workstation.</li>
                </ul>
              </ul>

            </div>
          </div>

          <div className="box-lg">
            <div className="text-center">
              <h2 className="mb-0">Registered Players</h2>
              <h4>
                {registeredPlayers.length} Whitelisted Players
              </h4>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mt-8">
              {
                registeredPlayers.map((value, index) =>
                  <div className="text-center leading-normal" key={index}>
                    <Image 
                      src={`https://mc-heads.net/avatar/${value.username}`} 
                      alt={value.username + " Player Face"}
                      width={40}
                      height={40}
                      className="mx-auto"
                    />
                    <span className="text-xs" style={{color:colors.find(e => e.codeName === value.color)?.hexName}}>{value.prefix + " " + value.username}</span>
                  </div>
                )
              }
            </div>
          </div>
      </main>
    </>
  );
}
