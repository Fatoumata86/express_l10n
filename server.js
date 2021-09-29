const express = require("express")

const app = express()

const port = 8000

const language = require('./translations.json')

const exphbs = require("express-handlebars")

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }))

app.get("/:lang?", (req, res) => {
    const lang = req.params.lang || "fr"
    // console.log(language[lang].pageTitle)
    // console.log(language[lang].title)
    res.render('home', {
       pageTitle: language[lang].pageTitle,
       title: language[lang].title,
       image: `https://flagcdn.com/32x24/${lang}.png`
    })
})

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
})