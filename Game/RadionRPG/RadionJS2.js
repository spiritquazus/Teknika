//==============objects==============//





//locations storage//
const locations = [
    {
        name: "introduction",
        "button texts": ["Introduction", "Start your adventure", "N/A", "N/A"],
        "button functions": [launchIntro, goRoad, nothingHappens, nothingHappens],
        text: "<br>.<br>Would you like a quick introduction to the game before proceeding? (Recommended for new players)",    
    },
    {
        name: "startofintro",
        "button texts": ["Introduction", "Start your adventure", "N/A", "N/A"],
        "button functions": [launchIntro, goRoad, nothingHappens, nothingHappens],
        text: "<br>.<br>Your name is Strelok. You are a part of a group of treasure hunters called the \"Stalkers\", seeking rare artifacts with supernatural properties within the Chernobyl Exclusion Zone.",
        imageUrl: "gallery/strelok.jpg",
        soundUrl: "sounds/greeting2.ogg",
    },
    {
        name: "road to Chernobyl",
        "button texts": ["South (Cordon)", "West (Camp)", "East (Forest)", " North (CNPP)",],
        "button functions": [goCordon, goCamp, goForest, goCNPP,],
        text: "<br>.<br>You stand at a crossroad. The path in front of you will lead closer to CNPP, the site of the Chernobyl accident.<br>.<br>You see lights coming from both the western and eastern ends of the roads.",
        imageUrl: "gallery/crossroad.png",
        soundUrl: "sounds/amb_crickets.wav",
    },

    {
        name: "Cordon",
        "button texts": ["Talk (Sidorovich)", "Trade (Nimble)", "Fight (Slime)", "Crossroad",],
        "button functions": [sidoConvo, nimbleConvo, goFightSlime, goRoad,],
        text: "<br>.<br>You are in Cordon, a small abandoned village now turned into a camp for rookie Stalkers seeking fortune in this desolate place.",
        imageUrl: "gallery/cordon.png",
        soundUrl: "sounds/guitar_6.ogg",
    },
    {
        name: "Camp",
        "button texts": ["Talk (Kiril)", "Trade (Skinflint)", "Fight (Dire wolves)", "Crossroad",],
        "button functions": [kirilConvo, skinflintConvo, goFightDirewolf, goRoad,],
        text: "<br>.<br>You arrive at the mercenary camp. People are not too friendly here but perhaps you could engage in some trade.",
        imageUrl: "gallery/merc.png",
        soundUrl: "sounds/greeting3.ogg",
    },
    {
        name: "Forest",
        "button texts": ["Fight (Dragon)", "Crossroad", "N/A", "N/A",],
        "button functions": [goFightDragon, goRoad, nothingHappens, nothingHappens,],
        text: "<br>.<br>You emerge in a grove in the middle of the deadly Red Forest. You can hear the howls of mutated monsters.",
        imageUrl: "gallery/redforest.png",
        soundUrl: "sounds/night_forest_amb.wav",
    },
    {
        name: "CNPP",
        "button texts": ["Fight (Final Boss)", "Crossroad", "N/A", "N/A",],
        "button functions": [goFightBoss, goRoad, nothingHappens, nothingHappens,],
        text: "<br>.<br>You close in to the chernobyl nuclear power plant. The site of accident that caused the apparition of the Zone of Alienation. Dangerous creatures roam the area.",
        imageUrl: "gallery/cnpp.png",
        soundUrl: "sounds/windcave.wav",
    },
]

//NPCs storage//

