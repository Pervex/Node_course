const express = require('express')
const hbs = require('hbs')


const app = express()
hbs.registerPartials(__dirname + '\\views\\partials')
app.set('view engine', 'hbs')


hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    console.log(text)
    return text.toUpperCase();
})


app.get('/', (req, res) => {

    res.send(`<h1>hellow express</h>`)

})


app.get('/home', (req, res) => {
    res.render('home.hbs', {
        page: "Home page"
    })
})


app.get('/about', (req, res) => {
    res.render('about.hbs', {
        page: "about page",

    })
})


app.listen(3001, (req, res) => {
    console.log("server connected")
})
