module.exports = {
    mode: "jit",
    content: [
      "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,html,mdx}"
    ],
    darkMode: "class",
    theme: {
      screens: {
        md: { max: "1050px" },
        sm: { max: "550px" }
      },
      extend: {
        colors: {
          amber: {
            600: "var(--amber_600)",
            "600_01": "var(--amber_600_01)"
          },
          black: {
            900: "var(--black_900)",
            "900_00": "var(--black_900_00)",
            "900_01": "var(--black_900_01)",
            "900_02": "var(--black_900_02)",
            "900_0a": "var(--black_900_0a)",
            "900_14": "var(--black_900_14)",
            "900_22": "var(--black_900_22)",
            "900_34": "var(--black_900_34)",
            "900_46": "var(--black_900_46)",
            "900_59": "var(--black_900_59)",
            "900_6c": "var(--black_900_6c)",
            "900_7d": "var(--black_900_7d)",
            "900_8e": "var(--black_900_8e)",
            "900_9d": "var(--black_900_9d)",
            "900_a9": "var(--black_900_a9)",
            "900_af": "var(--black_900_af)",
            "900_b2": "var(--black_900_b2)"
          },
          gray: {
            200: "var(--gray_200)",
            700: "var(--gray_700)",
            "100_01": "var(--gray_100_01)",
            "900_00": "var(--gray_900_00)",
            "900_01": "var(--gray_900_01)",
            "900_02": "var(--gray_900_02)",
            "900_03": "var(--gray_900_03)",
            "900_04": "var(--gray_900_04)",
            "900_05": "var(--gray_900_05)",
            "900_4c": "var(--gray_900_4c)",
            "900_72": "var(--gray_900_72)"
          },
          red: {
            800: "var(--red_800)",
            900: "var(--red_900)"
          },
          white: {
            a700: "var(--white_a700)",
            a700_19: "var(--white_a700_19)"
          }
        },
        boxShadow: {
          xs: "0 1px 3px 0 #25201f4c"
        },
        fontFamily: {
          inter: "Inter",
          kantumruypro: "Kantumruy Pro",
          krub: "Krub"
        },
        backgroundImage: {
          "linear-gradient-1": "linear-gradient(180deg, #00000000, #00000002, #00000000, #00000014, #00000022, #00000034, #00000046, #00000059)",
          gradient1: "linear-gradient(180deg, #00000059, #0000006c, #00000070, #000000, #000000, #00000039, #000000, #000000b2)",
          gradient2: "linear-gradient(180deg, #16161600, #16161672)"
        }
      }
    },
    plugins: [require("@tailwindcss/forms")]
  };
  