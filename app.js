const path = require('path')
const express = require('express');


const bodyParser = require('body-parser');
var session = require('express-session');
// Routes Import
const home = require('./routes/home/home');
const adlogin = require('./routes/login/adminlogin');
const admin = require('./routes/admin/admin');
const user = require('./routes/user/users');
const userlogin = require('./routes/login/userlogin');


// Database
// const db = require('./config/database');
// const auth = require('./middleware/auth');
// const { allowedNodeEnvironmentFlags } = require('process');

// Test DB
// db.authenticate()
//     .then(() => console.log('Database connected...'))
//     .catch(err => console.log('Error: ' + err))

const app = express();
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '/public')
    // Setup static directory to serve
app.use(express.static(publicDirectoryPath))
    //static files
app.use(express.static("public"));
app.use(express.static("upload"));


//default option
// app.use(fileUpload());

// view engine setup
// app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: path.join(__dirname, 'views/partials') }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// application level middleware
// app.use(auth);

app.use(express.json());
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))

// Session
app.use(session({
    secret: "xyz888",
    resave: true,
    saveUninitialized: true
}));


// Routes
app.use('/', home);
app.use('/admin', admin);
app.use('/login', adlogin);
app.use('/users', user);
app.use('/user_login', userlogin);






const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));