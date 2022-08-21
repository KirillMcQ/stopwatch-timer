function stopwatch() {
  let startTime;
  let endTime;
  let elapsedTime;
  let running = false;
  this.start = function () {
    if (running) {
      return;
    }
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) {
      return;
    }
    running = false;
    endTime = new Date();
    elapsedTime = endTime - startTime;
  };
  this.getTime = function () {
    // Return the elapsed time in seconds.
    return elapsedTime / 1000;
  };
}

module.exports = stopwatch;
