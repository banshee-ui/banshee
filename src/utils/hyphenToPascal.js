/* eslint-disable */
export default str =>
  str.replace(/(\-|^)([a-z])/gi, (match, delimter, hyphenated) => hyphenated.toUpperCase())