//Sidorovich
const NPC = [
    {
        name: "Sidorovich",
        "button texts": ["Talk (Quest)", "Buy Ammo", "Heal", "Leave",],
        "button functions": [sidoQuestOne, sidoAmmo, sidoHeal, goCordon,],
        text: "<br>.<br>You meet with Sidorovich, the greedy bastard in charge of trading at the Cordon camp. <br>\"Hey Strelok! Off to hunt? Let me know if you need supplies.\"",
        imageUrl: "gallery/sido.png",
        soundUrl: "sounds/sido_greet.ogg",
    },
    {
        name: "Sidorovich Quest Start",
        "button texts": ["Accept", "\"Maybe later.\"", "N/A", "N/A",],
        "button functions": [sidoQuest, sidoConvo, nothingHappens, nothingHappens,],
        text: "<br>.<br>The old goat smirks. <br>\"Ah, I knew you would be interested. There's some mercenary guys holding the perimeter at a camp north of here. Amongst them you might find a certain bloke called Sgt. Kovachev. Deliver him this package and tell him it's from Sidorovich. That's all you need to do.\"",
        imageUrl: "gallery/sidopackage.png",
        soundUrl: "sounds/sido_quest.ogg",
    },
    {
        name: "Sidorovich ammo",
        "button texts": ["Buy (-20 EXP)", "Cancel", "N/A", "N/A",],
        "button functions": [buyingAmmo, sidoConvo, nothingHappens, nothingHappens,],
        text: "<br>.<br>\"Need some bullets for your peashooter?\"<br>You can buy 5 ammo for 20 experience. Life isn't cheap in the Zone.",
        imageUrl: "gallery/sidoammo.png",
        soundUrl: "sounds/sido_trade.ogg",
    },
    {
        name: "Sidorovich health",
        "button texts": ["Buy (-10 EXP)", "Cancel", "N/A", "N/A",],
        "button functions": [buyingHealth, sidoConvo, nothingHappens, nothingHappens,],
        text: "<br>.<br>\"Need to get patched up? I can give you a medkit but you'll have to cough up the dough first.\"<br>You can get 10 health back for 10 experience.",
        imageUrl: "gallery/sidomedkit.png",
        soundUrl: "sounds/sido_trade.ogg",
    },
]

//Kiril
const NPC2 = [
    {
        name: "Sgt. Kovachev",
        "button texts": ["Talk (Quest)", "Buy Stimpak", "Artifact", "Leave",],
        "button functions": [kirilQuestOne, kirilStimpak, kirilSymbiont, goCamp,],
        text: "<br>.<br>You enter the makeshift office of the mercenary.<br>\"Good day Strelok. You may not know me but I know who you are, Stalker. I am Sgt. Kovachev but you can refer to me as Kiril.\"",
        imageUrl: "gallery/kiril.png",
        soundUrl: "sounds/accept_2.ogg",
    },
    {
        name: "Kiril Wolves",
        "button texts": ["Accept", "\"Sounds easy.\"", "Refuse", "N/A",],
        "button functions": [goCamp, nothingHappens, kirilConvo, nothingHappens,],
        text: "<br>.<br>Kiril stares at the window for a few seconds before turning back his attention to you.<br>\"We're having some issues with the wolves outside of the camp perimeter. Mutant wolves. They're not difficult for my boys to take care of when on patrol, but the real annoying part is when they assault lone, weak supply delivery boys like you or when someone goes to take a shit at night. Sneaky bastards... Take care of them and I'll give you something good as a reward.\"",
        imageUrl: "gallery/sidopackage.png",
    },
    {
        name: "Kiril Stimpak",
        "button texts": ["Buy (-50 EXP)", "Cancel", "N/A", "N/A",],
        "button functions": [buyingStimpak, kirilConvo, nothingHappens, nothingHappens,],
        text: "<br>.<br>\"Yes, we do have some surplus of stimpaks to spare. But obviously they don't come cheap. I hope you have something of value to trade for them.\"<br>You can buy a stimpak for 50 experience. These can be used during combat to restore 25 health.",
        imageUrl: "gallery/mercstimpak.png",
    },
]

//monsters//

const monsters = [
    {
        name: "Slime",
        level: 1,
        health: 25,
        damageMin: 6,
        damageMax: 20,
        mana: 0,
        skill: ["none",],
        loot: ["table1", "table2",],
        text: "<br>.<br> You come across a disgusting slime! <br>.<br>Prepare for combat.",
        portrait: "gallery/slime.png(PLACEHOLDER)",
        "button texts": ["Melee", "Shoot", "Defend", "Radion"],
        "button functions": [Melee, Shoot, nothingHappens, nothingHappens],
        imageUrl: "gallery/mercstimpak.png",
    },
    {
        name: "dire wolf",
        level: 10,
        health: 100,
    },
    {
        name: "mutant dragon",
        level: 25,
        health: 235,
        //index 2
    },
    {
        name: "chernobyl beast",
        level: 40,
        health: 490,
        //index 3
    },
]

