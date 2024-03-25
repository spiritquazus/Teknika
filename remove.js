
let moblvl = 20;
let rangedpenetration = 20;

let rangedabsorb = 1



function cacapo() {
    rangedabsorb = (Math.floor(Math.random() * ((0.35 - 0.17) + 0.17) * (moblvl- rangedpenetration )) )*-1
}





for (let i = 0; i < 15; i++) {
    cacapo(); // Call the function to update caca
    console.log(rangedabsorb); // Log the updated value of caca
}
