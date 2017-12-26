var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('pages'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './views');
app.set('view engine', 'pug');

var courses = [
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'Node.js'
    },
    {
        id: 3,
        name: 'Angular'
    }
];

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/pages/home.html');
});

app.get('/contacts', function (req, res) {
    res.sendFile(__dirname + '/pages/contacts.html');
});

app.get('/about_us', function (req, res) {
    res.sendFile(__dirname + '/pages/about_us.html');
});

app.get('/courses', function (req, res) {
    res.sendFile(__dirname + '/pages/courses.html');
});

app.get('/courses/:id', function (req, res) {
    console.log(req.params);
    var course = courses.find(function (course) {
        return course.id === Number(req.params.id);
    });
    res.render('index', { title: 'Courses', text: course.name});
});

app.listen(3000, function() {
    console.log('Listening to port 3000');
});
