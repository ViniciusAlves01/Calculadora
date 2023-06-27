export default function copy(ev){
   const button = ev.currentTarget

   if(button.innerText === 'Copiar'){
      button.innerText = 'Copiado!'
      button.classList.add('copySuccess')
      navigator.clipboard.writeText(result.value)
   }else{
      button.innerText = 'Copiar'
      button.classList.remove('copySuccess')
   }
}