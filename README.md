#timestamp007#

    How to used? :
    
   <strong> npm install timestamp007 -g;</strong>        

    
    When installing the end 
        如：你的project项目下的test目录下的.html和.tpl里的.js,.css,.jpg,.png需要加时间戳。
       
        $ cd /project        //进入到你的项目上一级目录
        $  timestamp  action test  //执行###
        
        or  
        
        $ cd / project  
        $ cd / project/test
        $  timestamp action index.html    //对单个文件加时间戳   
        
       For example:
         
        <!DOCTYPE html>
            <html>
            	<head>
            		<meta charset="utf-8">
            		<title></title>
            		<link rel="stylesheet" type="text/css" href="./css/headerandfooter.css?t=1470744033000" />
            		<script type="text/javascript" src="./static/scripts/setcookie.js?t=1470744033000"></script>
            		<body>
            		<a href="connect/qq"><img src="images/qq-icon.png?t=1470800159000" width="50" /></a>
                    					<a href="./connect/weixin"><img src="images/wx-icon.png?t=1470800159000" width="50" /></a>
                    					<a href="./connect/weibo"><img src="images/sina-icon.png?t=1470800159000" width="50" /></a>
                    					<a href="./connect/weibo"><img src="images/sina-icon.jpg?t=1470800159000" width="50" /></a>
            		</body>
            </html>
       
       
       
       
##Commands:##

    help          显示使用帮助
    action [dir]  加时间戳

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

