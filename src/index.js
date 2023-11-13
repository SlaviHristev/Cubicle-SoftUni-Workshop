const express = require('express');
const port = 5000;

const expressConfig = require('./config/expressConfig');
const handleBarsConfig = require('./config/handlebarsConfig');
const dbConfig = require('./config/mongooseConfig');
const routes = require('./routes');


const app = express();
dbConfig()
.then(console.log('Db connected succesfully'));

expressConfig(app);
handleBarsConfig(app);
app.use(routes);


app.listen(port, () => console.log(`Server is running on ${port}...`));