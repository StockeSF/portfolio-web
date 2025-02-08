/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background-color))',
        accent: 'rgb(var(--accent-color))',
        title: 'rgb(var(--title-color))',
        label: 'rgb(var(--label-color))',
        text: 'rgb(var(--text-color))',
        'bg-pill': 'rgb(var(--bg-pill-color))',
        'bg-card': 'rgb(var(--bg-card-color))',
      },
    },
  },
  plugins: [],
}
