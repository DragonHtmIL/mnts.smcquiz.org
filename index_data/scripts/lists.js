const quizData = [
  {//01
    question: "Why do they blacken the tubes on solar panels",
    answer: "Black absorb heat quicker",
    hint: "Black absorb heat more easily than the lighter colors"
  },
  {//02
    question: "Which of the following tokens/items cannot be traded for mecha",
    answer: "Meow token",
    hint: ""
  },
  {//03
    question: "Which is the wrong way to try out a mecha",
    answer: "Keep dreaming",
    hint: ""
  },
  {//04
    question: "Which mecha belong to Iori",
    answer: "Skylark",
    hint: ""
  },
  {//05
    question: "Which of the following mechas does not need to reload its primary weapon",
    answer: "Raven",
    hint: "You can always put trust in a bow, whether it's made from a branche or highly charged particles and electromagnetic fields"
  },
  {//06
    question: "How many players are on a team in Team Deathmatch",
    answer: "5",
    hint: ""
  },
  {//07
    question: "In theory, which of the following weapons has the speediest rounds",
    answer: "Railgun",
    hint: ""
  },
  {//08
    question: "What was Lillian's occupation",
    answer: "Police officer",
    hint: "Her police custom isn't for cosplay but a real duty. itmust be hard keeping peace every day."
  },
  {//09
    question: "What is used for glasses that correct nearsightedness",
    answer: "Concave lens",
    hint: ""
  },
  {//10
    question: "Which of the following is not a Mecha Personalization feature",
    answer: "Scrap Mecha",
    hint: "Mecha Stickers, Entrance Effects, and Kill Effects are all parts of Mecha Personalization"
  },
  {//11
    question: "Which of the following weapons has the highest ammo capacity",
    answer: "Hurricane's Aircraft Gun",
    hint: ""
  },
  {//12
    question: "Who is Rom's buddy",
    answer: "Vita",
    hint: ""
  },
  {//13
    question: "How many players are on a team in Infantry Arena",
    answer: "5",
    hint: "5 players per team in Infantry Arena"
  },
  {//14
    question: "Which of the following mechas can regenerate DUR",
    answer: "Skylark",
    hint: ""
  },
  {//15
    question: "Which of the following writers is known for science fiction",
    answer: "Liu Cixin",
    hint: ""
  },
  {//16
    question: "What does Mila's business make",
    answer: "Toys",
    hint: "Evryone knows Mila's grandfather is a tycoon in the toy biz"
  },
  {//17
    question: "About how long does it take for Earth to rotate once",
    answer: "24 hours",
    hint: "It takes one day to rotate, and a day is 24 hours"
  },
  {//18
    question: "Where is the best place to pray and get the best result",
    answer: "Grand Shrine",
    hint: ""
  },
  {//19
    question: "Can a mecha be called in Pilot Battle",
    answer: "Not at all",
    hint: ""
  },
  {//20
    question: "What prompted R.E.D to join the Super Mecha League",
    answer: "Outstanding record in underground fights",
    hint: ""
  },
  {//21
    question: "How many players can team up in the Lobby at once",
    answer: "3",
    hint: ""
  },
  {//22
    question: "Who is top test pilot in Mecha City",
    answer: "Yutong",
    hint: ""
  },
  {//23
    question: "Which of the following is the most common caliber for pistols",
    answer: "9mm",
    hint: "The 9mm caliber has many advantages, including high stopping power and convenience to pack"
  },
  {//24
    question: "What counts as a win in Battle Royale",
    answer: "Ranked in Top 5",
    hint: "Finish in the top 5 and it's a win. Of course, you should always go for #1"
  },
  {//25
    question: "Which of the following mechas can dish out ''marks'' (for special effects at the certain number of marks)",
    answer: "Boltus",
    hint: ""
  },
  {//26
    question: "What is the war ten years ago calld in the annals",
    answer: "Singularity War",
    hint: ""
  },
  {//27
    question: "What's the theory behind how a thermometer work",
    answer: "Thermal expansion and contraction",
    hint: ""
  },
  {//28
    question: "Which of the following mechas is not ''barehanded'' (no discernible weapon in hand)",
    answer: "Michael",
    hint: ""
  },
  {//29
    question: "Which mecha belongs to Mila",
    answer: "Caramel",
    hint: "Mila often rides around in Caramel and stirs up trouble in a cute way"
  },
  {//30
    question: "Who was the first to discover the sunlight is comprised of seven colors",
    answer: "Newton",
    hint: "Newton used a prism in 1666 to decipher the color spectrum"
  },
  {//31
    question: "Which of the following mechas does not have heavy armor",
    answer: "Firestar",
    hint: ""
  },
  {//32
    question: "Which of the following locations is not in Alpha City",
    answer: "Steel's Department Store",
    hint: ""
  },
  {//33
    question: "What is Cyrus's part-time job when not in school",
    answer: "Mercenary",
    hint: ""
  },
  {//34
    question: "Which of the following is a feature of the Infantry Arena",
    answer: "Fight as human the whole time",
    hint: "Infantry Arena is special because it's all pilots and no mecha"
  },
  {//35
    question: "What's the hardest natural substance",
    answer: "Diamond",
    hint: ""
  },
  {//36
    question: "Where is the Amusement Park in Mecha City",
    answer: "Sunset Clock",
    hint: ""
  },
  {//37
    question: "Which of following mechas uses walking for movement and sprints",
    answer: "Arthur",
    hint: "''A swordsman must be earth!'' is a phrase popular among fans. Wonder how Rom felt about that"
  },
  {//38
    question: "What is the name of Silver Deacon's religious organization",
    answer: "Priory of Mecha",
    hint: "Silver Deacon is a mysterious man from the Priory of Mecha"
  },
  {//39
    question: "What is the format for Iron Arena",
    answer: "2v2",
    hint: "The Iron Areana is limited to two-player teams, whis each person selecting three different mechas"
  },
  {//40
    question: "What is the projection of humanity in this world",
    answer: "Mecha",
    hint: "Mecha is humanity's reflection. Humans are vulnerable, but mecha can make the insignificant great and the weak strong"
  },
  {//41
    question: "Which of the following mechas cannot change form",
    answer: "Andromeda",
    hint: "Certain mechas in Mecha City can transform to handle different types of battle"
  },
  {//42
    question: "How many identical mechas can a team call in Team Deathmatch",
    answer: "2",
    hint: "A team can call up to 2 identical mechas in Team Deathmatch. Don't wait, because it's first come, first serve"
  },
  {//43
    question: "Which mecha cannot hover",
    answer: "Firefox",
    hint: ""
  },
  {//44
    question: "Who is the most adorable anchor girl in Mecha City",
    answer: "Riko",
    hint: ""
  },
  {//45
    question: "Which of the following isn't one of the Three Laws of Robotics",
    answer: "A robot may not replicate itself",
    hint: "Since the human race has been ''replicating'' for centuries, we have no right to stop robots from doing the same..",
  },
  {//46
    question: "The 2016 sci-fi film Arrival was adapted from which writer's work",
    answer: "Ted Chiang",
    hint: "Ted Chiang is a famous Chinese-American sci-fi writer who drew inspirations from the Chinese culture for his work",
  },
  {//47
    question: "How can you spruce your Lobby",
    answer: "Meow Token redemption",
    hint: "Meow Tokens obtained through battles, etc., can be traded for Lobby skins in the Meow Store",
  },
  {//48
    question: "What is Ning's favorite food",
    answer: "Chocolate",
    hint: "Ning is fond of chocolate. Send her more",
  },
  {//49
    question: "Which of the following mechas has the highest DUR",
    answer: "Hotsteel",
    hint: "Do not underestimate the hulk of Mecha City",
  },
  {//50
    question: "when are you not able to call a mecha after it's destroyed",
    answer: "ACETIME",
    hint: "You can't call a mecha in ACETIME. Keep that in mind",
  },
  {//51
    question: "When someone adds a friend from outside the game for reasons such as ''claiming perks'' or ''sending bullion,'' which approach is wrong",
    answer: "Gladly add this player as your friend",
    hint: "We will not request players to add external contacts via private or public messages in the game. Please be careful with messages and to avoid being scammed",
  },
  {//52
    question: "Other than in Mecha League, in what match can you see a mecha",
    answer: "Underground Fight",
    hint: "The dangerous underground fightingcircuits prodused many remakable pilots, ivan among them",
  },
  {//53
    question: "What does SMC stand for",
    answer: "Super MechA. Champions",
    hint: "SMC's full name is ''Super Mecha Champions'', also known as the ''Super Mecha League''",
  },
  {//54
    question: "Who was wanted in Mecha City",
    answer: "Rom",
    hint: "Rom went from ace pilot to the wanted list, before returning to active competition... A legendary life",
  },
  {//55
    question: "Who was the first to invent gunpowder",
    answer: "Chinese",
    hint: "The alchemists of 7th century. China created the gunpowder, ask Master Jiu Chong if you don't believe it",
  },
  {//56
    question: "Which of the following is not a Battle Royale mode",
    answer: "Dead Ringer",
    hint: "Dead Ringer is one of the games in daily rotation",
  },
  {//57
    question: "What is Joanna's best sport",
    answer: "Gymnastics",
    hint: "Before she retired due to injury, Joanna was a world-class gymnast",
  },
  {//58
    question: "What is the membership limit for a new Clan",
    answer: "30",
    hint: "A start-up Clan can have up to 30 members, expandable by leveling up",
  },
  {//59
    question: "What does the ''Trio'' in Trio of Enders stand for",
    answer: "The mecha has three different types of weapon",
    hint: "If the answer was B, the League office would have a game balance problem on hand! (Of course it's not a copyright issue, absolutely not!)",
  },
  {//60
    question: "Which of the following mechas use live-ammo weapons",
    answer: "Trio of Enders",
    hint: "Do not scoff at pragmatism",
  },
  {//61
    question: "Which famous family is Iori from",
    answer: "Shimizu",
    hint: "The Shimizus, with a long history, have had always run the most famous family business in Mecha City",
  },
  {//62
    question: "Which mecha belongs to Joanna",
    answer: "Andromeda",
    hint: "Andromeda and Joanna make a perfect duo, and don't you forget that",
  },
  {//63
    question: "Who is Rom's old war buddy",
    answer: "Vita",
    hint: "Rom and I were in the Singularity War together. He was much more a soldier back then"
  },
  {//64
    question: "What is the wrong way to deal with a teammate who is taking a dive",
    answer: "Scold the player",
    hint: "So you'll know what to do next time a teammate takes a dive"
  },
  {//65
    question: "How can you find new teammates",
    answer: "Recruit in Team Lobby",
    hint: "Friendship is paramount in Mecha City. Seeking teammates in the Team Lobby is the quickest way to form a team"
  },
  {//66
    question: "Which of the following mechas has the least DMG multiplier against crits",
    answer: "Firefox",
    hint: "Ning would never neglect to fortify the defense on an obvious target that is the Firefox's head"
  },
  {//67
    question: "Which of the following mechas has melee attack",
    answer: "Arthur",
    hint: "Arthur's giant sword has been intimidating foes since the Singularity War"
  }
];