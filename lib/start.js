'use strict';

exports.name = 'start';
exports.usage = '';
exports.desc = 'start mongodb and fis server';

exports.registry = function(commander){
    //todo 需要checking mongodb是否安装
    process.stdout.write('start node server : ');

    commander
        .option('-p, --port <int>', 'server listen port', parseInt, 3459);



    commander.action(function(){
        fis.server.start(commander.port);
    });


};
