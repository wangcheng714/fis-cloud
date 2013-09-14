
'use strict';
/**
 * todo : 服务启动完善
 *  1. server端口指定
 *  2. 数据库端口指定
 *  3. 数据库db指定
 *  4. 自动启动数据库
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





