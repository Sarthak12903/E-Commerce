/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: { 
      primary: '#3498DB', // Calm Blue 
       hover:'#2980B9',
      secondary: '#E74C3C', // Vibrant Red 
      accent: '#F1C40F', // Bright Yellow 
      background: '#ECF0F1', // Light Gray 
      text: '#2C3E50',// Deep Navy
      htext:'#fffff' ,
          },
    },
  },
  plugins: [],
 }



 
// Pages and Components:
// 1. Header and Navigation:
// Primary: #3498DB for the background color to make it stand out and be easily recognizable.

// Hover: #2980B9 for navigation links on hover to create a nice interaction.

// Text: #FFFFFF for text color to ensure readability against the primary background.

// 2. Hero Section:
// Background: #ECF0F1 for a clean, light background that lets your content pop.

// Primary: #3498DB for buttons or call-to-action elements.

// Text: #2C3E50 for the main heading and paragraph text.

// 3. Products Section:
// Background: #FFFFFF for product cards to keep the focus on the products.

// Accent: #F1C40F for product prices or special offer badges to draw attention.

// Text: #2C3E50 for product names and descriptions.

// 4. Footer:
// Secondary: #E74C3C for the footer background to give a bold finish.

// Text: #FFFFFF for footer text to maintain contrast and readability.

// Accent: #F1C40F for any icons or links to make them pop.

// 5. Buttons:
// Primary: #3498DB for primary buttons.

// Hover: #2980B9 for button hover effects.

// Secondary: #E74C3C for secondary buttons or alternative actions.

// Accent: #F1C40F for special or highlighted buttons.

// 6. Forms:
// Background: #FFFFFF for input fields.

// Primary: #3498DB for submit buttons.

// Text: #2C3E50 for labels and placeholder text.

// 7. Alerts and Notifications:
// Secondary: #E74C3C for error messages.

// Accent: #F1C40F for warnings or important notices.

// Primary: #3498DB for success messages.

// Additional Suggestions:
// Links: #3498DB for links, with a hover state of #2980B9 to maintain consistency.

// Icons: Use the accent color #F1C40F for icons to give them a vibrant touch.

