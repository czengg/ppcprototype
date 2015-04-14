/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app, socketio) {

  app.post('/api/send', function (req, res) {
    console.log('GET: /api/send: id=' + req.body._id);
    socketio.emit('notification', {_id: req.body._id});
    res.send(200);
  });

  app.post('/api/poi', function (req, res) {
    console.log('GET: /api/send: id=' + req.body._id);
    socketio.emit('notification', {_id: req.body._id});
    res.send(200);
  });

  app.use('/api/pois', require('./api/poi'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
