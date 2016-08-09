var path = require('path');
var fs = require('fs');
module.exports = function (dir) {
    dir = dir || '.';
    var data = Date();
    var timestamp = Date.parse(data);
    fs.readdir(dir, function (err, files) {
        if (err) {
            console.log(err)
        } else {
            files.forEach(function (index) {
                var path = dir + "/" + index;
                if (index.indexOf('.html') > 0) {
                    fs.readFile(path, 'utf-8', function (err, data) {
                        if (err) {
                            console.log(err)
                        } else {
                            var newcss = ".css?t="+timestamp;
                            var testcss = /[.]{1}css(\?t=[0-9]{0,})?/g;
                            var newjs = ".js?t="+timestamp;
                            var testjs = /[.]{1}js(\?t=[0-9]{0,})?/g;
                            var kg = //
                            var newdata =  (data.replace(testcss,newcss)).replace(testjs,newjs);
                            fs.writeFile(path,newdata,function(err){
                                if(err){
                                    console.log(err);
                                }else{
                                    console.log(newdata)
                                    console.log("html加时间戳完成")
                                }
                            });
                        }
                    })
                };
                //
                //
                //if (index == "css") {
                //    var css = dir + "/" + index;
                //    fs.readdir(css, function (err, data) {
                //        if (err) {
                //            console.log(err)
                //        } else {
                //            data.forEach(function (index) {
                //                console.log(index);
                //                var cssfile = dir+"/css/"+index;
                //                var excatly = cssfile.split("?")[0];
                //                var newname = excatly+"?t="+timestamp;
                //                fs.rename(cssfile,newname,function(err){
                //                    if(err){
                //                        console.log(err);
                //                    }else{
                //                        console.log("css加时间戳成功!");
                //                    }
                //                })
                //
                //            });
                //
                //        }
                //    })
                //
                //};
                //if (index == "js") {
                //    var js = dir + "/" + index;
                //    fs.readdir(js, function (err, data) {
                //        if (err) {
                //            console.log(err)
                //        } else {
                //            data.forEach(function (index) {
                //                console.log(index);
                //                var exactily = /[.]{1}js/g;
                //                if(exactily.test(index)){
                //                    var jsfile = dir+"/js/"+index;
                //                    var excatly = jsfile.split("?")[0];
                //                    var newname = excatly+"?t="+timestamp;
                //                    fs.rename(jsfile,newname,function(err){
                //                        if(err){
                //                            console.log(err);
                //                        }else{
                //                            console.log(index+"加时间戳成功!");
                //                        }
                //                    })
                //                }
                //
                //
                //            });
                //
                //        }
                //    })
                //
                //}


            })
        }
    })

}