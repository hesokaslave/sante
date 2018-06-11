/**
 * HomeControllerController
 *
 * @description :: Server-side logic for managing Homecontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    get : function(req,res){
        var doti = req.param('doti');
        var pass = req.param('password');
        HomeService.getAll(doti,pass,function(err,result){
            if(err) console.log(err)
            return res.json(result)
        })
    }
	
};

