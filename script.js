// https://covid19.mathdro.id/api/countries/indonesia
// https://covid19.mathdro.id/api/countries/indonesia

const input = document.querySelector('.input-negara');
const btn = document.querySelector('.btn-search');
const alertPlaceholder = document.querySelector('.alert-placeholder');

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
        
        miniAlert(`Negara "${negara}" Tidak Ditemukan!`, 'danger');
        
      }else{
        //console.log(data);
        //console.log(data.confirmed.value);
        confirmed.textContent = data.confirmed.value;
        recovered.textContent = data.confirmed.value - data.deaths.value;
        deaths.textContent = data.deaths.value;
        miniAlert('Berhasil Mengambil Data Dari Negara '+input.value+'...', 'primary');
        
      }
      
      
      
    function miniAlert(message, type) {
        alertPlaceholder.innerHTML = '<div class="alert-info alert alert-' + type + ' alert-dismissible text-center fw-bold" role="alert">' + message + '</div>';
        setTimeout(function(){
          alertPlaceholder.innerHTML = '';
        }, 4000);
    }
      
    })
    .catch(err => console.log(err));
  
});