//Items Storage//

const itemObject = [
    {
        name: "Package",
        itemIconID: "packageIcon" ,
        imageUrl: "gallery/items/package.png",
        itemFullID: "packageID",
        type: "questItem",
        itemIndex: "0",
    },
    {
        name: "Stimpak",
        itemIconID: "stimpakIcon" ,
        imageUrl: "gallery/items/stimpak.png",
        itemFullID: "stimpakID",
        type: "consumable",
        itemIndex: "1",
    },
    {
        name: "Medusa",
        itemIconID: "medusaIcon" ,
        imageUrl: "gallery/items/medusa.png",
        itemFullID: "medusaID",
        type: "artifact",
        itemIndex: "2",
    },
    {
        name: "Crystal",
        itemIconID: "crystalIcon" ,
        imageUrl: "gallery/items/crystal.png",
        itemFullID: "crystalID",
        itemIndex: "3",
    },
    {
        name: "Stimpak",
        itemIconID: "stimpakIcon" ,
        imageUrl: "gallery/items/stimpak.png",
        itemFullID: "stimpakID",
        itemIndex: "4",
    },
    {
        name: "Stimpak",
        itemIconID: "stimpakIcon" ,
        imageUrl: "gallery/items/stimpak.png",
        itemFullID: "stimpakID",
        itemIndex: "5",
    },
]

//weapons MELEE//

const meleeObject = [
    {
        name: "Empty",
        itemIconID: "empty1Icon",
        imageUrl: "gallery/items/empty.png",
        itemFullID: "emptyID",
        type: "0melee",
        damageMax: "5",
        damageMin: "3",
        hitRate: "70",
        special: [12, 0, 16],
        
    },
    ////special: "1st crit rate, 2nd is bleed rate, 3rd is stun rate"
    //meleeObject[0]["special"][0];
    //why as array instead of stat lines like the rest? cuz i wann dynamically add other effects depending on the weaponb heehehe
    {
        name: "Old Knife",
        itemIconID: "knife1Icon",
        imageUrl: "gallery/items/knife1.png",
        itemFullID: "knife1ID",
        type: "1melee",
        damageMax: "12",
        damageMin: "9",
        hitRate: "68",
        special: [7, 18, 9],
        soundUrl: "sounds/drawKnife.ogg",
    },
    { 
        name: "Hunting Knife",
        itemIconID: "knife2Icon",
        imageUrl: "gallery/items/knife2.png",
        itemFullID: "knife2ID",
        itemIndex: "1",
    },
]


//weapons RANGED//


//Quests//
const Quest = []



//Screengoing stuff//






//items//

const guns = [
    {name: "Rusty Pistol", power: 5},
    {name: "Colt", power: 35},
    {name: "Fangarm Rifle", power: 60},
]

const armors = [
    {
    name: "Strelok's Coat",
    itemIconID: "armor1Icon" ,
    imageUrl: "gallery/items/armor1.png",
    itemFullID: "armor1ID",
    AC: 2,
    index: 0,
    special: [],
    }

]



const spells = [
    {name: "fireball", power: 25, manaCost: 15},
    {name: "thunderbolt", power: 70, manaCost: 50},
    {name: "black hole", power: 250, manaCost: 100},
]



// initializing buttons
button1.onclick = launchIntro; 
button2.onclick = goRoad;
button3.onclick = nothingHappens;
button4.onclick = nothingHappens;
screenActive.style.display = "none";
healthTextButton.onclick = tutorialHealth;
manaTextButton.onclick = tutorialMana;
ammoTextButton.onclick = tutorialAmmo;
xpTextButton.onclick = tutorialXP;






// locations (on click what happens? how do buttons change?)

function launchIntro() {
    // Function logic goes here
    update(locations[1]);
    console.log("intro button clicked.");
}

function goRoad() {
    update(locations[2]);
    console.log("going to the road");
}

function goCordon() {
    update(locations[3]);
    console.log("player tried to click Cordon");
}

function goCamp() {
    update(locations[4]);
    console.log("player tried to click Camp");
}

