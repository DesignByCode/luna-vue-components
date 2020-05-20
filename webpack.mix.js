let mix  = require('laravel-mix')


mix.setPublicPath('dist')
	.sass('./dist/sass/style.sass', './css/style.css')
	.js('./src/index.js', './js/app.js')
    .options({
        processCssUrls: false
    })