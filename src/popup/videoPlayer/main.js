import Vue from 'vue'
Vue.config.productionTip = false
const ipc = require('electron').ipcRenderer;

new Vue({
    render: h => h('div', 'This is your video player, use a component here instead')
}).$mount('#app')

// listen for data from the main process if you want to, put this in your component if necessary
ipc.on('data', (event, data) => {
  // use data
})