function goForest() {
    update(locations[5]);
    console.log("player tried to click Forest");
}
function goCNPP() {
    update(locations[6]);
    console.log("player tried to click CNPP");
}

function nothingHappens() {
    update(locations[7]);
    console.log("player tried to click N/A");
}

//conversations

function sidoConvo() {
// Function meeting Sidorovich
       update(NPC[0]);
       console.log("sido talk"); 
       if(packageQuest ===0) {
        text.innerHTML += "<br>\"By the way, you are going to see the mercenaries, I may have a <span style='color: blue'>quest</span> for you.\"";
       }
}

function sidoQuestOne() {
// initiating quest for package (NPC array 1) OR get told its taken.
    if(packageQuest === 0) {
        update(NPC[1]);
        } else if(packageQuest === 1) {
            text.innerHTML += "<br>.<br>\"I already gave you the package. Move your ass!\"";
            scrollToBot();
            sidoWTF.play();
            console.log("sido already gave package");    
        }
    console.log("sido talk about package"); 
}

function sidoQuest() {
// Accepting the package
    update(NPC[0]);
    packageQuest ++;
    text.innerHTML += "<br>.<br>\"Here it is. Be careful, it's fragile. And don't make the mercs wait. I heard the Sergeant has quite the temper.\"";
    scrollToBot();
    questBip.play();
    itemCreate(itemObject[0]);
    console.log("got quest! sido package");

    console.log("sido talkquest accepted. back to main convo (like sido talk"); 
}



function sidoAmmo() {
// talking to sido about ammo. given choice to purchase or not
    update(NPC[2]);
    console.log("sido buy ammo"); 
}

function buyingAmmo() {
// actually purchasing ammo    
    if(xp>=20) {
        xp -= 20;
        ammo += 5;
        ammoText.innerText = ammo;
        xpText.innerText = xp;
        console.log("Bought ammo. -20xp +5ammo");
        text.innerHTML += "<br>.<br>You purchase some ammunition.";
        questBip.play();
    } else {
        console.log("Player is broke, purchase of ammo cancelled");
        text.innerHTML += "<br>.<br>\"You don't have enough favors for that, Strelok.\"";
        scrollToBot();
    }
}

function sidoHeal() {
    // Function logic goes here
    update(NPC[3]);
    console.log("sido buy heal"); 
}

function buyingHealth() {
    // actually buying health    
        if(xp>=10 && health<=maxHealth-10) {
            xp -= 10;
            health += 10;
            healthText.innerText = ammo;
            xpText.innerText = xp;
            console.log("+10hp -20xp");
            text.innerHTML += "<br>.<br>You healed yourself for 10 health points.";
            questBip.play();
        } else if (xp>=10 && health>=maxHealth-10) {
            console.log("Player already full HP");
            text.innerHTML += "<br>.<br>\"You already look healthy! A medkit won't do much.\"<br>You need to be wounded (more than 10 health missing) to properly use a medkit.";
            scrollToBot();      
        } else {
            console.log("Player is broke, purchase of HP cancelled");
            text.innerHTML += "<br>.<br>\"You don't have enough favors for that, Strelok.\"";
            scrollToBot();
    }
}

function nimbleConvo() {
    // Function logic goes here
    console.log("nimble talk"); 
}


function skinflintConvo() {
    // Function logic goes here
    console.log("skinflint talk"); 
}

function kirilConvo() {
    update(NPC2[0]);
    console.log("kiril talk"); 
    if(packageQuest ===1) {
     text.innerHTML += "<br>\"I believe you have something for me? From that fat goat Sidorovich.\"";
    }
}

function kirilQuestOne() {
// giving package (or its missing)
if(packageQuest === 1) {
    packageQuest ++;
    text.innerHTML += "<br>.<br>\"I see you have the package. Good.\"<br>The mercenary carefully inspects the exterior of the box, most likely to check if it had been tampered with. He quickly puts it away and looks back at you.<br>\"Now if you are tired of being an errand boy, I may some interesting tasks to give you. Talk with me again if you'd like to proceed.\"";
    packageID.remove();
    questBip.play();
    scrollToBot();
    console.log("player giving package to Kiril."); 
    } else if(packageQuest === 0) {
        text.innerHTML += "<br>.<br>\"Not right now Strelok. Go bother someone else.\"";
        scrollToBot();
        console.log("player didnt take package from sido...");    
    } else if(packageQuest === 2) { 
        update(NPC2[1]);
    }
}

