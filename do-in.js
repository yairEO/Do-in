//// By Yair Even-Or
//// 2014


////// Do X in Y seconds /////////
function Doin(settings){  //step, duration, done
    this.duration = settings.duration || 2; 
    this.step = settings.step;
    this.done = settings.done;
	this.fps = typeof settings.fps != "undefined" ? settings.fps : null;
    this.RAF;
};

Doin.prototype = {
    run : function(){
        "use strict";
        cancelAnimationFrame(this.RAF);
		
        var startTime = new Date(),
			that = this;

        (function run(){
            var now, elapsed, t;

            now = new Date(); 
            elapsed = (now - startTime)/1000;
            t = (elapsed/that.duration);

            // do a step on each frame
            that.step(t, elapsed); 

            // stop sequence if duration has passed
            if( t < 1 ){
				if( that.fps )
					setTimeout(function(){ requestAnimationFrame(run) }, 1000/that.fps);
				else
					that.RAF = requestAnimationFrame(run);  // can also use: setTimeout(run, 60/1000)
			}
            else if(that.done)
                that.done();
        })();
    }
}; 