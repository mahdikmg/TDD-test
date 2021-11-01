module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    // to deploy, uncomment these lines
    // configureWebpack: {
    //   mode: 'production'
    // },
    publicPath: `${process.env.VUE_APP_PUBLIC_PATH}`,
}