function kirilStimpak() {
    update(NPC2[2]);
    console.log("kiril buy stim??"); 
}

function buyingStimpak() {   
    console.log("Player accepted to buy stim. money??"); 
    if (xp >= 50) {
        xp -= 50
        xpText = xp
        itemCreate(itemObject[1]);
        text.innerHTML += "<br>.<br>You purchased a stimpak.";   
    } else if (xp >= 50 && stimpakID) {
        text.innerHTML += "<br>.<br>You already have a stimpak! You can only carry 1 stimpak on you.";  
    } else {
        text.innerHTML += "<br>.<br>The sergeant stares at you with a stern face.<br>\"This isn't a fucking charity. Come back when you can afford it.\"";
        scrollToBot();
    }
//attempting to purchase stim.  
}

// remove this shit afterwards, placeholder/
let Symbiont = 0
//
function kirilSymbiont() {
    if(Symbiont ===1){
        
    } else {
        text.innerHTML += "<br>.<br>\"I have an artefact for trade. A rare piece at that. But I don't have any immediate uses except maybe \"donating\" it to the egghead scientists at Yantar. It is yours if you can bring me 3 \"Crystal\" Artifacts.\"<br>[NOTE] The \"Crystal\" Artifact can commonly be found in the Red Forest.";
        scrollToBot();
    }
    
}


//================Functions for fight

// invokes update of "location" and display things according to object arrays.
// monsters is the object, which holds an array of properties.
//the [0] refers to the object array index. 
// the [0].STAT is for the property type within that object array.
// call a specific stat by object[INDEX NUMBER].STAT
// This whole shit wracked my brain for a few days before i got it.
//this gofight function is called up when the function ATTACHED to a button is called. This is a literal matryoshka of functions and arrays.

//button clicked >> function of LOCATION() >> LOCATION function calls upon gofight
//the goFight function has to have its array defined in the LOCATION function
//then the matching monster in the array will be SPAWNED! VOILA!!!!

function goFight() {
    update(monsters[fighting])
    monsterHealth = monsters[fighting].health;
    monsterLevel = monsters[fighting].level;
    monsterAttackMin = monsters[fighting].damageMin;
    monsterAttackMax = monsters[fighting].damageMax;
    monsterSkill = monsters[fighting].skill; 
    monsterName.innerText = monsters[fighting].name;
    monsterSkillsText.innerText += monsterSkill; 
    monsterAttackTextMin.innerText += monsterAttackMin; 
    monsterAttackTextMax.innerText += monsterAttackMax; 
    monsterHealthText.innerText += monsterHealth;
    monsterLevelText.innerText += monsterLevel;
    //add portrait info update. 
        //add beast sounds too.
    console.log("fight slime button clicked. Updating?");
}

function goFightSlime() {
    fighting = 0;
    goFight();
  }

function goFightDirewolf() {
    // Function logic goes here
    console.log("fight wolf");
}

function goFightDragon() {
    // Function logic goes here
    console.log("fight dragon");
}

function goFightBoss() {
    // Function logic goes here
    console.log("fight boss");
}

//==============Buttons in fight

// TO DO LIST~~~~~~~~~~~~~~~~~~~~~~//
//need to update according to equipment object  ex (melee[0].damageMax)
//add to-hit chance calc based on weapon  ex (melee[0].hitChance)
//add bullet penetration based on weapon ex (gun[0].armorPenetration)
//also play sound.


let critdmgtemp = 1;
let dmgtemp = 1;
let pcfumbletemp = 1; //!!!!!!!!!! these 3 things could honestly be combined. since theres only 1 defined role each attempt.


function pcMeleeDamageRoll() {   
    let damage = Math.floor(meleeAttackAttempt(meleeObject[equippedMelee].damageMax, meleeObject[equippedMelee].damageMin, monsters[fighting].level, meleeAdditiveCalc));
    console.log("meleeObject[equippedMelee].damageMax" + meleeObject[equippedMelee].damageMax)
    console.log("meleeObject[equippedMelee].damageMin" + meleeObject[equippedMelee].damageMin)
    console.log("monster level" + monsters[fighting].level)
    console.log("meleeAdditiveCalc" + meleeAdditiveCalc)
    return damage;
}

