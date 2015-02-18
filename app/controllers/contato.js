/**
 * Created by rafaelmaia on 2/17/15.
 */


var contatos = [
    {_id: 1, nome: 'Contato Exemplo 1',
        email: 'cont1@empresa.com.br'},
    {_id: 2, nome: 'Contato Exemplo 2',
        email: 'cont2@empresa.com.br'},
    {_id: 3, nome: 'Contato Exemplo 3',
        email: 'cont3@empresa.com.br'}
];

module.exports = function(){
    var controller = {};
    controller.listaContatos = function(req, res){
        res.json(contatos);
    };

    controller.obtemContato = function(req, res){
        //console.log(req.params.id);
        var id = req.params.id;

        //JS Array.Filter: The filter() method creates a new array with all elements that pass the test implemented
        // by the provided function.
        //Parameters:
        //Callback function to test each element of the array.
        //thisArg optional. Value to use as this when executing callback.
        var contato = contatos.filter(function(contato){
            return contato._id == id;
        })[0];
        contato ?
            res.json(contato):
            res.status(400).send('Contato não encontrado');
    }
    return controller;
}