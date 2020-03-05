module.exports = {
    outputDir:'../app/public/admin',
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