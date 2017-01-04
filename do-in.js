// Do X in Y seconds
// By Yair Even-Or
// 2014

function Doin(settings){  //step, duration, done
    this.duration = settings.duration || 2;
    this.step = settings.step;
    this.done = settings.done;
    this.fps = typeof settings.fps != "undefined" && settings.fps > 0 ? settings.fps : null;
    this.RAF;
    this.startTime;
    this.isPlaying;
};

Doin.prototype = {
    start : function(){
        window.cancelAnimationFrame( this.RAF );
        // if "startTime" is not "null", meaning the animation is not yet finished, so change the start time to compensate for the offset
        this.startTime = this.startTime ? new Date().getTime() - this.pauseTime : new Date().getTime();

        this.play();
        this.isPlaying = true;
    },

    play : function(){
        var that = this, now, elapsed, t;

        now = new Date();
        elapsed = (now - this.startTime)/1000;
        t = (elapsed/this.duration);

        // do a step on each frame
        this.step( t, elapsed );

        // stop sequence if duration has passed
        if( t < 1 ){
            if( this.fps )
                that.RAF = setTimeout(function(){ window.requestAnimationFrame(that.play.bind(that)) }, 1000/this.fps);
            else
                this.RAF = window.requestAnimationFrame(this.play.bind(this));
        }
        else{
            this.done && this.done();
            this.startTime = this.isPlaying = false;
        }
    },

    pause : function(){
        window.cancelAnimationFrame( this.RAF );
        clearTimeout( this.RAF );
        this.isPlaying = false;
        this.pauseTime = new Date().getTime() - this.startTime;
    }
};
