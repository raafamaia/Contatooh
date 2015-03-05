/**
 * Created by rafaelmaia on 2/17/15.
 */
var sanitize = require('mongo-sanitize');


module.exports = function (app) {

    var Contato = app.models.contato;

    var controller = {};


    controller.listaContatos = function(req, res){
        Contato.find().populate('emergencia').exec()
            .then(
                function(contatos){
                    res.json(contatos);
                },
                function(erro){
                    console.log(erro);
                    res.status(500).json(erro);
                }
            )
    };

    controller.salvaContato = function(req, res){
        var _id = req.body._id;

        /*
        Independente da quantidade de parâmetros,
        apenas selecione os que quer atualizar
        nome, email, emergência.
        */

        var dados = {
            nome: req.body.nome,
            email: req.body.email,
            emergencia: req.body.emergencia || null
        };


        //Aparentemente desnecessário.
        //req.body.emergencia = req.body.emergencia || null;

        if(_id){
            // use dados ao inves de req.body
            Contato.findByIdAndUpdate(_id, dados).exec()
                .then(
                    function(contato){
                        res.json(contato);
                    },
                    function(erro){
                        console.error(erro);
                        res.status(500).json(erro);
                    }
                )
        }else{
            // use dados ao inves de req.body
            Contato.create(dados)
                .then(
                    function(contato){
                        res.status(201).json(contato);
                    },
                    function(erro){
                        console.log(erro);
                        res.status(500).json(erro);
                    }
                )
        }
    };

    controller.obtemContato = function(req, res){
        var _id = req.params.id;
        Contato.findById(_id).exec()
            .then(
                function(contato){
                    if(!contato) throw new Error("Contato não encontrado!");
                    res.json(contato);
                },
                function(erro){
                    console.log(erro);
                    res.status(404).json(erro);
                }
            );
    };

    controller.removeContato = function(req, res){

        //sanitize against query injection with query selectors ($)
        var _id = sanitize(req.params.id);
        Contato.remove({"_id": _id}).exec()
            .then(
                function(){
                    res.end();
                },
                function(erro){
                    return console.error(erro);
                }
            )
    };

    return controller;
};