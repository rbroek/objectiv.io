module.exports = function (context, options) {
  return {
    name: 'add-htaccess',
    async postBuild({siteConfig = {}, routesPaths = [], outDir}) {
      // Print out to console all the rendered routes.
      routesPaths.map((route) => {
        console.log(route);
      });
    },
  };
};
