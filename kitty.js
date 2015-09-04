var createObject, extendObject,
  sayHello, sayText, makeMammal,
  catPrototype, makeCat, garfieldCat;
// ** Utility function to set inheritance
// Cross-browser method to inherit Object.create()
// Newer js engines (v1.8.5+) support it natively
var objectCreate = function ( arg ) {
  if ( ! arg ) { return {}; }
  function obj() {};
  obj.prototype = arg;
  return new obj;
  };

Object.create = Object.create || objectCreate;

// ** Utility function to extend an object
extendObject = function ( orig_obj, ext_obj ) {
  var key_name;
  for ( key_name in ext_obj ) {
  if ( ext_obj.hasOwnProperty( key_name ) ) {
    orig_obj[ key_name]=ext_obj[ key_name ];
    }
  }
};

// ** object methods...
sayHello = function () {
  print( this.hello_text + ' says ' + this.name );
  };

sayText = function ( text ) {
  print( this.name + ' says ' + text );
  };

// ** makeMammal constructor
makeMammal = function ( arg_map ) {
  var mammal = {
    is_warm_blooded : true,
    has_fur : true,
    leg_count : 4,
    has_live_birth : true,
    hello_text : 'grunt',
    name : 'anonymous',
    say_hello : sayHello,
    say_text : sayText
    };
  extendObject( mammal, arg_map );
  return mammal;
  };

// ** use mammal constructor to create cat prototype
catPrototype = makeMammal({
  has_whiskers : true,
  hello_text : 'meow'
  });

giraffePrototype = makeMammal({
  neck_length : 0,
  hello_text : 'silence'
});

// ** cat constructor
makeCat = function( arg_map ) {
  var cat = Object.create( catPrototype );
  extendObject( cat, arg_map );
  return cat;
  };

// ** giraffe constructor
makeGiraffe = function( arg_map ) {
  var giraffe = Object.create( giraffePrototype );
  extendObject( giraffe, arg_map);
  return giraffe;
};

jerryGiraffe = makeGiraffe({
  name: 'Jerry',
  next_length : 15
});

// ** cat instance
garfieldCat = makeCat({
  name : 'Garfield',
  weight_lbs : 8.6
  });

// ** cat instance method invocations
garfieldCat.say_hello();
garfieldCat.say_text('Purr...');
jerryGiraffe.say_hello();
jerryGiraffe.say_text('Rrrrrrrr');

