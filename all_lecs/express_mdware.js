const express = require('express')
const hbs = require('hbs')
const fs = require('fs')


const app = express()
hbs.registerPartials(__dirname + '\\views\\partials')
app.set('view engine', 'hbs')


hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {

    return text.toUpperCase();
})

app.use((req, res, next) => {
    let date = new Date().toString()
    let log = `${date}, ${req.method}, ${req.url}`

    fs.appendFile('serverlog', log, (err) => {
        if (err) {
            console.log("Error in creating log fie")
        }
        else {
            console.log(log);
        }
    })

    next();
})


app.use((req,res,next)=>{
    res.render('maintainance.hbs')
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