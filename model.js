
const modelContainer = document.querySelector('.model-container');
const closeBtn = document.querySelector('.close');
const openBtn = document.querySelector('.model-open');


openBtn.addEventListener('click', function(){
    modelContainer.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
   modelContainer.style.display = 'none';
})

window.addEventListener('click', function(e){
   if(e.target === modelContainer){

    modelContainer.style.display = 'none';

   }
})