let meleecritdmg = 1.3; // Move tthis shit elsewhere too.
let hitRateBonusMelee = 0; //!!!!!!!!! Move this shit elsewhere.


//melee attack with monster turn
function Melee() {
    Hitchance(meleeObject[equippedMelee].hitRate, hitRateBonusMelee);
    console.log("meleeObject[equippedMelee].hitRate" + meleeObject[equippedMelee].hitRate)
    console.log("hitRateBonusMelee" + hitRateBonusMelee);
    console.log ("final hitchance" + hitroll);
    //diceroll to calculate hit or graze.
    if (hitroll > 0) {
        meleeSpecials()
        if (crit>0){ 
            critdmgtemp = Math.floor(pcMeleeDamageRoll() * meleecritdmg);
            critdmgtemp = critdmgtemp <= 0 ? 1 : critdmgtemp;
            monsterHealth -= critdmgtemp;
            monsterHealthText.innerText = monsterHealth;
            text.innerHTML += "<br>Critical Strike! <br>You deal " + critdmgtemp + " damage.";
            console.log("Critical Strike!");   
            
        } else { 
            dmgtemp = Math.floor(pcMeleeDamageRoll());
            dmgtemp = dmgtemp <= 0 ? 1 : dmgtemp;
            monsterHealth -= dmgtemp;
            monsterHealthText.innerText = monsterHealth;
            text.innerHTML += "<br>You deal " + dmgtemp + " damage.";
            console.log("played successfully made the monster eat shit!");

        }
        //add line for more stuff from melee specials

    } else {
        pcfumbletemp = Math.floor(pcMeleeDamageRoll() * 0.3);
        pcfumbletemp = pcfumbletemp <= 0 ? 1 : pcfumbletemp;
        monsterHealth -= pcfumbletemp;
        monsterHealthText.innerText = monsterHealth;
        text.innerHTML += "<br>You missed the swing and only grazed the monster! Your damage was greatly reduced... <br>You deal " + pcfumbletemp + " damage.";
        console.log("player rolled a miss haha");
    }
   
    if (monsterHealth > 0) {
        monsterTurn();
        console.log("the monster attacks. its his turn baybee")
        //monster attacking
        healthText.innerText = health;
    }

    if (health <= 0) {
        gameOver();
        turnTicker=0
      } else {
        nextTurn()
      }
}
// END 




let mobhitchance = 85; //THESE ALL NEED TO BE FIXED. CHECK PCFUMBLETEMP
let mobfumbletemp = 0;
let mobdmgtemp;
function monsterTurn() {
    mobhitchance = ((Math.floor(Math.random()) * 100 ));
    //maybe change the 85 hitchance below to a dynamic value?

    //basic attack. but should sandwich it in BOOLEAN and conditionals when i add skills to mobs!
        if (mobhitchance > 15) {
        mobdmgtemp = Math.floor(monsterDamageRoll());
        mobdmgtemp = mobdmgtemp <= 0 ? 1 : mobdmgtemp;
        health -= mobdmgtemp;
        health.innerText = health;
        console.log(" took some damage there!");
        text.innerText += "<br>The " + monsters[fighting].name + " attacks! <br>You take " + mobdmgtemp + " damage.";
    } else {
        mobfumbletemp = Math.floor(monsterDamageRoll()*0.75);
        mobfumbletemp = mobfumbletemp <= 0 ? 1 : mobfumbletemp;
        health -= mobfumbletemp;
        health.innerText = health;
        console.log("mob missed! Graze");
        text.innerHTML += "<br>The " + monsters[fighting].name + " fumbled and grazed you. <br>You take " + mobfumbletemp + " damage.";
    }
}

function monsterDamageRoll() {
    return Math.floor(getMonsterAttackValue(monsters[fighting].damageMax, monsters[fighting].damageMin, armor));
}

function PCMeleeDamageRoll() {
    return Math.floor(meleeAttackAttempt(meleeObject[equippedMelee].damageMax, meleeObject[equippedMelee].damageMin, monsters[fighting].level, meleeAdditiveCalc));
}

