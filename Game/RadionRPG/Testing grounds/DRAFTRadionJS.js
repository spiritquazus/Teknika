//==============Initializing==============//


//stats
let xp = 20;
let health = 100;
let maxHealth = 100;
let mana = 50;
let ammo = 5;
let currentWeapon = 0;
let armor = 10;

let fighting;
let monsterHealth;
let inventory = ["rustyKnife", "oldPistol"];
//quest zero states
let packageQuest = 0;
//quest audio
let questBip = new Audio("sounds/questupdate.ogg");
let sidoWTF = new Audio("sounds/sido_wtf.ogg");
let inventoryOpen = new Audio("soundsinv_detach_addon.ogg");
let addonSFX = new Audio("sounds/inv_detach_addon.ogg")


function scrollToBot() {
    logElement.scrollTop = logElement.scrollHeight;
}

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");
const xpText = document.querySelector("#experience");
const healthText = document.querySelector("#PChealth");
const maxHealthText = document.querySelector("#PCmaxHealth");
const manaText = document.querySelector("#PCmana");
const ammoText = document.querySelector("#Ammo");

const xpTextButton = document.querySelector("#xpText");
const healthTextButton = document.querySelector("#healthText");
const manaTextButton = document.querySelector("#manaText");
const ammoTextButton = document.querySelector("#ammoText");

const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const monsterLevelText = document.querySelector("#monsterLevel");
const monsterAttackTextMin = document.querySelector("#monsterAttackMin");
const monsterAttackTextMax = document.querySelector("#monsterAttackMax");
const monsterSkillsText = document.querySelector("#monsterSkills");
const monsterBattler = document.querySelector(".monsterBattlers")
const cinematics = document.querySelector("#screenActive")
const logElement = document.querySelector("#log")
//radio
const buttonBack = document.querySelector("#buttonBack");
const buttonPausePlay = document.querySelector("#buttonPausePlay");
const buttonForward = document.querySelector("#buttonForward");
const whatsPlayingRadio = document.querySelector("#whatsPlayingRadio");


//=========Updators===========


//location creator//
function update(location) {
    console.log("Updating location:", location);
    screenActive.style.display = "none";
    button1.innerText = location["button texts"][0];
    button2.innerText = location["button texts"][1];
    button3.innerText = location["button texts"][2];
    button4.innerText = location["button texts"][3];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    button4.onclick = location["button functions"][3];
    text.innerHTML += location.text;
    if (location.imageUrl) {
        updateImage(location.imageUrl);
    }
    if (location.soundUrl) {
        playSound(location.soundUrl);
    }
    scrollToBot();
}

//item creator//
function itemCreate(itemBase) {
    // Get the <ul> element where you want to append the new <li>
    let bagList = document.querySelector("#inventoryContainer");
    // Create a new <li> element
    let newItem = document.createElement('li');
    // Create a new <button> element
    let newButton = document.createElement('button');
    newButton.className = 'itemButtonElement'; // set class for HTML and such
    newButton.textContent = itemBase['name']; // Set the ITEM NAME to appear in the button   
    // Create a new <img> element
    let newImage = document.createElement('img');
    newImage.id = itemBase['itemIconID']; // set ID for the <img> element
    newImage.src = itemBase['imageUrl']; // Set the image source
    // Append the <button> and <img> elements to the <li> element
    newItem.appendChild(newImage);
    newItem.appendChild(newButton);
    newItem.classList.add('itemContainer'); 
    newItem.id = itemBase['itemFullID'] ; // set ID for the WHOLE item stuff. to move or delete later.
    itemBase['JSID'] = document.querySelector('itemFullID');
    // Append the new <li> element to the <ul>
    bagList.appendChild(newItem);  
}

//Equiper for Gear

  //Should use in conjunction to itemCreate. When gear is removed, it is CREATED and when equipped, it is REMOVED.
function equipGear(gearEquip) {
    //equipGear(LOCAL VAR)
//refer to the gear slot. here lets pretend its just 1 type. (first make it in HTML then link it with document.querySelector(#ID) )
let gearContainer = document.querySelector("#gearContainer");
//create a li as the GEAR Container - No need, the empty slots should already exist.
//create 2 things - Button + icon.
let newGearLi = document.createElement('li');

let newGearButton = document.createElement("button");
newGearButton.className = "gearButtonElement";
newGearButton.textContent = gearEquip["name"]; // change name according to the item base MELEE

let newGearImage = document.createElement("img");
newGearImage.id = gearEquip["gearIconID"]; // change name according to the item base MELEE
newGearImage.src = gearEquip["imageUrl"]; //idem

newGearLi.appendChild(newGearImage);
newGearLi.appendChild(newGearButton);
newGearLi.classList.add("gearSlotType");
newGearLi.id = gearEquip["gearFullID"];
gearEquip["gearJSID"] = document.querySelector("gearFullID");
gearContainer.appendChild(gearEquip);

//in button need to add the text + the class (button). the text content should be based on the gear array = LOCALVAR[name]
// icon is LOCALVAR[icon]
//set up the ID by LOCALVAR[itemID]
//to link them to the actual li, appendchild the image and button to li.

//
}
let meleeSlot = document.querySelector("#meleeSlot");
let newMeleeButton = document.querySelector(".meleeButtonElement");
let newMeleeImage = document.querySelector(".meleeImg");
newMeleeButton.onclick = takeOffMelee(); // does not exist yet


