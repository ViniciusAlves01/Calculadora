export default function calculate(){
   const result = document.getElementById('result')
   result.value = '[ERROR] Insira um valor válido.'
   result.classList.add('error')
   result.value = eval(input.value)
   result.classList.remove('error')
}