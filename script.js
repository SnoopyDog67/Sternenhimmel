
let running = false;

function lilieMalen(){
    document.getElementById("lilieScreen").style.display = "flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function pesto() {
    document.getElementById("pesto").style.display = "flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function pestoRot() {
    alert("Fast richtig... Überleg nochmal gut")
}

function pestoGrün() {
    
    document.getElementById("infoTafelPesto").style.display="block";
}

function pestoInfoZurück(){
    document.getElementById("infoTafelPesto").style.display="none";
}

function uno(){
    document.getElementById("unoReverse").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
    document.getElementById("canvas").style.display="flex";
    startConfetti()
}

function funfact1(){
    document.getElementById("funFact1").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function funfact2(){
    document.getElementById("funFact2").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function funfact3(){
    document.getElementById("funFact3").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function funfact4(){
    document.getElementById("funFact4").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function funfact5(){
    document.getElementById("funFact5").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function elfteraktion(){
    document.getElementById("elfter").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
    document.getElementById("seite").onclick = function () {
    document.getElementById("clickMich").style.display="none";
    this.classList.add("umblättern");
    setTimeout(function(){
    
    document.getElementById("heute").style.display="flex";
    document.getElementById("weiter1").style.display="flex";
    },2000);
    };
    document.getElementById("weiter1").onclick = function () {
    document.getElementById("erinnerst").style.display="flex";
    setTimeout(function(){
    document.getElementById("heute").style.display="none";
    document.getElementById("bild11").classList.add("rausRechts");
    document.getElementById("weiter1").style.display="none";
    },1000);
    setTimeout(function(){
    const recap = document.querySelector(".recap");

        recap.classList.add("zeigen");

    },2000);
    setTimeout(function(){
     document.getElementById("weiter2").style.display="flex";

    },4000);
    document.getElementById("weiter2").onclick = function () {
        const recap = document.querySelector(".recap");

        recap.classList.remove("zeigen");
        recap.classList.add("raus");
        setTimeout(function(){
            document.getElementById("erinnerst").style.display="none";
            document.getElementById("weiter2").style.display="none";

        },500);
        setTimeout(function(){
            document.getElementById("elfter2").style.display="flex";
            document.getElementById("einMonat").style.display="flex";
            document.getElementById("elfter2Text1").style.display="flex";
            document.getElementById("elfter2Text2").style.display="flex";

        },1500);
        
        setTimeout(function(){
            document.getElementById("elfter2Text3").style.display="flex";
        }, 3500);
        setTimeout(function(){
            document.getElementById("geschenkButton").style.display="flex";
        }, 5000);

        
    };

    };

}

function geschenkErhalten(){
    document.getElementById("elfter").style.display="none";
    document.getElementById("elfter2").style.display="none";
    document.getElementById("geschenk1").style.display="flex";
    let click = 0;

    document.getElementById("geschenkBild").onclick = function () {

        if (click >= 5) {
            
            geschenkBild.src="bilder/geschenkOffen.png";
            document.getElementById("ausflug").style.display= "block";
            document.getElementById("sammleSterne").style.display= "block";
            
        } else {
            geschenkBild.classList.remove("wackeln");
            void geschenkBild.offsetWidth;
            geschenkBild.classList.add("wackeln");
            click++;
            console.log(click);
        }

    };

}

function colorHunt() {
    document.getElementById("colorHunt").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";

}

function schach() {
    document.getElementById("Schach").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";

}

function keks(){
    document.getElementById("keks").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
    document.getElementById("keks").onclick = function(){

    this.classList.toggle("offen");

    };

}

function sternschnuppe(){
    // Sterne erzeugen
    document.getElementById("sternschnuppe").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
    const stars = document.getElementById("stars");

for(let i = 0; i < 180; i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    const size = Math.random()*3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay = Math.random()*3 + "s";

    stars.appendChild(star);
}

}

// Wunsch abschicken

function sendWish(){
    
    const text = document.getElementById("wish").value.trim();

    if(text === ""){
        alert("Bitte gib zuerst einen Wunsch ein.");
        return;
    }

    document.getElementById("msg").style.opacity = "1";

    document.getElementById("wish").value = "";

    setTimeout(function(){
          document.getElementById("msg").style.opacity = "0";  
    }, 2000);

}

const bilder = [
    "snoopy/bild1.jpeg",
    "snoopy/bild2.jpeg",
    "snoopy/bild3.jpeg",
    "snoopy/bild4.jpeg",
    "snoopy/bild5.jpeg"
];

let aktuellesBild = 0;

function bildAnzeigen(){

    document.getElementById("bild").src = bilder[aktuellesBild];

    document.getElementById("nummer").innerHTML =
        (aktuellesBild + 1) + " / " + bilder.length;
}

function naechstesBild(){

    aktuellesBild++;

    if(aktuellesBild >= bilder.length){
        aktuellesBild = 0;
    }

    bildAnzeigen();
}

function vorherigesBild(){

    aktuellesBild--;

    if(aktuellesBild < 0){
        aktuellesBild = bilder.length - 1;
    }

    bildAnzeigen();
}

function snoopy(){
    document.getElementById("snoopy").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
    bildAnzeigen();
}

const museen = [

    {icon:"🖼️", name:"Kunstmuseum"},
    {icon:"🦖", name:"Naturkundemuseum"},
    {icon:"🚂", name:"Technikmuseum"},
    {icon:"🏰", name:"Geschichtsmuseum"},
    {icon:"🌍", name:"Völkerkundemuseum"},
    {icon:"🎮", name:"Videospielmuseum"},
    {icon:"🧪", name:"Wissenschaftsmuseum"},
    {icon:"🎬", name:"Filmmuseum"},
    {icon:"🎨", name:"Designmuseum"},
    {icon:"🐠", name:"Meeresmuseum"},
    {icon:"🍫", name:"Schokoladenmuseum"},

    // Gewinner
    {icon:"🚀", name:"Museum der Zukunft"}

];


function museumAuslosen(){

    let i = 0;
    let speed = 60;
    let runde = 0;

    const ziel = museen.length - 1;

    function drehen(){

        document.getElementById("museumIcon").innerHTML =
            museen[i].icon;

        document.getElementById("museumTitel").innerHTML =
            museen[i].name;

        i++;

        if(i >= museen.length){
            i = 0;
        }

        runde++;

        // Erst nach 15 Wechseln langsamer werden
        if(runde > 15){

            if(speed < 150){
                speed += 5;
            }
            else if(speed < 300){
                speed += 15;
            }
            else{
                speed += 35;
            }

        }

        if(speed < 700){
            setTimeout(drehen, speed);
        }
        else{

            document.getElementById("museumIcon").innerHTML =
            museen[ziel].icon;

            document.getElementById("museumTitel").innerHTML =
            museen[ziel].name;

            // Animation starten
            const karte = document.querySelector(".museum-card");

            karte.classList.add("gewinner");

            setTimeout(function(){
                karte.addEventListener("animationend", function(){

                    karte.classList.remove("gewinner");

                }, { once: true });
            }, 2000);

            

}

    }

    drehen();

}

const bilderOrt = [
    "bilder/hinweis1.png",
    "bilder/hinweis2.jpeg",
    "bilder/hinweis3.jpg"
];

let aktuellerHinweis = 0;

function naechsterHinweis(){

    aktuellerHinweis++;

    if(aktuellerHinweis < bilderOrt.length){

        document.getElementById("hinweisBild").src =
            bilderOrt[aktuellerHinweis];

    }

    if(aktuellerHinweis == bilderOrt.length - 1){

        document.getElementById("weiterButton").style.display = "none";

        document.getElementById("aufloesenButton").style.display = "inline-block";

    }

}

function ortReveal(){
    document.getElementById("ortReveal").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function aufloesen(){
    document.getElementById("hinweisBild").style.display="none";
    document.getElementById("aufloesenButton").style.display = "none";

    document.getElementById("stadt").innerHTML =
        "🎉 Nürnberg 🎉";

}

function museum(){
    document.getElementById("museum").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function datum(){
    document.getElementById("datum").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function museumScratch(){
    document.getElementById("museumScratch").style.display="flex";
    initScratchCard();
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

const steps = [

    () => {
        // Blumentopf erscheint
        showPot();
    },

    () => {
        // Baum wächst
        showSeed();
    },

    () => {
        // Samen fliegt in den Topf
        dropSeed();
    },

    () => {
        // Keimling wächst
        growSprout();
    },


    () => {
        // Zitronen erscheinen
        showLemons();
    }

];



const texts = [
    "Klicke auf den Bildschirm.",
     "Hole einen Samen",
    "Lege den Samen hinein.",
    "und lass ihn wachsen",
     "Er wächst!",
    " Dein Zitronenbaum ist fertig!"
];

function zitronenbaum(){
const instruction = document.getElementById("instruction");

let currentStep = 0;

document.addEventListener("click", () => {

    if(currentStep >= steps.length) return;

    steps[currentStep]();
    currentStep++;
    instruction.textContent = texts[currentStep];

});
}

function showPot() {
    flowerPot.animate([
        {
            transform: "translateX(-50%) scale(0.8)",
            opacity: 0
        },
        {
            transform: "translateX(-50%) scale(1)",
            opacity: 1
        }
    ], {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
    });
}

const seed = document.getElementById("seed");

function showSeed(){

    seed.animate([
        {
            transform: "translateX(-50%) scale(0.8)",
            opacity: 0
        },
        {
            transform: "translateX(-50%) scale(1)",
            opacity: 1
        }
    ], {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
    });

    seed.animate([
        {
            transform:"translateX(-50%) scale(0)"
        },
        {
            transform:"translateX(-50%) scale(1.2)"
        },
        {
            transform:"translateX(-50%) scale(1)"
        }
    ],{
        duration:400,
        fill:"forwards",
        easing:"ease-out"
    });

}

function dropSeed(){

    seed.animate([
        {
            transform:"translate(-50%,0px) scale(1)",
            opacity:1
        },
        {
            transform:"translate(-50%,300px) scale(1)",
            opacity:1
        },
        
    ],{
        duration:700,
        easing:"ease-in",
        fill:"forwards"
    });

    

}
const tree = document.getElementById("tree");
function growSprout(){
     document.getElementById("tree").style.display="block";

    tree.animate([
        {
            transform: "translateX(-50%) scale(0.8)",
            opacity: 0
        },
        {
            transform: "translateX(-50%) scale(1)",
            opacity: 1
        }
    ], {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
    });
    tree.classList.add("pop");
    seed.animate([
        {
            
            opacity:1
        },
        {
            
            opacity:0
        },
        
    ],{
        duration:300,
        easing:"ease-in",
        fill:"forwards"
    });
}


function showLemons(){
    document.getElementById("tree").style.display="none";
    tree2.animate([
        {
            transform: "translateX(-50%) scale(0.8)",
            opacity: 0
        },
        {
            transform: "translateX(-50%) scale(1)",
            opacity: 1
        }
    ], {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
    });
    tree2.classList.add("pop");
}

function zitronen(){
    document.getElementById("zitrone").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
    setTimeout(function(){
               zitronenbaum();
    }, 500);

}

function herzFormen() {

   const herz = [
    [42,20],[46,22],[53,20],[48,28],[58,20],

    [38,25],[62,25],

    [35,32],[65,32],

    [36,40],[64,40],

    [42,52],[50,44],[61,49],

    [46,60],[57,57],

    [48,65],[54,65],

    [50,70],

    [38,45], [50,31]
];

    for(let i = 0; i < 21; i++){

        const stern = document.querySelector(".stern" + (i+1));

        if(!stern) continue;

        // Ursprüngliche Position einmal speichern
        if(!stern.dataset.left){
            stern.dataset.left = getComputedStyle(stern).left;
            stern.dataset.top = getComputedStyle(stern).top;
        }

        stern.style.transition = "all 2s ease";
        stern.style.left = herz[i][0] + "%";
        stern.style.top = herz[i][1] + "%";
    }

    // Nach 3 Sekunden wieder zurück
    setTimeout(sterneZurueck,7000);
}

function sterneZurueck(){

    for(let i=0;i<21;i++){

        const stern=document.querySelector(".stern"+(i+1));

        if(!stern) continue;

        stern.style.left=stern.dataset.left;
        stern.style.top=stern.dataset.top;
    }
}



function ende(){
   
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
    setTimeout(function(){
           herzFormen();    
    }, 500);
    setTimeout(function(){

    document.getElementById("flash").classList.add("show");

    setTimeout(function(){

        document.getElementById("finale").classList.add("show");

    },800);

    },5000);
}

function meer(){
    document.getElementById("unterwasser").style.display="flex";
    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
}

function aktion2(){
    alert("Hier kommt noch was später");
}

let sternInfos = {

    tag1: {
        titel:"Der erste Stern ",
        text:"Und auch der 1.August. Da ich nicht in irl da sein kann um dir eine zu geben, ist hier eine virtuelle Blume.",
        aktion: lilieMalen,
        datum: 1
    },


    tag2: {
        titel:"Und da waren es schon zwei ",
        text:"Und hier sind auch gleich zwei intresannte Funfacts um jemand heute zu beeindrucken",
        aktion: funfact1,
        datum: 2
    },


    tag3: {
        titel:"Alle guten Dinge sind 3 ",
        text:"Aber werden die Dinge heute so gut sein? Lass es uns herausfinden.",
        aktion: keks,
        datum: 3
    },

    tag4: {
        titel:"Vier Gewinnt ",
        text:"Zeit für ein kleines Duell! Heute wird eine Challenge gespielt.",
        aktion: colorHunt,
        datum: 4
    },

    tag5: {
        titel:"Pesto... ",
        text:"Ein weiteres der vielen Themen über das wir uns nicht einigen können... Zeit die Frage ein für alle mal zu beantworten.",
        aktion: pesto,
        datum: 5
    },

    tag6: {
        titel:"Warte mal - Das weis ich doch schon! ",
        text:"Genau! Aber dieser Fact war so iconic, der durfte hier nicht fehlen. Kannst du erraten welchen ich meine? (Kein Schummeln!)",
        aktion: funfact2,
        datum: 6
    },

    tag7: {
        titel:"Sternschnuppe ",
        text:"Jeder trägt einen Wunsch im Herzen. Vielleicht ist jetzt der Moment, ihn den Sternen anzuvertrauen.",
        aktion: sternschnuppe,
        datum: 7
    },

    tag9: {
        titel:"Katze oder Hund?",
        text:"Falls du 'Katze' gedacht hast … leider falsch. Jetzt kommt der wahre Star.",
        aktion: snoopy,
        datum: 9
    },

    tag8: {
        titel:"Schach",
        text:"Besser als ich bist du schon mal (aber so schwer ist das auch nd).  Aber wie gut bist du wirklich?",
        aktion: schach,
        datum: 8
    },

    tag10: {
        titel:"Zweistelligkeit!!!",
        text:"Und wenn du willst das meine Gewinnzahl auch diese Größe erreicht dann fordere mich dcoh erneut zu einer Revanche, denn...",
        aktion: uno,
        datum: 10
    },

    tag11: {
        titel:"Der elfte des Monats",
        text:"Ich hoffe du weist was das heißt...",
        aktion: elfteraktion,
        datum: 11
    },

    tag12: {
        titel:"Keine Ahnung",
        text:"Joa hier war ich out of ideas aber ich weis du magst Wasser (ig?) deswegen hier ist Wasser.",
        aktion: meer,
        datum: 12
    },

    tag13: {
        titel:"Eine Unglückszahl?",
        text:"Diesmal nicht, denn es ist Zeit zwei weitere Fun facts zu erfahren!",
        aktion: funfact3,
        datum: 13
    },

    tag14: {
        titel:"Save the date",
        text:"An dieser Stelle musste ich leider schon viel Spoilern. Der Vollständigekiet halber ist es trotzdem noch enthalten.",
        aktion: datum,
        datum: 14
    },

    tag15: {
        titel:"Gimme, Gimme, Gimme...",
        text:"...mehr unnötiges Wissen",
        aktion: funfact4,
        datum: 15
    },

    tag16: {
        titel:"Der zündende Funke?",
        text:"Immer noch keine Ahnung? Dann wird es Zeit, etwas Licht ins Dunkel zu bringen!",
        aktion:museumScratch,
        datum: 16
    },

    tag17: {
        titel:"Gleich geschafft",
        text:"Nun hast du schon die 80% Hürde erreicht und passend dazu wird dein Wissen heute auf knapp 80% der intergrierten Fun Facts erweitert..",
        aktion: funfact5,
        datum: 17
    },

    tag18: {
        titel:"Was darfs denn sein?",
        text:"Ein Museum? Aber nur welches? In welche Richtung soll es denn überhaupt gehen?" ,
        aktion: museum,
        datum: 18
    },

    tag19: {
        titel:"Zitronen",
        text:"Davon kann man nie genug besitzen(wenigstens deiner Meinug nach). Warum dann nicht gleich direkt Quelle?",
        aktion: zitronen,
        datum: 19
    },

    tag20: {
        titel:"Wohin der Weg?",
        text:"Das fragst du sich schon seit Anfang an. Hier sind 3 Hinweise, kannst du die Stadt anhand ihnen entschlüsseln?",
        aktion: ortReveal,
        datum: 20
    },

    tag21: {
        titel:"Das Ende",
        text:"Der letze Tag und auch Zeit für das große Reveal. Wo gehts denn nun hin?",
        aktion: ende,
        datum: 21
    }

    

};





    
function startGame() {

    document.getElementById("anfangText").style.display= "none";

    document.getElementById("vorhangLinks").classList.add("vorhangLinksoeffnen");
    document.getElementById("vorhangRechts").classList.add("vorhangRechtsoeffnen");

    document.getElementById("kasten1").classList.add("kasten1oeffnen");
    document.getElementById("kasten2").classList.add("kasten2oeffnen");
    document.getElementById("kasten3").classList.add("kasten3oeffnen");
    document.getElementById("kasten4").classList.add("kasten4oeffnen");
    document.getElementById("vorhangStange").classList.add("vorhangStangeoeffnen");

    document.getElementById("fenster1").classList.add("fenster1oeffnen");
    document.getElementById("fenster2").classList.add("fenster2oeffnen");


   

    setTimeout(function () {
        
        document.getElementById("kasten1").classList.remove("kasten1oeffnen");
        document.getElementById("kasten2").classList.remove("kasten2oeffnen");
        document.getElementById("kasten3").classList.remove("kasten3oeffnen");
        document.getElementById("kasten4").classList.remove("kasten4oeffnen");
        document.getElementById("vorhangStange").classList.remove("vorhangStangeoeffnen");

        document.getElementById("vorhangLinks").classList.remove("vorhangLinksoeffnen");
        document.getElementById("vorhangRechts").classList.remove("vorhangRechtsoeffnen");

        document.getElementById("fenster1").classList.remove("fenster1oeffnen");
        document.getElementById("fenster2").classList.remove("fenster2oeffnen");

        document.getElementById("startScreen").style.display = "none";
    }, 2000);

    
    
     setTimeout(function(){
         document.body.classList.add("nightStart");
    },3500);


    const stars = document.querySelectorAll(".stern");
     setTimeout(function(){
    stars.forEach((star, index) => {

        setTimeout(() => {

            star.classList.add("show");

        }, index * 150);

    });
     },4300);

    setTimeout(function(){
         document.getElementById("knopf").style.display= "block";
         document.getElementById("überschrift").style.display= "block";
    },4800);

}


function openLetter() {
    
    let brief = document.getElementById("briefGeschlossen");


    brief.classList.add("briefStart");


    setTimeout(function(){

        brief.src="bilder/briefOffen.png";
        brief.style.width = "400px";
        brief.style.top = "30%";

    },2000);

    setTimeout (function () {
    document.getElementById("popup-titleStart").innerHTML = "Hey,";

    document.getElementById("popup-textStart").innerText =
`
so ich muss jetzt hier einen Text schrieben, naja deutsch ist nicht so meine Stärke aber ich veruschs.

Das wird lustig wenn du das siehts, weil wenn du's tust dann nur weil ich es in der kurzen Zeit geschafft habe es tatsächlich zu perfektionieren yk.
(ich habe gerade mal 4 Tage, wobei viele halt schon verplant sind lol).
Es ist die Arbeit hoffentlich Wert.
Ich glaube du hast egal welche Erwartungen meine Ego unterschäzt (obwohl ich dir immer updates gegebn hab) und wirst so überrascht sein wie sehr übertrieben ich hab.

Also was ist das hier:
Da ich jetzt erstmal 3 Wochen weg bin und heute(an dem Tag an dem du's lesen wirst) der erste August ist (google wenn du nicht weist was da ist) dachte ich mir bastel ich dir was kleines.
Desweiteren wollte ich eh Websiten programmieren leren, deswegen war es ein lustiges einsteiger Projekt.

So ich hab auf Insta Posts gesehen wo Leute ihren Partnern Websiten als Geschenke programmiert haben. Tja und mein Ego dachte sich: 'Ich kann das auch!'
Naja bloß hab ich die Idee nicht nur kopiert sondern verändert und mich damit soo übernommen du weist nicht.

So das ganze fungiert als Kalender bis zu der Woche wo ich wieder da bin. Jeden Tag schaltet sich ein neuer Stern frei den du dir dann anschuen kannst.
Wehe du checkst das nd jeden Tag - ich will ne Reaktion haben ja, war viel Arbeit hier.

Oke ig das wars. Das Projekt hat litterly mein gesamtes Leben überneommen und du hast meine Crashouts ja immer live mitbekommen. Trozdem, hab ichs gerne gemacht, viel Spass mit diesen 40h arbeit und über 4000 Zeilen Code.

Joa vergiss mich nd, hab dich lieb (und appreciate den Scheiss)

Deine Maja
`;


    document.getElementById("popup-start").style.display = "flex";
    },3000);



}


let sterne = document.querySelectorAll(".stern");
console.log("Sterne gefunden:", sterne.length);
const active = true;

let today;

if (active === true) {
    today = new Date().getDate();
} else {
    today = 50;
}

console.log("Heute:", today);

sterne.forEach(stern => {

    let nummer = Number(stern.id.replace("tag",""));
      if(nummer <= today){
        stern.style.display = "block";
    } else {
        stern.style.display = "none";
    }
    
    stern.onclick = function(){

        
        let tag = this.id;


        let info = sternInfos[tag];


        document.getElementById("popup-title").innerHTML = info.titel;


        document.getElementById("popup-text").innerHTML = info.text;

        let buttonoeffnen = document.getElementById("popup-button");

        buttonoeffnen.onclick = function(){
            info.aktion();
        };


        document.getElementById("popup").style.display = "flex";


    }
    

});

function closePopup(){

    document.getElementById("popup").style.display="none";
    document.getElementById("popup-start").style.display="none";
    
    let brief = document.getElementById("briefGeschlossen");
    brief.src = "bilder/briefGeschlossen.png";
    brief.style.width = "300px";
        brief.style.top = "40%";
    brief.classList.remove("briefStart");

}

function startseite() {
    document.getElementById("startScreen").style.display="flex";
    document.getElementById("anfangText").style.display= "flex";
    document.getElementById("vorhangLinks").classList.add("vorhangLinksschließen");
    document.getElementById("vorhangRechts").classList.add("vorhangRechtsschließen");

    setTimeout(function(){
    
    document.getElementById("vorhangLinks").classList.remove("vorhangLinksschließen");
    document.getElementById("vorhangRechts").classList.remove("vorhangRechtsschließen");
    
    },2000);
}

function closeView() {
    document.getElementById("lilieScreen").style.display="none";
    document.getElementById("pesto").style.display = "none";
    document.getElementById("unoReverse").style.display="none";
    document.getElementById("funFact1").style.display="none";
    document.getElementById("funFact2").style.display="none";
    document.getElementById("funFact3").style.display="none";
    document.getElementById("funFact4").style.display="none";
    document.getElementById("funFact5").style.display="none";
    document.getElementById("geschenk1").style.display="none";
    document.getElementById("colorHunt").style.display="none";
    document.getElementById("Schach").style.display="none";
    document.getElementById("keks").style.display="none";
    document.getElementById("sternschnuppe").style.display="none";
    document.getElementById("snoopy").style.display="none";
    document.getElementById("museum").style.display="none";
    document.getElementById("ortReveal").style.display="none";
    document.getElementById("datum").style.display="none";
    document.getElementById("museumScratch").style.display="none";
    document.getElementById("zitrone").style.display="none";
     document.getElementById("unterwasser").style.display="none";
      tree.animate([
        {
            
            opacity:1
        },
        {
            
            opacity:0
        },
        
    ],{
        duration:300,
        easing:"ease-in",
        fill:"forwards"
    });
    tree2.animate([
        {
            
            opacity:1
        },
        {
            
            opacity:0
        },
        
    ],{
        duration:300,
        easing:"ease-in",
        fill:"forwards"
    });
    flowerPot.animate([
        {
            
            opacity:1
        },
        {
            
            opacity:0
        },
        
    ],{
        duration:300,
        easing:"ease-in",
        fill:"forwards"
    });
    
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();

window.addEventListener("resize", resize);

const colors = [
    "#ff4d4d",
    "#ffcc00",
    "#00cc66",
    "#3399ff",
    "#cc33ff",
    "#ff8800",
    "#00e5ff"
];

const confetti = [];

for (let i = 0; i < 400; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        width: Math.random() * 8 + 5,
        height: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 8 - 4,
        drift: Math.random() * 2 - 1
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(piece => {
        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate(piece.rotation * Math.PI / 180);

        ctx.fillStyle = piece.color;
        ctx.fillRect(
            -piece.width / 2,
            -piece.height / 2,
            piece.width,
            piece.height
        );

        ctx.restore();

        piece.y += piece.speed;
        piece.x += piece.drift;
        piece.rotation += piece.rotationSpeed;

        if (piece.y > canvas.height + 20) {
            piece.y = -20;
            piece.x = Math.random() * canvas.width;
        }

        if (piece.x > canvas.width) piece.x = 0;
        if (piece.x < 0) piece.x = canvas.width;
    });

    requestAnimationFrame(draw);
}

function startConfetti() {
    if (running) return;
    running = true;
    draw();
}

function initScratchCard() {

    const scratchCanvas = document.getElementById("scratchCanvas");
    const scratchCtx = scratchCanvas.getContext("2d");

    // Größe JETZT setzen (nachdem das Element sichtbar ist)
    scratchCanvas.width = scratchCanvas.offsetWidth;
    scratchCanvas.height = scratchCanvas.offsetHeight;

    // Graue Fläche
    scratchCtx.fillStyle = "#b0b0b0";
    scratchCtx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);

    // Text
    scratchCtx.fillStyle = "black";
    scratchCtx.font = "40px Arial";
    scratchCtx.textAlign = "center";
    scratchCtx.textBaseline = "middle";
    scratchCtx.fillText(
        "FREIKRATZEN",
        scratchCanvas.width / 2,
        scratchCanvas.height / 2
    );

    scratchCtx.globalCompositeOperation = "destination-out";

    let drawing = false;

    function scratch(x, y) {
        scratchCtx.beginPath();
        scratchCtx.arc(x, y, 25, 0, Math.PI * 2);
        scratchCtx.fill();
    }

    scratchCanvas.addEventListener("mousedown", () => drawing = true);
    scratchCanvas.addEventListener("mouseup", () => drawing = false);
    scratchCanvas.addEventListener("mouseleave", () => drawing = false);

    scratchCanvas.addEventListener("mousemove", (e) => {
        if (!drawing) return;

        const rect = scratchCanvas.getBoundingClientRect();

        scratch(
            e.clientX - rect.left,
            e.clientY - rect.top
        );
    });

    // Touch
    scratchCanvas.addEventListener("touchstart", (e) => {
        drawing = true;
        e.preventDefault();
    });

    scratchCanvas.addEventListener("touchend", () => drawing = false);

    scratchCanvas.addEventListener("touchmove", (e) => {
        if (!drawing) return;

        e.preventDefault();

        const rect = scratchCanvas.getBoundingClientRect();
        const touch = e.touches[0];

        scratch(
            touch.clientX - rect.left,
            touch.clientY - rect.top
        );
    });
}