//does shoot function exist?
function Shoot() {
//add shooty calc here.
//
    if (monsterHealth <= 0) {
        monsterTurn();
        healthText.innerText = health;
    }
    
    if (health <= 0) {
        gameOver();
        turnTicker=0
      } else {
        nextTurn()
      }
}


//player death
    function gameOver() {
        console.log("player got absolutely DESTROYED git gud")
        text.innerHTML += "<br>.<br><br>.<br><br>.<br>You have died! The Zone claims another life..."
        scrollToBot();
        button1.innerText = "Damn!"
        button2.innerText = "Damn!"
        button3.innerText = "Damn!"
        button4.innerText = "Damn!"
        button1.onclick = nothingHappens
        button2.onclick = nothingHappens
        button3.onclick = nothingHappens
        button4.onclick = nothingHappens
    }

//monster turn CALC
function getMonsterAttackValue(atkMax, atkMin, PCarmor) {
    let hitmob = (Math.floor(Math.random() * ((atkMax-atkMin)) + atkMin)) - (Math.floor(Math.random() * ((1 - 0.5) + 0.5) * PCarmor)); //basic atk formula. range of attack of monster - random armor multiplier down to half
    console.log("Player ate dmg: ", hitmob);
    return hitmob >= 0 ? hitmob : 1; //stop the armor-absorbed hits from "healing" lmao. les degats ne sont pas negatifs.
} 

//melee attack CALC 
function meleeAttackAttempt(meleeatkMax, meleeatkMin, moblvl, meleeadditives) {
    let hitmelee = (Math.floor(Math.random() * (meleeatkMax-meleeatkMin) + meleeatkMin + meleeadditives)) - (Math.floor(Math.random() * (0.4 - 0.2) + 0.2) * moblvl); //idem but monster lvl
    console.log("Player trying to slash the miscreant! ", hitmelee, " dmg") ;
    return hitmelee >= 0 ? hitmelee : 1; //boom cest le choc
}

//miss attack CALC, binary
//here can call upon object type (either firearm or melee) to set the proper hitchance calc!
let hitroll = 0;
function Hitchance(hitvalue, hitvalbonus) { 
    console.log("what is hitvalue at " + hitvalue);
    hitroll = -1*((Math.floor(Math.random() * 100)) - hitvalue - hitvalbonus);
    console.log("Hit yes or no", hitroll) 
}


//shooty attack CALC
//should have less RESISTANCE than melee atk. also have the res calc include var dependent on the ARMOR PIERCING properties of the bullet?


//lvl 60 mob has on average 7~10 dmg res. upwards to 20 and as low as 1
//lvl 120 upward to 40 LINEAR TO LEVEL
// each 1 of rangedpene will be like removing a level from mob. so a pene of 20 on a lvl 2 mob would be a lot of bonus damage :)
function shootingAttack(rangedatkMax, rangedatkMin, moblvl, rangedadditives, rangedpenetration) {
    const rangedabsorb = (Math.floor(Math.random() * ((0.35 - 0.17) + 0.17) * (moblvl- rangedpenetration )) )*-1;
    const hitshooty = (Math.floor(Math.random() * ((rangedatkMax - rangedatkMin)) + rangedatkMin + rangedadditives)) + rangedabsorb; //idem but monster lvl
    if (rangedabsorb < 0) {
        console.log("there was big armor penetration") ;
        text.innerHTML += "<br>Your attack literally and entirely pierced through your foe! You dealt " + rangedabsorb + " additional damage.";
    } else if (rangedabsorb === 0) {
        console.log("0 absorb nice") ;
        text.innerHTML += "<br>Your attack negated the foe's resistance.";
    }
    //i mustve been fucking drunk when i designed this calculation what is going on with the parenthesis
    if (hitshooty < 0) {
        text.innerHTML += "<br> Oh dear, your attack didn't do much!";
        return hitshooty > 0 ? hitshooty : 1; //boom cest le choc
    }

}




