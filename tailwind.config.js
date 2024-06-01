/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        'main-0': '#1BA494',
        'main-1': '#249FA7',
        'main-2': '#30C1B0',
        'sub-0':  '#DDF2EF',
        'sub-1':  '#F3F3F3',
        'sub-2':  '#F5F5F5',
        'line-0': '#DDDDDD',
        'line-1': '#DBDBDB',
        'line-2': '#EDEDED',
        'white': '#ffffff',
        'blue-0': '#0B6BDC',      
        'red-0': '#DC0B56',
        'text-0': '#191919',
        'text-1': '#555555',
        'text-2': '#777777',
        'text-3': '#999999',
        'tag-0': '#F2F4F7',
        'border-0' : '#76c8bf'
      },
      fontFamily: {
        basic: ["Pretendard-Regular"],
      },    
    },    
  },  
  plugins: [],
};