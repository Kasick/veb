/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

      screens: {
        'lov': '300px',
        // => @media (min-width: 300px) { ... }
  
        'laptop': '500',
        // => @media (min-width: 500px) { ... }
  
        'desktop': '600px',
        // => @media (min-width: 600px) { ... }
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        
      },
      spacing: {
        sm: '40px',
        md: '70px',
        lg: '100px',
        xl: '60px',
        io: '660',
        ii: '140px',
       },       
      backgroundColor: theme => ({
      ...theme('colors'),
      'bleck1': '#040406',
      'bleck': '#040406',
      'danger': '#e3342f',
      'grine-yai': 'B9FF66',
      'darc-blec': '000000',
      'oreng':'FF9900',
      'dart-toy':'191A23',
     }),
     DEFAULT: '1px',
        '0': '1px',
        '2': '2px',
       '3': '3px',
        '4': '4px',
       '6': '6px',
       '8': '8px',
       'ii': '140px',

    },
    fontSize: {
      'xs': '.60px',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
      
     },

    
   
  },
  plugins: [],
}