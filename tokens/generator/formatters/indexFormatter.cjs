const path = require("path");

module.exports = function ({ dictionary }) {
  const hasComponent = dictionary.allProperties.some(
    (token) =>
      token.filePath &&
      token.filePath.includes(`${path.sep}component${path.sep}`)
  );
  return `
/* Auto-generated entry point */

@forward "./semantic";${hasComponent ? '\n@forward "./component";' : ""}
`;
};
