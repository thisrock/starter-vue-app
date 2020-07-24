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
