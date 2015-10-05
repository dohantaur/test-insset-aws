var Hapi = require('hapi');
var Good = require('good');

var server = new Hapi.Server();
server.connection({ port: 80 });

server.route([
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
  },
  {
    method: 'GET',
    path: '/test1',
    handler: function (request, reply) {
        reply('test 1');
    }
  },
  {
    method: 'GET',
    path: '/test2',
    handler: function (request, reply) {
        reply('test 2');
    }
  }
]);

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
