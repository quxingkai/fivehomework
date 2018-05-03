var gulp = require('gulp');
var server = require('gulp-webserver');
var infoJson = require('./src/data/info.json');
var url = require('url');
gulp.task('default',function(){
    gulp.src('src')
        .pipe(server({
            post:9999,
            // open:true,
            livereload:true,
            middleware:function(req, res, next){
                if(/\/api\/index/g.test(req.url)){
                    var type = url.parse(req.url,true).query.type;
                    for(var i in infoJson){
                        if(i ==type){
                            res.end(JSON.stringify(infoJson[i]))
                        }
                    }
                    res.end();
                }else if(/\/api\/details/g.test(req.url)){
                    var favicon_id = url.parse(req.url,true).query.favicon_id;
                    for(var i in infoJson){
                        infoJson[i].forEach(function(val,i){
                            if(val.favicon_id &&val.favicon_id ==favicon_id){
                                res.end(JSON.stringify(val));
                            }
                        })

                    }

                }
                next();
            }
        }))
})