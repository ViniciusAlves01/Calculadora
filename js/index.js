import entertWithKeyboard from "./keyboardOperations.js" //Inserção dos caracteres através do teclado
import {insertWithClicks, clear} from "./insertWithClicks.js" //Operações ao clicar na tela
import calculate from "./calculate.js" //Calcula os elementos 
import copy from "./copy.js" //Copiar o resultado para a área de tranferência
import themeSwitcher from "./themeSwitcher.js" //Trocar o tema

//Alerando o foco inicial para o input
const input = document.getElementById('input')
input.focus()

input.addEventListener('keydown', entertWithKeyboard)//Inserção dos caracteres através do teclado
document.querySelectorAll('.charKeys').forEach(insertWithClicks)//Adiciona elementos a partir do clique no display
document.getElementById('eval').addEventListener('click', calculate)//Calcula os elementos 
document.getElementById('clear').addEventListener('click', clear)//Limpar os elementos do input
document.getElementById('copy').addEventListener('click', copy)//Copiar o resultado para a área de tranferência
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)//Trocar o tema