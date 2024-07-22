document.addEventListener('DOMContentLoaded', () => {
   const numberOption = document.getElementById('number-option');
   const thankYouCard = document.getElementById('thankCard')
   const rateNumber = document.getElementById('rateNumber');
   const submitBtn = document.getElementById('submitBtn');
   const cardContainer = document.querySelector('.card-container')
   
   let rate = '';
   let rateSpans = [];
   
   // for rate number option
   for(let i = 1; i <= 5; i++){
         let rateSpan = document.createElement('span');
         rateSpan.classList.add('rate-span');
         rateSpan.textContent += i;
         numberOption.appendChild(rateSpan);

         rateSpans.push(rateSpan);

         rateSpan.addEventListener('click', (e) => {
            const selectedRate = e.target.innerText;

            rateSpans.forEach((span) => {
               span.classList.remove('active');
            })

            e.target.classList.add('active');

            rate = selectedRate;
         })


   }
   
   submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
   
      if(rate){
         thankYouCard.classList.add('show');
         cardContainer.classList.add('hide')

   
         rateNumber.innerText = rate;
      }
   })
})









