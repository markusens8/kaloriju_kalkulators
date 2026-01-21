function ieladetSadalu(sadala) {
  let app = document.getElementById('app');
  app.innerHTML = '';

  let jaunaSadala = document.getElementById(sadala);
  app.appendChild(jaunaSadala.content.cloneNode(true));
}

function aprekinatKalorijas() {
  const DZIMUMI = {'virietis':5, 'sieviete':-161};
  const AKTIVITASU_LIMENI = {'mazs':1.20, 'videjs':1.375, 'liels':1.465};
  const SVARA_MERKI = {'zaudet':-300, 'saglabat':0, 'iegut':300};

  const forma = document.querySelector("form"); 
  const dati = Object.fromEntries(new FormData(forma));;
  
  let bmr = 10*dati.svars + 6.25*dati.garums - 5*dati.vecums + DZIMUMI[dati.dzimums];

  let baseCalories = bmr * AKTIVITASU_LIMENI[dati["aktivitates-limenis"]];
  let goalCalories = baseCalories + SVARA_MERKI[dati["dietas-merki"]];
  return [parseInt(baseCalories), parseInt(goalCalories)];
}

function paraditRezultatus() {
  const [baseCalories, goalCalories] = aprekinatKalorijas();
  const mealCalories = goalCalories / 3;
  ieladetSadalu('rezultats')

  document.getElementById('bazes-kalorijas').innerHTML += baseCalories;
  document.getElementById('merka-kalorijas').innerHTML += goalCalories;

  document.getElementById('kcal').innerHTML = parseInt(mealCalories);
  document.getElementById('carb').innerHTML = parseInt(mealCalories * 0.33 / 4);
  document.getElementById('fat').innerHTML = parseInt(mealCalories * 0.33 / 9);
  document.getElementById('protein').innerHTML = parseInt(mealCalories * 0.33 / 4);
}


ieladetSadalu('ievade');