//meleeObject[0]["special"][0] crit
//meleeObject[0]["special"][1] bleed
//meleeObject[0]["special"][2] stun
let equippedart = 0;
//equippedart - linear value that increase the MIN atk value. high enough value would result in guaranteed total dmg increase
let equippedaddons = 0;
//equippedaddons for mods and stuff? idk yet.
let meleeAdditiveCalc = equippedaddons + equippedart;
//let meleeAdditiveCalc = equippedart + equippedaddons;

let equippedMelee;
let crit;
let bleed;
let stun;
// more to come ???

function meleeSpecials(special1, special2, special3) {
    //crit
    crit = (Math.floor(Math.random() * (100 - special1) + special1 )) - (Math.floor(Math.random() * (100 - 0)))
    //bleed
    bleed = (Math.floor(Math.random() * (100 - special2) + special2 )) - (Math.floor(Math.random() * (100 - 0)))
    //stun
    stun = (Math.floor(Math.random() * (100 - special3) + special3 )) - (Math.floor(Math.random() * (100 - 0)))
}

//turn ticker. move this crap somewhere else.
let turnTicker=0
function nextTurn() {
    turnTicker ++
    console.log("this turn ", turnTicker)
    text.innerHTML += "<br>.<br> Turn: " + turnTicker
    scrollToBot();
}




//-----GEAR EQUIPPING---------//






// stat buttons

function tutorialHealth() {
    console.log("clicked on health");
    text.innerHTML += "<br> <span style='color: rgb(189, 33, 29)'>[HEALTH]</span> Your current health. you lose if it reaches 0. You can use stimpaks to restore some health or rest at camps.";
    scrollToBot();
}

function tutorialMana() {
    console.log("clicked on mana");
    text.innerHTML += "<br> <span style='color: rgb(57, 138, 222)'>[RADION]</span> A special form of energy only present in the Zone surrounding Chernobyl. Used to cast special abilities such as fireballs! Recharge radion by using artefacts.";
    scrollToBot();
}

function tutorialAmmo() {
    console.log("clicked on bullets");
    text.innerHTML += "<br> <span style='color: rgb(228, 172, 90)'>[AMMO]</span> Your ammunition used to shoot your firearm. Can be purchased in bulk from traders.";
    scrollToBot();
}

function tutorialXP() {
    console.log("clicked on XP");
    text.innerHTML += "<br> <span style='color: rgb(68, 189, 29)'>[EXPERIENCE]</span> Your accumulated experience. Every 100th will grant you additional maximum health and radion. Can also be used as favors to trade for items.";
    scrollToBot();
}




//radio sound creator//
//test ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//Music Gallery for Radio

let currentlyPlaying = 0; 
buttonBack.onclick = function() { 
    currentlyPlaying = (currentlyPlaying - 1 + RadioGallery.length)%RadioGallery.length;
    forcePlayRadio(RadioGallery[currentlyPlaying].radioUrl);
};
buttonPausePlay.onclick = function() { playRadio(RadioGallery[currentlyPlaying].radioUrl) };
buttonForward.onclick = function() { 
    currentlyPlaying = (currentlyPlaying + 1 + RadioGallery.length)%RadioGallery.length;
    forcePlayRadio(RadioGallery[currentlyPlaying].radioUrl);
};


let muzik;
function playRadio(radioUrl){
    if (muzik && !muzik.paused) {
        muzik.pause();
        whatsPlayingRadio.innerHTML = "<span style='color: rgb(228, 172, 90)'>Paused</span>"
        console.log("music paused.");
    } else if (radioUrl) {
        muzik = new Audio(radioUrl);
        muzik.play();
        muzik.volume = 0.4;
        whatsPlayingRadio.innerText = (RadioGallery[currentlyPlaying].radioName);
        console.log("playing music.", radioUrl);
    } else {
        console.error("No radio URL provided.");
    }
}

function forcePlayRadio(radioUrl){

    if (radioUrl) {
        muzik.pause();
        muzik.currentTime = 0;   
        muzik = new Audio(radioUrl);
        muzik.play();
        muzik.volume = 0.4;
        whatsPlayingRadio.innerText = (RadioGallery[currentlyPlaying].radioName);
        console.log("playing music.", radioUrl);
    } else {
        console.error("No radio URL provided.");
    }
}

//test ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
itemCreate(meleeObject[1]);
equipMelee(meleeObject[0]);