//declaração de algumas variáveis globais úteis
const main = document.querySelector('main')
const input = document.getElementById('input')
const result = document.getElementById('result')
const root = document.querySelector(':root')
input.focus()
//Elementos que estarão disponíveis 
const possibleKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//Inserção dos caracteres através do teclado
input.addEventListener('keydown', function(ev){
   ev.preventDefault()

   if(possibleKeys.includes(ev.key)){
      input.value += ev.key
   }else if(ev.key === 'Backspace'){
      input.value = input.value.slice(0, -1)
      return
   }else if(ev.key === 'Enter'){
      calculate()
   }
})

//Calcula os elementos 
document.getElementById('eval').addEventListener('click', calculate)
function calculate(){
   result.value = '[ERROR] Insira um valor válido.'
   result.classList.add('error')
   result.value = eval(input.value)
   result.classList.remove('error')
}

//Adiciona elementos a partir do clique no display
document.querySelectorAll('.charKeys').forEach(function(charKey){
   charKey.addEventListener('click', function(){
      input.value += charKey.dataset.value
   })
})

//Limpar os elementos do input
document.getElementById('clear').addEventListener('click', function(){
   input.value = ''
})

//Copiar o resultado para a área de tranferência
document.getElementById('copy').addEventListener('click', function(ev){
   const button = ev.currentTarget

   if(button.innerText === 'Copiar'){
      button.innerText = 'Copiado!'
      button.classList.add('copySuccess')
      navigator.clipboard.writeText(result.value)
   }else{
      button.innerText = 'Copiar'
      button.classList.remove('copySuccess')
   }
})

//Trocar o tema
document.getElementById('themeSwitcher').addEventListener('click', function(){
   if(main.dataset.theme === 'dark'){
      root.style.setProperty('--bg-color', '#fff')
      root.style.setProperty('--accent-color', '#fb4c2d')
      root.style.setProperty('--font-color', '#4a4a4a')
      root.style.setProperty('--border-color', '#4a4a4a')
      root.style.setProperty('--keys-color', '#fff9f1')
      root.style.setProperty('--shadow-copy-color', '#fb4c2dad')
      input.style.backgroundColor = '#fff9f1'
      result.style.backgroundColor = '#fff9f1'
      main.dataset.theme = 'light'
   }else{
      root.style.setProperty('--bg-color', '#1a1a1a')
      root.style.setProperty('--accent-color', '#fb4c2d')
      root.style.setProperty('--font-color', '#fff')
      root.style.setProperty('--border-color', '#4a4a4a')
      root.style.setProperty('--keys-color', '#222222')
      root.style.setProperty('--shadow-copy-color', '#fb4c2dad')
      input.style.backgroundColor = '#1a1a1a'
      result.style.backgroundColor = '#1a1a1a'
      main.dataset.theme = 'dark'
   }
})