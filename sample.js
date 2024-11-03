const express = require('express');
const app = express();
const path = require('path');
const { title } = require('process');
const PORT = process.env.PORT || 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Define the views directory (if not in the default location 'views' folder)
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
    const chalk = (await import('chalk')).default;  // Dynamically import chalk
    res.render('index', { title: 'hello from ajay', data: ['a', 'b', 'c'] });
    console.log(chalk.green("Sample app listening on port " + PORT));
});

app.listen(PORT, () => {
    import('chalk').then((chalk) => {
        console.log(chalk.default.green("Sample app listening on port " + PORT));
    });
});
