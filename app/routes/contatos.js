/**
 * Created by rafaelmaia on 2/17/15.
 */
module.exports = function(app){
    var controller = app.controllers.contato;
    app.get('/contatos', controller.listaContatos);
    app.get('/contatos/:id', controller.obtemContato);
}