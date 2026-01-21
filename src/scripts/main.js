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

  console.log(dati);
  console.log(dati['aktivitates-limenis']);
  console.log("bmr: " + bmr);

  let baseCalories = bmr * AKTIVITASU_LIMENI[dati["aktivitates-limenis"]];
  let goalCalories = baseCalories + SVARA_MERKI[dati["dietas-merki"]];
  return [parseInt(baseCalories), parseInt(goalCalories)];
}

function paraditRezultatus() {
  console.log(aprekinatKalorijas());
  //const [baseCalories, goalCalories] = aprekinatKalorijas();
  // ieladetSadalu('rezultats')
}


ieladetSadalu('ievade');