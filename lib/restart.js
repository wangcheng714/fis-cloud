exports.name = 'restart';
exports.usage = '';
exports.desc = 'restart fis server';

exports.registry = function(commander){

    process.stdout.write('restart fis server : ');

    commander.action(function(){
        fis.server.restart();
    });
}