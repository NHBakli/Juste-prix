const message_play = document.querySelector("#message_play");

const entry = document.querySelector("#entry");

const result = parseInt(Math.random(1)* 100);

const valid = document.querySelector("#valid")

const restart = document.querySelector("#restart")

const gift = ["Girafe", "Vélo", "Mug", "Télévision", "Pc portable", "Voiture thermique sans essence", "Babouche usé", "Un chien qui hoche la tête ", "1 milions de PHP (Pesos Philippin)"];

console.log(result)

let compteur = 0;



function action(arg){


    for (let i = 0; i < 7; i++){

        compteur +=1

        console.log(compteur)

        if (entry.value < result){
        message_play.textContent = `#${compteur-7} Plus haut ! `
        }
        if (entry.value > result){
            message_play.textContent = "Plus bas !"
        }
        else if (entry.value == result){
            let victory = gift[Math.floor(Math.random() * gift.length)]
            message_play.textContent = `Félicitation vous avez gagné, vous avez remporté : ${victory}`
            entry.disabled = true;
            valid.disabled = true;
        }
        //! Puisque que la boucle va directement a 7 et que l'utilisateur doit faire uniquement 7 essaie alors 7x7=49. Ce n'est pas la bonne méthode mais c'est la seule que j'ai trouvé 
        if (compteur === 49) {
            message_play.textContent = `Vous avez perdu, le résultat était : ${result}`;
            entry.disabled = true;
            valid.disabled = true;
        }

    }
    entry.value = "";

};


entry.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        action(entry.value)
    }
});

valid.addEventListener("click", function(click){
    action(entry.value)
});

restart.addEventListener("click", function(click){
    action(location.reload()) 
});







// const result = parseInt(Math.random(1)* 100)

// const gift = ["Girafe", "Vélo", "Mug", "Télévision", "Pc portable", "Voiture thermique sans essence", "Babouche usé", "Un chien qui hoche la tête ", "1 milions de PHP (Pesos Philippin"]

// console.log(result) 

// for(let i = 0; i < 7; i++){
//     let entry = parseInt(prompt("↓ Veuillez entrer un nombre en 1 et 100 ↓"))
//     if(entry < 1 || entry > 100){
//         alert("Veuillez entrer un nombre entre 1 et 100")
//     }
//     else if (entry == result){
//         let victory = gift[Math.floor(Math.random() * gift.length)]
//         alert(`Félicitation vous avez gagné, votre lot sera : ${victory} !`)
//         break
//     }
//     else if (entry > result){
//         console.log("Plus bas !")
//     }
//     else if (entry < result){
//         console.log("Plus Haut !")
//     }
// }

