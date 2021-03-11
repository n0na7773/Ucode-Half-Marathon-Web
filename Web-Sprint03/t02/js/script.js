class Timer {
    constructor(title, delay, stopCount){
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }
    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay},  stopCount=${this.stopCount})`)
        this.lol = setInterval(() => this.tick(), this.delay);
    }
    tick() {
        if (this.stopCount > 0) console.log(`Timer ${this.title} Tick! | cycles left ${--this.stopCount}`)
        else this.stop();
    }
    stop() {
        clearInterval(this.lol);
        console.log(`Timer ${this.title} stopped`)
    }
}

function runTimer(title, delay, stopCount) {
    let timer = new Timer(title, delay, stopCount);
    timer.start();
}

//runTimer("Bleep", 1000, 5);

/*
Console output:
Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/