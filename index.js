// let conf = require("./config");
var express = require("express");
const bp = require('body-parser');
const cookieParser = require("cookie-parser");
var app = express();
var path = require("path");
const port = 80;
const expressLayouts = require('express-ejs-layouts');
var timeout = require('connect-timeout');
app.use(timeout('10s'));
const rateLimit = require("express-rate-limit");
const mapRoutes = require('express-routes-mapper');
let viewrouters = require('./routes/viewRouters');


const fetch = require('node-fetch');

const cors = require('cors');
let environment = 'production';
environment = "";
let farmapi = require('./farm_backend');


app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cookieParser());


const limiter = rateLimit({
    windowMs: 1 * 30 * 1000, // 15 minutes
    max: 2000 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

app.use(function(req, res, next) {
    var err = null;
    try {
        decodeURIComponent(req.path)
    } catch (e) {
        err = e;
    }
    if (err) {
        res.render('abc/app-404', {
            title: "Content not found",
            description: "Content not found"
        });
    }
    next();
});




app.use(express.static(__dirname + "/static/"));

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');







app.use("/farmapi", function(req, res) {
    // return res.send(farmapi);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(farmapi));
});

// app.use("/serok", function(req, res) {
//     res.render('abc/app/serok', {
//         title: "Swap NBG",
//         description: "Swap NBG from DAPP",
//         SERVER: conf.apiserver
//     });
// });



const dd = mapRoutes(viewrouters, 'controllers/');




app.use('/', dd);

app.use("*", function(req, res) {
    res.render('abc/index', {
        title: "Content not found",
        description: "Content not found",
        // SERVER: conf.apiserver
    });
});



app.listen(port, () => console.info(`App listen on port ${port}`));


//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