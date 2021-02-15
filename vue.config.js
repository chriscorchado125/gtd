module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/gtd' : '/',
  css: {
    loaderOptions: {
      sass: { // make these styles globally available
        prependData: `
          @import "@/scss/variables.scss";
          @import "@/scss/search.scss";
        `,
      },
    },
  },
};
