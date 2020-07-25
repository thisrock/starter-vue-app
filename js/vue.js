var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
    test: 'dddddd'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data:{
     message: 'su zamandir sitedesin ' + new Date().toLocaleString() 
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'word1'},
      { text: 'word2'},
      { text: 'word3'}
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue JS'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