itemButtonElement.addEventListener("click", function() {
   if(this.id==="melee"){
    equipMelee(meleeObject[0]);
   }
  });



  





function equipMelee(meleeEquip) {
newMeleeButton.textContent = meleeEquip["name"]; // change name according to the item base MELEE
newMeleeButton.id = meleeEquip["type"]; // change name according to the item base MELEE
newMeleeImage.src = meleeEquip["imageUrl"]; //idem
meleeIndexor = meleeEquip["index"];
meleeSlot.id = meleeEquip["itemFullID"];
meleeEquip["meleeJSID"] = document.querySelector("itemFullID");
} //need to create the melee ITEM not the melee EQUIPMENT if u get what i mean




function takeOffGear() {
// remove gearEquip entirely from gearContainer 
//then re"spawn" the item in the inventory by triggering corresponding itemCreate(item[array])


}

//Combat System// redundant? use location instead?
//its redundant remove it. !!!!!!!!!!!!!!!!!!
function Battlestart(monsterType) {
    console.log("Updating location:", monsterType);
    screenActive.style.display = "none";
    button1.innerText = monsterType["button texts"][0];
    button2.innerText = monsterType["button texts"][1];
    button3.innerText = monsterType["button texts"][2];
    button4.innerText = monsterType["button texts"][3];
    button1.onclick = monsterType["button functions"][0];
    button2.onclick = monsterType["button functions"][1];
    button3.onclick = monsterType["button functions"][2];
    button4.onclick = monsterType["button functions"][3];

    //meleeObject["special"][0];
    //add new buttons??

    text.innerHTML += location.text;
    if (location.imageUrl) {
        updateImage(location.imageUrl);
    }
}
//combat-state


//image display function
function updateImage(imageUrl) {
    console.log("Updating image:", imageUrl);
    cinematics.innerHTML = ''; // Clear previous content
    cinematics.innerHTML += `<img src="${imageUrl}" alt="Image description">`;
    cinematics.style.display = "block"
}

//sound player function
let audio
function playSound(soundUrl) {
    console.log("attempting to play sound", soundUrl);
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    } 

    audio = new Audio(soundUrl);
    audio.play();
}

//============Radio Player Container============//

const RadioGallery = [
    {
        radioName: "Fallout 2 - Arroyo",
        radioUrl: "sounds/Fallout2_Arroyo.mp3"}, 
    {
        radioName: "Metro 2033 - Guitar Track",
        radioUrl: "sounds/MetroGuitar.mp3"},
    {
        radioName: "Bekrija - Bosanska Artiljerija",
        radioUrl: "sounds/BosnianArtillery.mp3"},
    {
        radioName: "Mikhail Ruderman - Tачанка",
        radioUrl: "sounds/Tachanka.mp3"},
    {
        radioName: "Се́ктор Га́за - Рождество́м",
        radioUrl: "sounds/SectorGaza.mp3"},       
    {
        radioName: "STALKER - Bandit Radio",
        radioUrl: "sounds/BanditRadio.mp3"},    
    {
        radioName: "Фики - Чупки в кръста",
        radioUrl: "sounds/Фики - Чупки в кръста.mp3"},
    {
        radioName: "??? - Одна калина",
        radioUrl: "sounds/Одна калина.mp3"},  
    {
        radioName: "Отава Ё - Сумецкая",
        radioUrl: "sounds/Отава Ё  - Сумецкая.mp3"},  
]




//====================Click stuff and nice FX :)===========//
let expandBag = document.querySelector("#bagOpener");
let beltUI = document.querySelector("#beltUI")
let inventoryBlock = document.querySelector("#inventoryBlock");
let bagOpenCheck = 0;
let logScreen = document.querySelector("#log")

expandBag.addEventListener("click", function() {
    if (bagOpenCheck === 0){  
        //Open that bitch//
        inventoryBlock.style.height = "40vh"; 
        inventoryBlock.style.overflowY = "scroll";
        beltUI.style.right = "15vh";
        bagOpenCheck = 1;
        expandBag.innerText = "Close Bag";
        if(window.innerWidth < 1080) {
            logScreen.style.marginTop = "34vh";
            console.log("RESIZED!")
        }
        
        addonSFX.play();
    } else if (bagOpenCheck === 1){
        //close it//
        inventoryBlock.style.height = "9vh";
        inventoryBlock.style.overflowY = "hidden";
        beltUI.style.right = "0vh";
        inventoryBlock.scrollTop = 0;
        bagOpenCheck = 0;
        expandBag.innerText = "Open Bag";
        logScreen.style.marginTop = "1vh";
    }
});
