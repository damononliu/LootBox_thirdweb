// Express server on port 3000
var app = express();
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});



// Return the current time
function getTime() {
    return new Date().toLocaleTimeString();
}

// Return the current date
function getDate() {
    return new Date().toLocaleDateString();
}

// find the maximum value in an array
function findMax(arr) {
    return Math.max.apply(null, arr);
}

