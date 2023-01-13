module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  previewHead: (head) => {
    return `
  ${head}
  <link
    href="https://cdn.siux.studio/static/brand/632213d5a467b1178b31dde0/latest/siux.main.css"
    type="text/css"
    rel="stylesheet"
  />
  <link
    href="https://cdn.siux.studio/static/brand/632213d5a467b1178b31dde0/latest/siux.main.responsive.css"
    type="text/css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Inter:100,200,300,500,600,700,800,900|Lato:100,300,700,900|Overpass+Mono:300,500,600,700"
    type="text/css"
    rel="stylesheet"
  />`;
  },
};
