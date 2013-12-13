//stop server
//stop db


exports.name = 'stop';
exports.usage = '';
exports.desc = 'stop fis server';

exports.registry = function(commander){

    process.stdout.write('stop node server : ');

    commander.action(function(){
        fis.server.stop();
    });
}