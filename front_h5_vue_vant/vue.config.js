module.exports = {
    outputDir:'../app/public/h5',
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