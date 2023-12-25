// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "white": "#fff",
//         "black1": "#000",
//         "mediumblue": "#4500d8",
//         "gray-04": "#e4e7eb",
//         "gray-02": "#4b5768",
//         "special-main-bg": "#f4f5f7",
//         "gray-01": "#999da3",
//         "black": "#191d23",
//         "gray-03": "#d0d5dd"
//       },
//       "spacing": {},
//       "fontFamily": {
//         "semibold-16-24": "Inter",
//         "ubuntu": "Ubuntu"
//       }
//     },
//     "fontSize": {
//       "base": "1rem",
//       "sm": "0.88rem",
//       "inherit": "inherit"
//       }
//       },
//       "corePlugins": {
//       "preflight": false
//       }
//       }
  
// export default config

import type { Config } from 'tailwindcss'
const config: Config = {
  "content": [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  "theme": {
      "extend": {
          "colors": {
              "white": "#fff",
              "black1": "#000",
              "mediumblue": "#4500d8",
              "gray-04": "#e4e7eb",
              "gray-02": "#4b5768",
              "special-main-bg": "#f4f5f7",
              "gray-01": "#999da3",
              "black": "#191d23",
              "gray-03": "#d0d5dd"
          },
          "spacing": {},
          "fontFamily": {
              "semibold-16-24": "Inter",
              "ubuntu": "Ubuntu"
          }
      },
      "fontSize": {
          "base": "1rem",
          "sm": "0.88rem",
          "inherit": "inherit"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}

export default config