function insertWithClicks(charKey){
   const input = document.getElementById('input')

   charKey.addEventListener('click', function(){
      input.value += charKey.dataset.value
      input.focus()
   })
}
function clear(){
   input.value = ''
}

export {insertWithClicks, clear}