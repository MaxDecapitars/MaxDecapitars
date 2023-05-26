import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-50': '#E2DFE6',
        'gray-100': '#B9AEC4',
        'gray-200': '#A69BB3',
        'gray-300': '#8d7d9e',
        'gray-400': '#78688A',
        'gray-500': '#69577C',
        'gray-600': '#685A77',
        'gray-700': '#534166',
        'gray-800': '#3C2C4E',
        'gray-900': '#291C36',
        'gray-950': '#160E1F',
        'primary-50': '#FFDBDB',
        'primary-100': '#FF7B7B',
        'primary-300': '#D44B4B',
        'primary-600': '#CD0404',
        'primary-700': '#960707',
        'primary-800': '#5C0707',
        'primary-900': '#380505',
        'primary-950': '#160202',
        'secondary-50': '#9094FF',
        'secondary-100': '#686DFF',
        'secondary-300': '#3136C2',
        'secondary-600': '#1E228F',
        'secondary-700': '#0C0F61',
        'secondary-800': '#08093F',
        'secondary-900': '#0A0C2B',
        'secondary-950': '#0E0C15',
      },
      fontFamily: {
        technor: ['Technor', 'sans-serif'],
        supreme: ['Supreme', 'sans-serif'],
      },
      backgroundSize: {
        120: '120%',
        150: '150%',
        170: '170%',
        200: '200%',
        250: '250%',
        300: '300%',
      },
      backgroundImage: {
        principal: 'linear-gradient(232deg, #CD0404 0%, #3136C2 72%)',
        'dark-principal': 'linear-gradient(232deg, #CD0404 0%, #0C0F61 72%)',
      },
      boxShadow: {
        principal: '#3136C2 0 0 10rem 6rem',
        'dark-principal': '#0C0F61 0 0 10rem 6rem',
        'blue-light': '#3136C2 0 0 50rem 5rem',
        'blue-dark': '#0C0F61 0 0 50rem 5rem',
        'red-light': '#CD0404 0 0 50rem 5rem',
        'red-dark': '#960707 0 0 50rem 5rem',
      },
      keyframes: {
        'sphere-red': {
          '0%': {
            transform: 'translateY(-5px)',
            'background-color': 'transparent',
          },

          '25%': {
            'background-color': '#D44B4B',
          },

          '50%': {
            transform: 'translateY(5px)',
          },

          '75%': {
            'background-color': '#FF7B7B',
          },

          '100%': {
            transform: 'translateY(-5px)',
            'background-color': '#5C0707',
          },
        },

        'sphere-blue': {
          '0%': {
            transform: 'translateY(-5px)',
            'background-color': 'transparent',
          },

          '25%': {
            'background-color': '#3136C2',
          },

          '50%': {
            transform: 'translateY(5px)',
            'background-color': '#0C0F61',
          },

          '75%': {
            'background-color': '#686DFF',
          },

          '100%': {
            transform: 'translateY(-5px)',
            'background-color': '#0A0C2B',
          },
        },

        'lds-ellipsis1': {
          '0%': {
            transform: 'scale(0)',
          },

          '100%': {
            transform: 'scale(1)',
          },
        },

        'lds-ellipsis2': {
          '0%': {
            transform: 'translate(0, 0)',
          },

          '100%': {
            transform: 'translate(1.5rem, 0)',
          },
        },

        'lds-ellipsis3': {
          '0%': {
            transform: 'scale(1)',
          },

          '100%': {
            transform: 'scale(0)',
          },
        },
      },
      animation: {
        'sphere-red':
          'sphere-red 15s cubic-bezier(.63,-0.08,.31,1.2) infinite alternate',
        'sphere-blue':
          'sphere-blue 15s cubic-bezier(.63,-0.08,.31,1.2) infinite alternate',

        'lds-ellipsis1':
          'lds-ellipsis1 0.6s cubic-bezier(0, 1, 1, 0) infinite',
        'lds-ellipsis2':
          'lds-ellipsis2 0.6s cubic-bezier(0, 1, 1, 0) infinite',
        'lds-ellipsis3':
          'lds-ellipsis3 0.6s cubic-bezier(0, 1, 1, 0) infinite',
      },
    },
    screens: {
      tablet: '40em',
      laptop: '64em',
      desktop: '80em',
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: {
          fontFamily: theme('fontFamily.supreme'),
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: theme('fontFamily.technor'),
        },
        p: {
          fontFamily: theme('fontFamily.supreme'),
        },
      });
    }),
  ],
};
