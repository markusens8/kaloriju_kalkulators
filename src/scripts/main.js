function izgutDatus() {
  
}

function aprekinat() {
  const form = document.getElementById('dati');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log('form data as object', data);
}