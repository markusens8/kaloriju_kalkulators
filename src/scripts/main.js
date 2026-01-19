function ieladetSadalu(sadala) {
  let app = document.getElementById('app');
  app.innerHTML = '';

  let jaunaSadala = document.getElementById(sadala);
  app.appendChild(jaunaSadala.content.cloneNode(true));
}

function aprekinatBMR() {
  const dati = Object.fromEntries(new FormData('dati'));

  let bmr = 10*dati.svars + 6.25*dati.garums - 5*dati.vecums
  bmr += (dati.vecums == 'virietis' ? 5 : -161);
  return bmr;
}

function paraditRezultatus() {
  ieladetSadalu('rezultats')
}


ieladetSadalu('ievade');
