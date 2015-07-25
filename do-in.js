//// By Yair Even-Or
//// 2014


////// Do X in Y seconds /////////
function Doin(step, duration, done){
    this.duration = duration || 2; 
    this.step = step;
    this.done = done;
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
            if( t < 1 )
                that.RAF = requestAnimationFrame(run);  // can also use: setTimeout(run, 60/1000) 
            else if(that.done)
                that.done();
        })();
    }
}; 