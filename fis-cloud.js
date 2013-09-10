
'use strict';

/**
 * todo :
 *   1. fis cloud服务启动自动化完善
 *       启动能够指定服务器端口和数据库端口
 *       默认数据初始化工作
 *   2. 提供config api， 统一配置存贮和读取接口 .fiscloudrc
 */

var fis= module.exports = require('fis-cloud-kernel');

fis.cli = {};
fis.cli.name = 'fis-cloud';
fis.cli.commander = null;
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.cli.help = function(){
    console.log(fis.cli.info);
};

fis.cli.version = function(){
    console.log(fis.cli.info.version);
};

fis.cli.run = function(argv){
    var first = argv[2];

    if(first === '-h' || first === '--help'){
        fis.cli.help();
    } else if(first === '-v' || first === '--version') {
        fis.cli.version();
    } else if(first[0] === '-'){
        fis.cli.help();
    } else {
        var commander = fis.cli.commander = require('commander');
        var cmd = require('./lib/' + first + '.js');
        cmd.registry(
            commander
                .command(cmd.name || first)
                .usage(cmd.usage)
                .description(cmd.desc)
        );
        commander.parse(argv);
    }
};





