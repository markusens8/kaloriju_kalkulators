function ieladetSadalu(sadala) {
  let app = document.getElementById('app');
  app.innerHTML = '';

  let jaunaSadala = document.getElementById(sadala);
  app.appendChild(jaunaSadala.content.cloneNode(true));
}


// Kad tiek ievaditi personas dati, tad palaižas ši funkcija un tiek izveidots rezultatu ekrans 
function paraditRezultatus() {
  const [baseCalories, goalCalories] = aprekinatKalorijas();

  ieladetSadalu('rezultats')
  document.getElementById('bazes-kalorijas').innerHTML += baseCalories;
  document.getElementById('merka-kalorijas').innerHTML += goalCalories;
  document.getElementById('kcal').innerHTML = parseInt(goalCalories/3);
  atjauninatMakrovielas();
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
function atjauninatMakrovielas() {
  const precentInputs = document.getElementsByClassName('precent-inputs');
  let precentSum = 0, precents = new Array(3); // carb, fat, protein precentage
  for (let i=0; i<3; ++i) { 
    precents[i] = precentInputs[i].value / 100; 
    precentSum += precents[i];
  }
  console.log(precents);
  console.log(precentSum);

  if (precentSum !== 1) {
    console.log("procenti nau 100");
    return; 
  }

  const mealCalories = parseInt(document.getElementById('merka-kalorijas').innerHTML / 3);
  document.getElementById('carb').innerHTML = parseInt(mealCalories * precents[0] / 4);
  document.getElementById('fat').innerHTML = parseInt(mealCalories * precents[1] / 9);
  document.getElementById('protein').innerHTML = parseInt(mealCalories * precents[2] / 4);
}


ieladetSadalu('ievade');
