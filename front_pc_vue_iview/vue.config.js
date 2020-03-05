module.exports = {
    outputDir:'../app/public/vue',
    publicPath:'./',
    devServer: {
        proxy: {
            '/api': {
            target: 'http://localhost:7001',
            // ws: true,
            changeOrigin: true,
            },
        }
    }
}