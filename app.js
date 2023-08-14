import express from 'express';
import morgan from 'morgan';

const app = express();

app.set('view engine', 'ejs');
app.listen(3000);

//middleware and static files
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.send('<p>This is the express home page</p>')
    //res.sendFile('./views/index.html', {root: __dirname})
    res.render('index', {title: 'Home'})
})
app.get('/about', (req, res) => {
    //res.send('<p>This is the express home page</p>')
    //res.sendFile('./views/about.html', {root: __dirname})
    res.render('about', {title: 'About'})
})

app.get('/blog', (req, res) => {
    const blogs = [
        {blogTitle: 'Migraine', snipet: 'Probably you have come in contact with friends or relatives that usually have severe headach, this is refers to migraine.'},
        {blogTitle: 'Coding', snipet: 'Programming is one of the most recruitive proffession. programmers earn approximately $3,000 monthly accross the europe'}
    ]
    res.render('blog', {blogs})
})
// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about', {title: 'About'})
})

//404 Page
app.use((req, res) => {
    //res.sendFile('./views/404.html', {root: __dirname})
    res.render('404', {title: '404'})
})


/* const userDetails = [
    {names: 'Muhammed', age: 25, birthPlace: 'Okene'},
    {names: 'Israel', age: 34, birthPlace: 'Otuoke'},
    {names: 'Beshel', age: 45, birthPlace: 'Otupo'}
]
if(userDetails.length > 0){
    userDetails.forEach((details) => {
        console.log(details.names, details.age)
    })
}else{
    console.log('Empty Array');
} */