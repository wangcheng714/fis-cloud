'use strict';

//启动server
//启动 db

exports.name = 'start';
exports.usage = '';
exports.desc = 'start mongodb and fis server';

exports.registry = function(commander){
    //todo 需要checking mongodb是否安装
    process.stdout.write('start node server : ');
    fis.server.start();
};
