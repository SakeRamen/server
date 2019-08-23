let Vue = require('vue');
let App = require('./registration.vue');

let vm = new Vue({
	el: "#app",
	render: function(cE) {
		return cE(App);
	}
});