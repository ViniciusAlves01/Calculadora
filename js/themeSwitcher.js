export default function (){
   const main = document.querySelector('main')
   const root = document.querySelector(':root')
   const input = document.getElementById('input')
   const result = document.getElementById('result')

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
}