export const defaultTheme = {
    white: '#fff',
  
    'gray-100': '#E1E1E6',
    'gray-300': '#C4C4CC',
    'gray-400': '#8D8D99',
    'gray-500': '#7C7C8A',
    'gray-600': '#323238',
    'gray-700': '#29292E',
    'gray-800': '#202024',
    'gray-900': '#121214',
  
    'green-300': '#00B37E',
    'green-500': '#00875F',
    'green-700': '#015F43',
  
    'red-300': '#F75A68',
    'red-500': '#AB222E',
    'red-700': '#7A1921',
  } as const

  // Sem o as const o nosso typeScript vai indenticiar o valor como string, 
  //Já com o as const ele vai indentificar o valor atribuido ao nosso grenn-500 por exemplo... no caso o Hex