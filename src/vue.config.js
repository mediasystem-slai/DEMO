module.exports = {
    //... 
    //pages: {
    //  index: 'src/main.js', // your main window
    //  video_player: 'src/popup/videoPlayer/main.js' // your video window
    //},
    pluginOptions: {
      electronBuilder: {
        preload: 'src/preload.js'
        // Or, for multiple preload files:
        // preload: { preload: 'src/preload.js', otherPreload: 'src/preload2.js' }
      }
    }
  }