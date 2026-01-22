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

// Rezultātu ekrānā atjaunina makorvielu daudzumus
function atjauninatMakrovielas(ratios) {
  const mealCalories = parseInt(document.getElementById('merka-kalorijas').innerHTML / 3);
  document.getElementById('carb').innerHTML = parseInt(mealCalories * ratios['carb'] / 4);
  document.getElementById('fat').innerHTML = parseInt(mealCalories * ratios['fat'] / 9);
  document.getElementById('protein').innerHTML = parseInt(mealCalories * ratios['protein'] / 4);
}

// Kad tiek ievaditi personas dati, tad palaižas ši funkcija un tiek izveidots rezultatu ekrans 
function paraditRezultatus() {
  const [baseCalories, goalCalories] = aprekinatKalorijas();

  ieladetSadalu('rezultats')
  document.getElementById('bazes-kalorijas').innerHTML += baseCalories;
  document.getElementById('merka-kalorijas').innerHTML += goalCalories;
  atjauninatMakrovielas({'carb': 0.33, 'fat': 0.33, 'protein': 0.34});
}

// Parbauda vai makrovielu % daudzumi neparsniedz 100, pec tam atjaunina
function parbauditProcentus() {
  const precentInputs = document.getElementsByClassName('precent-input');  
  const precentSums = precentInputs[0].value + precentInputs[1].value + precentInputs[2].value;

  if (precentSums !== 100)
    console.log("nau 100");
  else 
    atjauninatMakrovielas({'carb': precentInputs[0].value, 'fat': precentInputs[1].value, 'protein': precentInputs[2].value});
}


ieladetSadalu('ievade');
