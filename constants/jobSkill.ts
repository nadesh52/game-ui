export const jobSkills: any = [
  {
    id: "dk",
    skills: [
      {
        name: "Servant Weapon",
        icon: "/assets/icon/5201.png",
        maxLv: 5,
        group: "Active",
        type: "Assist",
        target: "Self",
        recoveryAp: "skill level * 6",
        description: `Summons the aura weapons, When dealing normal melee physical damage, the weapon is consumed and dealing melee physical damage for 3 hits to the target and surrounding enemies within 9 x 9 cells around the target.
Up to 5 weapons can be controlled as once, the weapon recovery interval is faster and the trigger chance is increased depends on skill level.
Deals additional damage depends on user's base level and POW, has a chance to trigger critical, critical chance is the user's Cri.
The effectiveness of critical modifier is applied by half.`,
        levels: [
          {
            rank: "Level 1",
            description: "1450% Atk per hit / last for 30 seconds.",
          },
          {
            rank: "Level 2",
            description: "2300% Atk per hit / last for 60 seconds.",
          },
          {
            rank: "Level 3",
            description: "3150% Atk per hit / last for 90 seconds.",
          },
          {
            rank: "Level 4",
            description: "4000% Atk per hit / last for 120 seconds.",
          },
          {
            rank: "Level 5",
            description: "4850% Atk per hit / last for 150 seconds.",
          },
        ],
      },
      {
        name: "Two Hand Defending",
        icon: "/assets/icon/5207.png",
        maxLv: 10,
        group: "Passive",
        description: `When equipping two-handed sword, two-handed spear or two-handed axe, reduces physical damage taken from enemies depends on their size.`,
        levels: [
          {
            rank: "Level 1",
            description: "Small : 1% / medium : 2% / large : 3%.",
          },
          {
            rank: "Level 2",
            description: "Small : 2% / medium : 3% / large : 5%.",
          },
          {
            rank: "Level 3",
            description: "Small : 3% / medium : 5% / large : 7%.",
          },
          {
            rank: "Level 4",
            description: "Small : 4% / medium : 6% / large : 9%.",
          },
          {
            rank: "Level 5",
            description: "Small : 5% / medium : 8% / large : 10%.",
          },
          {
            rank: "Level 6",
            description: "Small : 6% / medium : 9% / large : 12%.",
          },
          {
            rank: "Level 7",
            description: "Small : 7% / medium : 11% / large : 13%.",
          },
          {
            rank: "Level 8",
            description: "Small : 8% / medium : 12% / large : 15%.",
          },
          {
            rank: "Level 9",
            description: "Small : 9% / medium : 14% / large : 16%.",
          },
          {
            rank: "Level 10",
            description: "Small : 10% / medium : 15% / large : 18%.",
          },
        ],
      },
      {
        name: "Vigor",
        icon: "/assets/icon/5212.png",
        maxLv: 10,
        prerequisite_skills: [
          "Servant Weapon-Demolition level 3",
          "Storm Slash level 5",
        ],
        group: "Active (AP)",
        type: "Assist",
        target: "Self",
        consumeAp: "125",
        description: `increases normal melee physical damage for the skill duration.
Each attack consumes a certain amount of HP, increases physical damage against demihuman and angel race monsters.`,
        levels: [
          {
            rank: "Level 1",
            description: `+115% normal dmg / +10% damage against demihuman and angel / Skill duration : 30 seconds / HP consumption : 100.`,
          },
          {
            rank: "Level 2",
            description: `+130% normal dmg / +20% damage against demihuman and angel / Skill duration : 60 seconds / HP consumption : 90.`,
          },
          {
            rank: "Level 3",
            description: `+145% normal dmg / +30% damage against demihuman and angel / Skill duration : 90 seconds / HP consumption : 80.`,
          },
          {
            rank: "Level 4",
            description: `+160% normal dmg / +40% damage against demihuman and angel / Skill duration : 120 seconds / HP consumption : 70.`,
          },
          {
            rank: "Level 5",
            description: `+175% normal dmg / +50% damage against demihuman and angel / Skill duration : 150 seconds / HP consumption : 60.`,
          },
          {
            rank: "Level 6",
            description: `+190% normal dmg / +60% damage against demihuman and angel / Skill duration : 180 seconds / HP consumption : 50.`,
          },
          {
            rank: "Level 7",
            description: `+205% normal dmg / +70% damage against demihuman and angel / Skill duration : 210 seconds / HP consumption : 40.`,
          },
          {
            rank: "Level 8",
            description: `+220% normal dmg / +80% damage against demihuman and angel / Skill duration : 240 seconds / HP consumption : 30.`,
          },
          {
            rank: "Level 9",
            description: `+235% normal dmg / +90% damage against demihuman and angel / Skill duration : 270 seconds / HP consumption : 20.`,
          },
          {
            rank: "Level 10",
            description: `+250% normal dmg / +100% damage against demihuman and angel / Skill duration : 300 seconds / HP consumption : 10.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "ig",
    skills: [
      {
        name: "Guard Stance",
        icon: "/assets/icon/5255.png",
        prerequisite_skills: ["Shield Mastery level 3"],
        maxLv: 5,
        group: "Active",
        type: "Toggle",
        target: "Self",
        description: `Shield exclusive skill.
Reduces physical attack power but increases physical defense of the user.`,
        levels: [
          {
            rank: "Level 1",
            description: "Def + 100 / Atk - 50.",
          },
          {
            rank: "Level 2",
            description: "Def + 150 / Atk - 100.",
          },
          {
            rank: "Level 3",
            description: "Def + 200 / Atk - 150.",
          },
          {
            rank: "Level 4",
            description: "Def + 250 / Atk - 200.",
          },
          {
            rank: "Level 5",
            description: "Def + 300 / Atk - 250.",
          },
        ],
      },
      {
        name: "Guardian Shield",
        icon: "/assets/icon/5256.png",
        maxLv: 5,
        group: "Active",
        type: "Buff",
        target: "Self and party members",
        consumeAp: "35",
        description: ` Can only be used while using Guard Stance.
Gives the user and all party members within 21 x 21 cells around the user a physical barrier proportional to user's HP for 40 seconds. The durability of shield is calculated from 30% of the user's MaxHP, base level and STA.`,
        levels: [
          {
            rank: "Level 1",
            description: "Shield durability portion : 25%.",
          },
          {
            rank: "Level 2",
            description: "Shield durability portion : 50%.",
          },
          {
            rank: "Level 3",
            description: "Shield durability portion : 75%.",
          },
          {
            rank: "Level 4",
            description: "Shield durability portion : 100%.",
          },
          {
            rank: "Level 5",
            description: "Shield durability portion : 125%.",
          },
        ],
      },
      {
        name: "Shield  Mastery",
        icon: "/assets/icon/5258.png",
        maxLv: 10,
        group: "Passive",
        description: `When equipping shield, increases physical resistance and increases Imperial Guard related skills damage.`,
        levels: [
          {
            rank: "Level 1",
            description: `Res + 3.`,
          },
          {
            rank: "Level 2",
            description: `Res + 6.`,
          },
          {
            rank: "Level 3",
            description: `Res + 9.`,
          },
          {
            rank: "Level 4",
            description: `Res + 12.`,
          },
          {
            rank: "Level 5",
            description: `Res + 15.`,
          },
          {
            rank: "Level 6",
            description: `Res + 18.`,
          },
          {
            rank: "Level 7",
            description: `Res + 21.`,
          },
          {
            rank: "Level 8",
            description: `Res + 24.`,
          },
          {
            rank: "Level 9",
            description: `Res + 27.`,
          },
          {
            rank: "Level 10",
            description: `Res + 30.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "bi",
    skills: [
      {
        name: "Wooden Warrior",
        icon: "/assets/icon/5344.png",
        prerequisite_skills: ["Creeper level 3"],
        maxLv: 5,
        group: "Active",
        type: "Summon",
        target: "Self",
        recoveryAp: 20,
        description: `Summons Wooden Warrior.
Only 1 Wooden Warrior can be summoned at the same time.
Upon summoning, increases Cart Tornado and Cart Cannon damage.
Consumes 2 Greater Plant Bottle.`,
        levels: [
          {
            rank: "Level 1",
            description: "Skill duration : 120 seconds.",
          },
          {
            rank: "Level 2",
            description: "Skill duration : 180 seconds.",
          },
          {
            rank: "Level 3",
            description: "Skill duration : 240 seconds.",
          },
          {
            rank: "Level 4",
            description: "Skill duration : 300 seconds.",
          },
          {
            rank: "Level 5",
            description: "Skill duration : 360 seconds.",
          },
        ],
      },
      {
        name: "Research Report",
        icon: "/assets/icon/5347.png",
        prerequisite_skills: [
          "Acidified Zone Fire level 3",
          "Acidified Zone Water level 3",
        ],
        maxLv: 1,
        group: "Active (AP)",
        type: "Buff",
        target: "Self",
        consumeAp: "100",
        description: `Prepares and presents report of the user's research.
Increases Acidified Zone skills damage and reduces material consumption of Acidified Zone skills form 2 to 1 for 150 seconds.
Additionally, increases damage of Acidified Zone skills against formless and plant race monsters.`,
        levels: [
          {
            rank: "Level 1",
            description: `Increases Acidified Zone skills damage / increases damage of Acidified Zone skills against formless and plant race monsters / reduces material consumption of Acidified Zone skills by 1.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "ms",
    skills: [
      {
        name: "Axe Stomp",
        icon: "/assets/icon/5295.png",
        prerequisite_skills: ["Two Hand Axe Defending level 5"],
        maxLv: 5,
        group: "Active",
        type: "Melee physical",
        target: "All target within range",
        recoveryAp: 3,
        description: `Axe exlusive skill.
Slams the ground with axe to deals melee physical damage to surrounding enemies around the user.
Grants Axe Stomp buff for the skill duration, increases Axe Tornado damage, if user equips two-handed axe, increases number of hit to 3 hits
Deals additional damage depends on user's base level and POW.`,
        levels: [
          {
            rank: "Level 1",
            description:
              "1600% Atk per hit / area of effect : 3 x 3 cells / duration : 10 seconds.",
          },
          {
            rank: "Level 2",
            description:
              "2750% Atk per hit / area of effect : 3 x 3 cells / duration : 15 seconds.",
          },
          {
            rank: "Level 3",
            description:
              "3900% Atk per hit / area of effect : 5 x 5 cells / duration : 20 seconds.",
          },
          {
            rank: "Level 4",
            description:
              "5050% Atk per hit / area of effect : 5 x 5 cells / duration : 25 seconds.",
          },
          {
            rank: "Level 5",
            description:
              "6200% Atk per hit / area of effect : 7 x 7 cells / duration : 30 seconds..",
          },
        ],
      },
      {
        name: "Manufacture Machine",
        icon: "/assets/icon/5297.png",
        prerequisite_skills: [
          "Acidified Zone Fire level 3",
          "Acidified Zone Water level 3",
        ],
        maxLv: 5,
        group: "Active",
        type: "Creation",
        target: "Self and party members",
        description: `Creates the machines that is used on various skills.
Requires [Machine Creation Guide] to use the skill.`,
        levels: [
          {
            rank: "Level 1",
            description: `Maximum creation amount : 8.`,
          },
          {
            rank: "Level 2",
            description: `Maximum creation amount : 9.`,
          },
          {
            rank: "Level 3",
            description: `Maximum creation amount : 10.`,
          },
          {
            rank: "Level 4",
            description: `Maximum creation amount : 11.`,
          },
          {
            rank: "Level 5",
            description: `Maximum creation amount : 12.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "sc",
    skills: [
      {
        name: "Dancing Knife",
        icon: "/assets/icon/5286.png",
        prerequisite_skills: ["Shadow Sense level 3"],
        maxLv: 5,
        group: "Active",
        type: "Buff",
        target: "Self",
        description: `Dagger exclusive skill.
Swirls the small blades around the user, dealing damage every 0.3 seconds to surrounding enemies within 5 x 5 cells around the user.
When swapping to the weapon other than dagger, the skill effect is immediately canceled.
Deals additional damage depends on user's base level and POW.`,
        levels: [
          {
            rank: "Level 1",
            description: "200% Atk / skill duration : 40 seconds.",
          },
          {
            rank: "Level 2",
            description: "400% Atk / skill duration : 60 seconds.",
          },
          {
            rank: "Level 3",
            description: "600% Atk / skill duration : 80 seconds.",
          },
          {
            rank: "Level 4",
            description: "800% Atk / skill duration : 100 seconds.",
          },
          {
            rank: "Level 5",
            description: "1000% Atk / skill duration : 120 seconds.",
          },
        ],
      },
      {
        name: "Eternal Slash",
        icon: "/assets/icon/5289.png",
        prerequisite_skills: [
          "Weapon Blocking level 5",
          "Shadow Sense level 5",
          "Dancing Knife level 3",
        ],
        maxLv: 5,
        group: "Active",
        type: "Melee physical",
        target: "Single target",
        description: `Can be used while Weapon Blocking counter state is triggered.
Deals melee physical damage to the target.
If the skill is used within 3 seconds, increases number of hit by 1 hit (up to 5 hits).
Deals additional damage depends on user's base level and POW.
Has a chance to trigger critical, critical chance is the half user's Cri.
The effectiveness of critical modifier is applied by half.`,
        levels: [
          {
            rank: "Level 1",
            description: `300% Atk / 420% Atk (Shadow Exceed).`,
          },
          {
            rank: "Level 2",
            description: `600% Atk / 840% Atk (Shadow Exceed).`,
          },
          {
            rank: "Level 3",
            description: `900% Atk / 1260% Atk (Shadow Exceed).`,
          },
          {
            rank: "Level 4",
            description: `1200% Atk / 1680% Atk (Shadow Exceed).`,
          },
          {
            rank: "Level 5",
            description: `1500% Atk / 2100% Atk (Shadow Exceed).`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "ac",
    skills: [
      {
        name: "Strip Shadow",
        icon: "/assets/icon/5313.png",
        prerequisite_skills: [
          "Divest Accessory level 1",
          "Dagger & Bow Mastery level 7",
        ],
        maxLv: 5,
        group: "Active",
        type: "Debuff",
        target: "Single target",
        description: `Strips all of shadow gears target equipped, shadow gears can't be re-equipped for the skill duration.
When using on monsters, reduces monsters' physical resistance and magical resistance.`,
        levels: [
          {
            rank: "Level 1",
            description:
              "Strip success chance : 20% / strip duration : 60 seconds.",
          },
          {
            rank: "Level 2",
            description:
              "Strip success chance : 25% / strip duration : 70 seconds.",
          },
          {
            rank: "Level 3",
            description:
              "Strip success chance : 30% / strip duration : 80 seconds.",
          },
          {
            rank: "Level 4",
            description:
              "Strip success chance : 35% / strip duration : 90 seconds.",
          },
          {
            rank: "Level 5",
            description:
              "Strip success chance : 40% / strip duration : 100 seconds.",
          },
        ],
      },
      {
        name: "Abyss Dagger",
        icon: "/assets/icon/5314.png",
        prerequisite_skills: [
          "Fatal Menace level 5",
          "Dagger & Bow Mastery level 3",
        ],
        maxLv: 5,
        group: "Active",
        type: "Melee physical",
        target: "Instant cast",
        description: `Dagger and one-handed sword exclusive skill.
Deals 2 hits of melee physical damage to the surrounding enemies within 7 x 7 cells around the user.
Grants a buff that increases Fatal Menace damage.
Deals additional damage depends on user's base level and POW.`,
        levels: [
          {
            rank: "Level 1",
            description: `1750% Atk per hit / increases Fatal Menace damage : 3 seconds.`,
          },
          {
            rank: "Level 2",
            description: `3150% Atk per hit / increases Fatal Menace damage : 6 seconds.`,
          },
          {
            rank: "Level 3",
            description: `4550% Atk per hit / increases Fatal Menace damage : 9 seconds.`,
          },
          {
            rank: "Level 4",
            description: `5950% Atk per hit / increases Fatal Menace damage : 12 seconds.`,
          },
          {
            rank: "Level 5",
            description: `7350% Atk per hit / increases Fatal Menace damage : 15 seconds.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "am",
    skills: [
      {
        name: "Deadly Projection",
        icon: "/assets/icon/5214.png",
        prerequisite_skills: ["Mystery Illusion level 3"],
        maxLv: 5,
        group: "Active",
        type: "Magic",
        target: "Single target",
        description: `Corrupts the somatic cells of the target.
Nullifies magical immunity of the target for the skill duration and deals undead property magical damage to the target.
Deals additional damage depends on user's base level and SPL.`,
        levels: [
          {
            rank: "Level 1",
            description: "2800% Matk / debuff last for 4 seconds.",
          },
          {
            rank: "Level 2",
            description: "5600% Matk / debuff last for 5 seconds.",
          },
          {
            rank: "Level 3",
            description: "8400% Matk / debuff last for 6 seconds.",
          },
          {
            rank: "Level 4",
            description: "11200% Matk / debuff last for 7 seconds.",
          },
          {
            rank: "Level 5",
            description: "14000% Matk / debuff last for 8 seconds.",
          },
        ],
      },
      {
        name: "Mystery Illusion",
        icon: "/assets/icon/5217.png",
        prerequisite_skills: [
          "Hell Inferno level 3",
          "Soul Vulcan Strike level 3",
        ],
        maxLv: 5,
        group: "Active",
        type: "Magic",
        target: "1 cell ground target",
        recoveryAp: "5",
        description: `Casts the mystery magic on the target area. Deals shadow property magical damage to the targets within skill range for the skill duration.
Deals additional damage depends on user's base level and SPL.`,
        levels: [
          {
            rank: "Level 1",
            description: `950% Matk / area of effect : 9 x 9 cells.`,
          },
          {
            rank: "Level 2",
            description: `1900% Matk / area of effect : 9 x 9 cells.`,
          },
          {
            rank: "Level 3",
            description: `2850% Matk / area of effect : 11 x 11 cells.`,
          },
          {
            rank: "Level 4",
            description: `3800% Matk / area of effect : 11 x 11 cells.`,
          },
          {
            rank: "Level 5",
            description: `4750% Matk / area of effect : 13 x 13 cells.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "em",
    skills: [
      {
        name: "Increasing Activity",
        icon: "/assets/icon/5368.png",
        prerequisite_skills: ["Activity Burn level 5"],
        maxLv: 5,
        group: "Active (AP)",
        type: "Buff",
        target: "Party members except self",
        consumeAp: "50",
        description: `Description : Recovers target's AP as a cost of user's AP by 50.`,
        levels: [
          {
            rank: "Level 1",
            description: "Recovers AP : 10",
          },
          {
            rank: "Level 2",
            description: "Recovers AP : 20",
          },
          {
            rank: "Level 3",
            description: "Recovers AP : 30",
          },
          {
            rank: "Level 4",
            description: "Recovers AP : 40",
          },
          {
            rank: "Level 5",
            description: "Recovers AP : 50",
          },
        ],
      },
      {
        name: "Summon Elemental Ardor",
        icon: "/assets/icon/5375.png",
        prerequisite_skills: [
          "Call Agni level 3",
          "Elemental Spirit Mastery level 1",
          "Conflagration level 1",
        ],
        maxLv: 1,
        group: "Active",
        type: "Summon",
        description: `Consumes 1 Flame Stone, descends high elemental spirit of fire "Ardor" to elemental spirit Agni (large).
Upon summoning, increases fire property magical damage of summoner by 10%, increases Conflagration damage.
Ardor's stats are increased depends on summoner's stats and level of Elemental Spirit Mastery summoner learned.`,
        levels: [
          {
            rank: "Level 1",
            description: `Elemental spirit duration : 1500 seconds.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "ca",
    skills: [
      {
        name: "Reparatio",
        icon: "/assets/icon/5268.png",
        prerequisite_skills: ["Mediale Votum level 3"],
        maxLv: 5,
        group: "Active",
        type: "Recovery",
        target: "Single target",
        description: `Heals target to max health.
Can't be used on monsters, mercenaries, elemental spirits and homunculi.`,
        levels: [
          {
            rank: "Level 1",
            description: "Skill cooldown : 150 seconds.",
          },
          {
            rank: "Level 2",
            description: "Skill cooldown : 100 seconds.",
          },
          {
            rank: "Level 3",
            description: "Skill cooldown : 60 seconds.",
          },
          {
            rank: "Level 4",
            description: "Skill cooldown : 30 seconds.",
          },
          {
            rank: "Level 5",
            description: "Skill cooldown : 10 seconds.",
          },
        ],
      },
      {
        name: "Fidus Animus",
        icon: "/assets/icon/5276.png",
        maxLv: 10,
        group: "Passive",
        description: `Increases holy property magical damage of self.
Affects Framen, Arbitrium and Pneumaticus Procella damage.`,
        levels: [
          {
            rank: "Level 1",
            description: `Increases holy property magical damage : 1%.`,
          },
          {
            rank: "Level 2",
            description: `Increases holy property magical damage : 3%.`,
          },
          {
            rank: "Level 3",
            description: `Increases holy property magical damage : 4%.`,
          },
          {
            rank: "Level 4",
            description: `Increases holy property magical damage : 6%.`,
          },
          {
            rank: "Level 5",
            description: `Increases holy property magical damage : 7%.`,
          },
          {
            rank: "Level 6",
            description: `Increases holy property magical damage : 9%.`,
          },
          {
            rank: "Level 7",
            description: `Increases holy property magical damage : 10%.`,
          },
          {
            rank: "Level 8",
            description: `Increases holy property magical damage : 12%.`,
          },
          {
            rank: "Level 9",
            description: `Increases holy property magical damage : 13%.`,
          },
          {
            rank: "Level 10",
            description: `Increases holy property magical damage : 15%.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "iq",
    skills: [
      {
        name: "Powerful Faith",
        icon: "/assets/icon/5238.png",
        prerequisite_skills: ["Will of Faith level 1"],
        maxLv: 5,
        group: "Active",
        type: "Assist",
        target: "Self",
        description: `Strengthens the user's faith to increases the user's attack power.
Can't be use with Firm Faith and Sincere Faith.`,
        levels: [
          {
            rank: "Level 1",
            description: "Atk + 10 / P.Atk + 7 / duration : 120 seconds.",
          },
          {
            rank: "Level 2",
            description: "Atk + 15 / P.Atk + 9 / duration : 150 seconds.",
          },
          {
            rank: "Level 3",
            description: "Atk + 20 / P.Atk + 11 / duration : 180 seconds.",
          },
          {
            rank: "Level 4",
            description: "Atk + 25 / P.Atk + 13 / duration : 210 seconds.",
          },
          {
            rank: "Level 5",
            description: "Atk + 30 / P.Atk + 15 / duration : 240 seconds.",
          },
        ],
      },
      {
        name: "Explosion Blaster",
        icon: "/assets/icon/5244.png",
        prerequisite_skills: ["Oleum Sanctum level 1"],
        maxLv: 1,
        group: "Active",
        type: "Long ranged physical",
        target: "Instant cast",
        description: `Blows the powerful bomb to deals long ranged physical damage to surrounding enemies around the user.
Deals additional damage to the target who is inflicted by Oleum Sanctum.
Deals additional damage depends on user's base level and POW.
Has a chance to trigger critical, critical chance is the user's Cri.
The effectiveness of critical modifier is applied by half.`,
        levels: [
          {
            rank: "Level 1",
            description: `3050% Atk / 4000% Atk (Oleum Sanctum) / area of effect : 7 x 7 cells.`,
          },
          {
            rank: "Level 2",
            description: `5650% Atk / 7550% Atk (Oleum Sanctum) / area of effect : 7 x 7 cells.`,
          },
          {
            rank: "Level 3",
            description: `8250% Atk / 11100% Atk (Oleum Sanctum) / area of effect : 7 x 7 cells.`,
          },
          {
            rank: "Level 4",
            description: `10850% Atk / 14650% Atk (Oleum Sanctum) / area of effect : 9 x 9 cells.`,
          },
          {
            rank: "Level 5",
            description: `13450% Atk / 18200% Atk (Oleum Sanctum) / area of effect : 9 x 9 cells.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "wh",
    skills: [
      {
        name: "Hawk Mastery",
        icon: "/assets/icon/5327.png",
        prerequisite_skills: ["Steel Crow level 1"],
        maxLv: 1,
        group: "Active / Special",
        description: `Trains the hawk to follow the order.
The hawk can be trained along with warg, the chance to trigger Warg Strike is reduced to 1/3 when hawk and warg are summoned together.
Requires [Hawk Flute] to calls the hawk.`,
        levels: [
          {
            rank: "Level 1",
            description: "Summons hawk.",
          },
        ],
      },
      {
        name: "Solid Trap",
        icon: "/assets/icon/5332.png",
        prerequisite_skills: ["Advanced Trap level 3"],
        maxLv: 5,
        group: "Active",
        type: "Trap",
        target: "1 cell ground target",
        recoveryAp: "1/1/2/2/3",
        description: `Places the trap that deals earth property melee physical damage every 0.5 seconds for the trap duration.
Attack area and trap duration is increased depends on skill level.
Consumes 2 Special Alloy Trap.
(Special Alloy Trap can't be retrieved via Remove Trap, etc.).
Deals additional damage depends on user's base level and CON.`,
        levels: [
          {
            rank: "Level 1",
            description: `850% Atk / trap duration : 3 seconds / area of effect : 3 x 3 cells.`,
          },
          {
            rank: "Level 2",
            description: `1700% Atk / trap duration : 3.5 seconds / area of effect : 3 x 3 cells.`,
          },
          {
            rank: "Level 3",
            description: `2550% Atk / trap duration : 4 seconds / area of effect : 5 x 5 cells.`,
          },
          {
            rank: "Level 4",
            description: `3400% Atk / trap duration : 4.5 seconds / area of effect : 5 x 5 cells.`,
          },
          {
            rank: "Level 5",
            description: `4250% Atk / trap duration : 5 seconds / area of effect : 7 x 7 cells.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "trm",
    skills: [
      {
        name: "Stage Manner",
        icon: "/assets/icon/5349.png",
        maxLv: 5,
        group: "Passive",
        description: `Increases AP gained when using Troubadour and Trouvere's attack skills, increases effectiveness of some song skills.
When equipping musical instrument, bow or whip, increases trait physical damage and trait magical damage.`,
        levels: [
          {
            rank: "Level 1",
            description:
              "Increases trait physical damage and trait magical damage : 3.",
          },
          {
            rank: "Level 2",
            description:
              "Increases trait physical damage and trait magical damage : 6.",
          },
          {
            rank: "Level 3",
            description:
              "Increases trait physical damage and trait magical damage : 9.",
          },
          {
            rank: "Level 4",
            description:
              "Increases trait physical damage and trait magical damage : 12.",
          },
          {
            rank: "Level 5",
            description:
              "Increases trait physical damage and trait magical damage : 15.",
          },
        ],
      },
      {
        name: "Retrospection",
        icon: "/assets/icon/5350.png",
        prerequisite_skills: ["Stage Manner level 1"],
        maxLv: 1,
        group: "Active",
        type: "Assist",
        target: "Self",
        description: `Recasts the latest song used.
Recasted skill consumes SP 30% less, and gains AP more than usual by 1.5 times.`,
        levels: [
          {
            rank: "Level 1",
            description: `Recasts the latest song used.`,
          },
        ],
      },
    ],
  },
  //
  {
    id: "trf",
    skills: [
      {
        name: "Requiem of Niflheim",
        icon: "/assets/icon/5358.png",
        prerequisite_skills: [
          "Musical Interlude level 1",
          "March of Prontera level 1",
        ],
        maxLv: 5,
        group: "Active",
        type: "Debuff",
        target: "Enemy players within range",
        recoveryAp: "20",
        description: `Musical instrument and whip exclusive skill.
Has a chance to inflicts [gloom] and [curse] status to the enemies players in the surrounding area.
Increases the success chance when there is the performer, who is in the same party, is on the user's screen.
This skill can only be used in PVP zones.
Consumes 1 Throat Lozenge.`,
        levels: [
          {
            rank: "Level 1",
            description:
              "Inflicts [gloom] and [curse] status / area of effect : 15 x 15 cells.",
          },
          {
            rank: "Level 2",
            description:
              "Inflicts [gloom] and [curse] status / area of effect : 15 x 15 cells.",
          },
          {
            rank: "Level 3",
            description:
              "Inflicts [gloom] and [curse] status / area of effect : 17 x 17 cells.",
          },
          {
            rank: "Level 4",
            description:
              "Inflicts [gloom] and [curse] status / area of effect : 21 x 21 cells.",
          },
          {
            rank: "Level 5",
            description:
              "Inflicts [gloom] and [curse] status / area of effect : 23 x 23 cells.",
          },
        ],
      },
      {
        name: "Geffenia Nocturne",
        icon: "/assets/icon/5363.png",
        prerequisite_skills: ["Stage Manner level 3"],
        maxLv: 5,
        group: "Active",
        type: "Debuff",
        target: "Enemies within range",
        recoveryAp: "20",
        description: `Musical instrument and whip exclusive skill.  
Has a chance to reduces magical resistance of normal monsters and enemy players in the surrounding area for 30 seconds.
Increases effectiveness when there is the performer, who is in the same party, is on the user's screen.
Consumes 1 Throat Lozenge.`,
        levels: [
          {
            rank: "Level 1",
            description: `Reduces magical resistance / area of effect : 15 x 15 cells.`,
          },
          {
            rank: "Level 2",
            description: `Reduces magical resistance / area of effect : 15 x 15 cells.`,
          },
          {
            rank: "Level 3",
            description: `Reduces magical resistance / area of effect : 17 x 17 cells.`,
          },
          {
            rank: "Level 4",
            description: `Reduces magical resistance / area of effect : 21 x 21 cells.`,
          },
          {
            rank: "Level 5",
            description: `Reduces magical resistance / area of effect : 23 x 23 cells.`,
          },
        ],
      },
    ],
  },
];
