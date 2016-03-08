require('aplayer/dist/APlayer.min.css');
require('videojs/dist//video-js/video-js.min.css');
require.context('videojs/dist//video-js/font');

require('./less/style.less');

require('./js/main.js');


require.context('./media');
require.context('./images');