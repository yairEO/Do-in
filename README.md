[Do-In](https://yaireo.github.io/Do-in)
========

Run a task repeatedly in a fixed duration

A task runner which runs code repeatedly for X seconds and in a given duration of time and calling a `step` method with the progress so far.
Most basic example is counting to to a number.

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
}

// This function will be called once, when the task has finished
var done = function(){
    console.log('done counting!');
}

// Define the task's specific settings
var settings = {
    step     : step,  // callback function for every "frame" of the task
    duration : 3,     // in seconds
    done     : done,  // callback function when the task is done
    fps      : 60
}

// create a new "Do-in" task
var task = new Doin(settings)

task.start()
````

Run `task.pause()` to pause at any moment.

Run `task.start()` to continue (un-pause)

## Usage for DOM updates

When using `Do-in` for DOM updates, like the in the example or for animation purposes, I would recommend not to set an `fps`
option for the `Do-in` instance, but let it run at full-speed and **only** apply an *fps* mechanisn within your `step` method.
This will ensure smooth consistant frame-rate, and will not drop frames, because `Do-in` uses [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) internally.

## [Demo page](https://yaireo.github.io/Do-in)