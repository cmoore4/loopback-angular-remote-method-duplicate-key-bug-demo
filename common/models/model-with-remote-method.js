module.exports = function(ModelWithRemoteMethod) {

  ModelWithRemoteMethod.greet = function(msg, cb) {
    cb(null, 'Greetings... ' + msg);
  };
    
  ModelWithRemoteMethod.remoteMethod( 
    'greet',
    {
      http: {path: '/greet', verb: 'get'},
      accepts: {arg: 'msg', type: 'string'},
      returns: {arg: 'greeting', type: 'string'}
    }
  );
  
};
