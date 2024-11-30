/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #1DD6C6, #14ACB7, #5A66B8, #5435AC, #CE73C3)',
        
        'dark-gradient':'linear-gradient(135deg, #1DD6C6, #14ACB7, #5A66B8, #5435AC, #CE73C3)',
        'dark-heading':'linear-gradient(135deg, rgba(77,124,167,1) 2%, rgba(12,55,126,1) 21%, rgba(2,24,65,1) 76%)',
        'dark-button':'linear-gradient(90deg, #FCAF2E, #FCB22F, #EC3B6C, #E32680)'
      },
      textColor: {
        'gradient': 'transparent',
      },
      backgroundClip: {
        'text': 'text',
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out',
        'zoom-in': 'zoomIn 1.5s ease-out',
        'slide-in-left': 'slideInLeft 1.5s ease-out',
        'fade-in-up': 'fadeInUp 1.5s ease-out',
        'bounce-in': 'bounceIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '50%': { transform: 'scale(1.2)', opacity: 1 },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ['text'],
    },
  },
  plugins: [],
}

