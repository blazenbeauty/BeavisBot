exports.names = ['.myjoindate'];
exports.hidden = false;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    joined = _.findWhere(room.users, {id: data.fromID}).dateJoined
    bot.sendChat(data.from + ', you joined on ' + joined + '!');
};