var http = require('http'),
    faye = require('faye');

var server = http.createServer(),
    bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});

Authorization = {
  incoming: function(message, callback){
    if(message.channel == '/meta/subscribe' && message.subscription.match(/\*/)) {
      message.error = "Can't subscribe with wildcards";
    }
    callback(message);
  }
}

bayeux.addExtension(Authorization);

bayeux.attach(server);
server.listen(8081);

