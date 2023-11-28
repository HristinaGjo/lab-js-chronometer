class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(printTimeCallback) {
    
    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    const minutes=this.currentTime/60
    const roundedMinutes=Math.floor(minutes)
    return roundedMinutes;
  }

  getSeconds() {
    const seconds=this.currentTime % 60
    return seconds;
  }

  computeTwoDigitNumber(value) {

    if (value<10){
      return `0${value}`
    }
    else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime=0;
  }

  split() {

    let formatmin=this.computeTwoDigitNumber(this.getMinutes())
    let formatsec=this.computeTwoDigitNumber(this.getSeconds())

    return `${formatmin}:${formatsec}`

  }
}

