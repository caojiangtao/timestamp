var fs = require('fs');
module.exports = function (dir) {
    dir = dir || '.';
    if (dir.indexOf(".html") > 0) {
        addtimestimp(dir);
    } else {
        fs.readdir(dir, function (err, files) {
            if (err) {
                console.log(err)
            } else {
                files.forEach(function (index) {
                    var path = dir + "/" + index;
                    if (index.indexOf('.html') > 0) {
                        addtimestimp(path);
                    }
                })
            }
        })
    }
};

function addtimestimp(path){
    fs.readFile(path, 'utf-8', function (err, data) {
        if (err) {
            console.log(err)
        } else {
            var nowtime = Date();
            var timestamp = Date.parse(nowtime);

            var newcss = ".css?t=" + timestamp;
            var testcss = /[.]{1}css(\?t=[0-9]{0,})?/g;
            var newjs = ".js?t=" + timestamp;
            var testjs = /[.]{1}js(\?t=[0-9]{0,})?/g;

            var newpng = ".png?t=" + timestamp;
            var testpng = /[.]{1}png(\?t=[0-9]{0,})?/g;

            var newjpg = ".jpg?t=" + timestamp;
            var testjpg = /[.]{1}jpg(\?t=[0-9]{0,})?/g;

            var newdata = (((data.replace(testcss, newcss)).replace(testjs, newjs)).replace(testpng, newpng)).replace(testjpg, newjpg);
            fs.writeFile(path, newdata, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(path+"加时间戳完成")
                }
            });
        }
    })
}