/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de Doble Falta: verde casi negro del logo + blanco, con un lima suave de acento
        noche: '#1C2419',   // verde casi negro del logo: texto principal y encabezado
        cancha: {
          DEFAULT: '#2F3B2C', // verde oscuro: botones, links, selección
          claro: '#4B5B47',
          suave: '#E6EBE3',
        },
        vidrio: '#F3F5F2',  // fondo general
        pelota: '#C5D86D',  // acento: lima suave (pasos completos, destacados)
        red: { DEFAULT: '#B42318' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
