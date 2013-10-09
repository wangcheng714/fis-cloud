'use strict';

exports.name = 'start';
exports.usage = '';
exports.desc = 'start mongodb and fis server';

exports.registry = function(commander){
    //todo 需要checking mongodb是否安装
    process.stdout.write('start node server : ');

    commander
        .option('--sport <int>', 'server listen port', parseInt, 3459)
        .option('--dbport <int>', 'db listen port', parseInt, 8888);



    commander.action(function(){
        fis.db.startDb(commander.dbport, "test");
        fis.server.start(commander.sport);
    });


};
