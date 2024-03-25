// coloring stuff

<span style='color: rgb(68, 189, 29)'></span>

//=================TODOLIST================//

//need to add a quest log and update var. maybe create new one?

// Screen Group fix by flex so only 2 items max per row. + make the 2 lines play nicely on mobile //

// chamber hud fix (the button panel)




// combat system 

// Add some more music, start adding items
    //more icons!
    //sound to buttons?
    
// map system??





//======INVENTORY SYSTEMMMMMM
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

// Add a CSS class to the <li> element to style it
newItem.classList.add('itemContainer');

// Append the new <li> element to the <ul>
bagList.appendChild(newItem);

}





const NPC = [
    {
        name: "Sidorovich",
        "button texts": ["Talk (Quest)", "Buy Ammo", "Heal", "Leave",],
        "button functions": [sidoQuestOne, sidoAmmo, sidoHeal, goCordon,],
        text: "<br>.<br>You meet with Sidorovich, the greedy bastard in charge of trading at the Cordon camp. <br>\"Hey Strelok! Off to hunt? Let me know if you need supplies.\" <br>\"By the way, you are going to see the mercenaries, I may have a <span style='color: blue'>quest</span> for you.\"",
        imageUrl: "gallery/sido.png",
        soundUrl: "sounds/sido_greet.ogg",
    },




    function buyingStimpak() {   
        if (xp >= 50) {
            xp -= 50
            xpText = xp
            itemCreate(itemObject[1]);
            text.innerHTML += "<br>.<br>You purchased a stimpak.";   
        } else if (xp >= 50 && stimpakID) {
            text.innerHTML += "<br>.<br>You already have a stimpak! You can only carry 1 stimpak on you.";  
        } else {
            text.innerHTML += "<br>.<br>The sergeant gazes at you with a stern face.<br>\"This isn't a fucking charity. Come back when you can afford it.\"";
        }
    //attempting to purchase stim.  
    }
    












let muzik
function playRadio(RadioGallery) {
    console.log("attempting to play the radio music", RadioGallery);
    if (muzik) {
        muzik.pause();
    } 

    muzik = new Audio(RadioGallery);
    muzik.play();
}

muzik.currentTime = 0;


function pauseRadio(soundUrl) {
    console.log("attempting to STOP the radio music", soundUrl);
    if (muzik) {
        muzik.pause();
    } 
}

function forwardRadio(soundUrl) {
    console.log("attempting to forward the radio music", soundUrl);
    if (muzik) {
        muzik.pause();
        muzik.currentTime = 0;
    } 
}

//test
forwardRadio(RadioGallery[++]);


//CSS STUFF
#bagAnimTop,
#bagAnimBot {
    position: relative;
    transition: transform 0.4s ease-in-out;
}

#bagAnimTop {
    top: 20vh;
    margin-top: -200vh;
}

#bagAnimBot {
    margin-top: -10vh;

    
}


#inventoryBlock:hover #bagAnimBot {
    transform: translateY(180px);
}
#inventoryBlock:hover #bagAnimTop {
    transform: translateY(-180px);
}


HTML STUFF


<nav id="sideScreen">
<nav class="PCstatus">
    <ul>
        <legend>Status</legend>
        <li><img class="statIcon" id="healthIcon"><button class="stat" id="healthText">Health</button> <span id="PChealth">100</span> <span>/</span> <span id="PCmaxHealth">100</span></li>
        <li><img class="statIcon" id="manaIcon"><button class="stat" id="manaText"> Radion</button> <span id="PCmana">50</span> <span>/</span> <span id="PCmaxMana">50</span></li>
        <li><img class="statIcon" id="ammoIcon"><button class="stat" id="ammoText"> Ammo</button> <span id="Ammo">5</span></li>
        <li><img class="statIcon" id="experienceIcon"><button class="stat" id="xpText"> Experience</button> <span id="experience">20</span></li>
    </ul>
</nav>
<nav class="PCstatus" id="inventoryBlock">
    <img id="bagAnimTop" src="gallery/carre2.png">
    <ul id="inventoryContainer">
        <legend>Bag</legend>
        <li><img class="statIcon" id="knifeIcon"><button class="item">Rusty Knife</button></li>
        <li><img class="statIcon" id="pistolT1Icon"><button class="item">Old Pistol</button></li>
        <div class="borderBottom"></div>
    </ul>
    <img id="bagAnimBot" src="gallery/carre.png">
</nav>

</nav>