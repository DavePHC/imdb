import postcssPixToRem from "postcss-pxtorem"

export default ({ env }) => {
  const isProduction = env === "production"
  const plagins = []

  if (isProduction) {
    plagins.push(
      postcssPixToRem({
        propList: ["*"],
        mediaQuery: true
      })
    )
  }

  return {
    plagins,
  }
}