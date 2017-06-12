var fs = require('fs');
var path = require('path');
var filePath = path.resolve();
module.exports = function(dir) {
		dir = dir || '.';
		readFile(filePath,dir)

		function readFile(readurl,dir) {
			var filepath = path.join(readurl, dir);
			fs.stat(filepath, function(err, stats) {
				if(err) {
					console.log("three===="+err);
					return;
				}
				if(stats.isFile()) {
					if( dir.indexOf(".html") > 0 || dir.indexOf(".tpl") > 0) {
						addtimestimp(filepath);
					}
				}
			});
			fs.readdir(path.join(readurl, dir), function(err, files) {
					if(err) {
						console.log("tow==="+err);
						return;
					}
					var onepath = path.join(readurl, dir);
					files.forEach(function(filename) {
						var _path = path.join(onepath, filename);
						fs.stat(_path, function(err, stats) {
							if(err) {
								console.log("three===="+err);
								return;
							}
							if(stats.isFile()) {
								console
								if( filename.indexOf(".html") > 0 || filename.indexOf(".tpl") > 0) {
									addtimestimp(path.join(readurl, dir+'/'+filename));
									console.log(filename)
								}
							} else if(stats.isDirectory()) {
								readFile(readurl,dir+'/'+filename);
							}
						})
					})
				})
			}
		};



		function addtimestimp(path) {
			fs.readFile(path, 'utf-8', function(err, data) {
				if(err) {
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
					fs.writeFile(path, newdata, function(err) {
						if(err) {
							console.log(err);
						} else {
							console.log(path + "加时间戳完成")
						}
					});
				}
			})
		}