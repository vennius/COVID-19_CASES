// https://covid19.mathdro.id/api/countries/indonesia

const input = document.querySelector('.input-negara');
const btn = document.querySelector('.btn-search');

const confirmed = document.querySelector('.confirmed .value');
const recovered = document.querySelector('.recovered .value');
const deaths = document.querySelector('.deaths .value');

fetch('https://covid19.mathdro.id/api/countries/indonesia')
  .then(response => response.json())
  .then(data => {
      confirmed.textContent = data.confirmed.value;
      recovered.textContent = data.confirmed.value - data.deaths.value;
      deaths.textContent = data.deaths.value;
      input.value = 'Indonesia';
  })
  .catch(err => console.log(err));

btn.addEventListener('click', () => {
  
  let negara = input.value;
  
  fetch(`https://covid19.mathdro.id/api/countries/${negara}`)
    .then(response => response.json())
    .then(data => {
      
      if(data.error){
        alert('Negara Tidak Ditemukan!');
      }else{
        //console.log(data);
        //console.log(data.confirmed.value);
        confirmed.textContent = data.confirmed.value;
        recovered.textContent = data.confirmed.value - data.deaths.value;
        deaths.textContent = data.deaths.value;
      }
      
    })
    .catch(err => console.log(err));
  
});

