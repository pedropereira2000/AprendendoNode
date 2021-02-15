/* importar as configurações do servidor */
var app = require('./config/server');

// parametrizar a porta de escura
app.listen(30000, function(){
    console.log("Servidor online");
})