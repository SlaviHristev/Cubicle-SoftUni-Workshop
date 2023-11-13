const handleBars = require('express-handlebars');

function handleBarsConfig(app){
    app.engine('hbs', handleBars.engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
};

module.exports = handleBarsConfig;