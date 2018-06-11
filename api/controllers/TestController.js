/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    test : function(req,res){
    
        var ppr = req.param('ppr');
        var password = req.param('password');
        
        ActeService.connectAndRetreive(ppr,password,function(err,body){
            ActeService.getOne(body,function(fonct){
                    if(err) console.log(err);
                    return  "ok";
                })
            })
    }    
}