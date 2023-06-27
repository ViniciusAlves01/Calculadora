import calculate from "./calculate.js"

export default function(ev){
   ev.preventDefault()

   const input = document.getElementById('input')
   const possibleKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

   if(possibleKeys.includes(ev.key)){
      input.value += ev.key
   }else if(ev.key === 'Backspace'){
      input.value = input.value.slice(0, -1)
      return
   }else if(ev.key === 'Enter'){
      calculate()
   }
}