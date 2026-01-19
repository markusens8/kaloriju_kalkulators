function ieladetSadalu(sadala) {
  document.getElementById("app").body.innerHTML = '';

  let ievade = document.getElementById(sadala);
  let klons = ievade.content.cloneNode(true);
  document.body.appendChild(klons);
}

function aprekinatBMR() {
  const dati = Object.fromEntries(new FormData('dati'));

  let bmr = 10*dati.svars + 6.25*dati.garums - 5*dati.vecums
  bmr += (dati.vecums == 'virietis' ? 5 : -161);
  return bmr;
}

function paraditRezultatus() {
  let bmr = aprekinatBMR;
  ieladetSadalu('rezultats')
}


ieladetSadalu('ievade');