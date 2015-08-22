do-in
========

Do something in X time.

A task runner to do any job in a given duration of time.
(movement of elements is not for this, since it can be done via CSS)

### Basic usage

```javascript

	var step = function(t, elapsed){
		// easing 
		t = t*t*t;
	  
		// calculate new value
		var value = 300 * t; // will count from 0 to 300
	  
		// limit value ("t" might be higher than "1")
		if( t > 0.999 )
			value = 300;
	  
		// print value (converts it to an integer)
		someElement.innerHTML = value|0;
	};
	
	var done = function(){
		console.log('done counting!');
	};
	
	
	// Do-in settings object
	var settings = {
		step     : step,
		duration : 3,
		done     : done,
		fps      : 24 // optional. Default is requestAnimationFrame
	};
	
	// initialize "Do-in" instance 
	var doin = new Doin(settings);
	
```

##[Demo page](http://codepen.io/vsync/pen/deoxg)