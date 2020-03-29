module.exports = {
    plugins: process.env.NODE_ENV === 'production' ? [
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default'
          }),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './public/**/*.html',
                './amp/**/*.html'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ] : [
        require('tailwindcss'),
        require('autoprefixer')
    ]
}