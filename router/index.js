var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var config  =  require('../config/config.json');
var md5 = require('md5');

  router.get("/videos/:page",function(req,res){
    var page = req.params.page;
    var limit = 8;
    if(page>1){
      var start = (page-1)*limit;
    }
    else{
      page=1;
      var start = (page-1)*limit;
    }
    var db = new Database(config);
    db.query("SELECT * FROM videos a,categories b where a.categories_id=b.id ORDER BY a.id DESC limit ?,?",[start,limit]).then( rows => {
        // do something with the result
        //res.json(rows);
        var data = 
          {
            "page_currents":1,
            "results":rows
          };
        res.json(data);

    } );
   
    
  });
  router.get("/videos",function(req,res){
    var db = new Database(config);
    db.query("SELECT * FROM videos a,categories b where a.categories_id=b.id").then( rows => { 
        res.json(rows);
    } );
  });



//categories
router.get("/videos/tag/:tag",function(req,res){
      var tag = req.params.tag;
    var db = new Database(config);
    db.query("SELECT * FROM videos a,categories b where a.categories_id=b.id and b.link_tag=? order by a.id",[tag]).then( rows => { 
        res.json(rows);
    } );
});

//tag video
router.get("/videos/link/:link",function(req,res){
    var link = req.params.link;
    var db = new Database(config);
    db.query("SELECT * FROM videos a,categories b where a.categories_id=b.id and a.link=?",[link]).then( rows => { 
        res.json(rows);
    } );
});











  class Database {
    constructor( config) {
        this.connection = mysql.createConnection( config);
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}



module.exports = router
