do-in
========

Do something repeatedly in X time.
A task runner which runs any code repeatedly in a given duration of time. Like counting to a number for example:

##[Demo page](http://codepen.io/vsync/pen/deoxg)

### Basic usage

```javascript

// This function will be called repeatedly until the duration has reached
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

// This function will be called once, when the task has finished
var done = function(){
    console.log('done counting!');
};


// Define the task's specific settings
var settings = {
    step     : step,
    duration : 3,
    done     : done,
    fps      : 24 // optional. Default is requestAnimationFrame
};

// create a new "Do-in" task
var task = new Doin(settings);

task.start();

// Rnu "task.pause()" to stop as any moment. Run "task.start()" to continue the task

```

