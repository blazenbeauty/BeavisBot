exports.names = ['.panda'];
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function (data) {
    var strings = [
        'http://fc04.deviantart.net/fs70/f/2011/202/7/7/nyan_panda_by_cucureuill-d419c1k.png',
        'http://www.tehcute.com/pics/201107/Red-panda.jpg',
        'http://hdwallpapermania.com/wp-content/uploads/2014/01/Red-Panda-Cool-HD-Wallpaper.jpg',
        'http://wallpaperlikes.com/wp-content/uploads/2014/01/Cute-Red-Panda-hd.jpg',
        'http://img2.wikia.nocookie.net/__cb20131102020711/austinally/images/3/36/Red-panda-mom.jpg',
        'http://www.bubblews.com/assets/images/news/866355749_1370199483.png',
        'http://i.imgur.com/WN5UZ4g.gif'
    ];
    var randomIndex = _.random(0, strings.length-1);
    bot.sendChat(strings[randomIndex]);
};