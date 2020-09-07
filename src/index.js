const app = require('./app');

// SETTINGS
app.listen(app.get('port'));
console.log('Jumanji', app.get('port'));
