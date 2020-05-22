// Séléctionner les aiguilles de montre
const aiguille_heur = document.querySelector("#hour");
const aiguille_min = document.querySelector("#minute");
const aiguille_sec = document.querySelector("#second");

// Declarer des compteurs des toures pour les aiguilles :

let seconds_turns = 0;
let minutes_turns = 0;
let hours_turns = 0;

function demarrerLaMontre() {
	// Extraction de la date actuel à l'aide de la classe Date :

	let today = new Date();

	// Ajout de l'heure , le minute et la seconde dans des varaiables :

	let seconds = today.getSeconds() / 60;
	let minutes = (today.getMinutes() + seconds) / 60;
	let hours = (today.getHours() + minutes) / 12;

	// Calcul des degrées de mouvement de l'aiguille d'heure, de l'aiguille de minute et de l'aiguille de seconde

	let seconds_rot = seconds * 360;
	let minutes_rot = minutes * 360;
	let hours_rot = hours * 360;

	// Si quelque degrée retourne à 0, augmenter sa tourne par 1

	if (seconds_rot == 0) seconds_turns += 1;
	if (minutes_rot == 0) minutes_turns += 1;
	if (hours_rot == 0) hours_turns += 1;

	// Rotation des aiguilles à partir les degrées calculées :

	aiguille_heur.style.transform = `rotate(${hours_rot + 360 * hours_turns}deg)`;
  aiguille_min.style.transform = `rotate(${minutes_rot + 360 * minutes_turns}deg)`;
	aiguille_sec.style.transform = `rotate(${seconds_rot + 360 * seconds_turns}deg)`;
}

// Execution de la fonction chaque une seconde

const interval = setInterval(demarrerLaMontre, 1000);



function startTime() {

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let suf = "AM";

    if (h > 12) {
      h = h - 12;
      suf = "PM";
    }

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    document.getElementById("sufix").innerHTML = suf;

    let t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
