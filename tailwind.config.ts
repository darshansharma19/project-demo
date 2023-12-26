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
//         "gray-03": "#d0d5dd",
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
    "dark": 'class',
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
              "gray-03": "#d0d5dd",
              "black-dark": "#000",
            "white-dark": "#fff",
            "gray": {
            "100": "#171717",
            "200": "#111",
            "300": "#020202",
            "400": "#010101"
            },
            "mediumpurple": "#c88aff",
            "gray-05": "#e8e8e8",
            "secondary": "#525256",
            "special-bg": "rgba(210, 210, 210, 0.25)",
            "gray-06": "#f3f3f3",
            "default-black": "#191919",
            "gray-04-dark": "#d1d1d1",
            "primary-color": "#299d91",
            "special-bg2": "rgba(255, 255, 255, 0.7)",
          },
          "spacing": {},
          "fontFamily": {
              "semibold-16-24": "Inter",
              "ubuntu": "Ubuntu",
              "regular-16-24": "Inter",
              "playfair-display": "'Playfair Display'",
          },
          "borderRadius": {
            "13xl": "32px"
            },
},
      "fontSize": {
        "base": "1rem",
        "xl": "1.25rem",
        "sm": "0.88rem",
        "xs": "0.75rem",
        "3xl": "1.38rem",
        "inherit": "inherit"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}

export default config