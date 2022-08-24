function stopwatch() {
  let startTime;
  let endTime;
  let elapsedTime;
  let running = false;

  /**
   * Starts a stopwatch if one hasn't already been started
   */
  this.start = function () {
    if (running) {
      return;
    }
    running = true;
    startTime = new Date();
  };

  /**
   * Stops the current stopwatch
   */
  this.stop = function () {
    if (!running) {
      return;
    }
    running = false;
    endTime = new Date();
    elapsedTime = endTime - startTime;
  };

  /**
   * Gets either the current time the stopwatch has been running for or how long it ran for
   * @returns {number} the time in seconds
   */
  this.getTime = function () {
    // Return the elapsed time in seconds.
    if(running) return (new Date() - startTime) / 1000;
    else return elapsedTime / 1000;
  };
}

module.exports = stopwatch;
