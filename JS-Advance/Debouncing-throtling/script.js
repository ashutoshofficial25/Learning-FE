const input = document.getElementById("input");
const defaultText = document.getElementById("default-text");
const debounceText = document.getElementById("debounce-text");
const throttleText = document.getElementById("throttle-text ");

const updateDebounceText = debounce((text) => (debounceText.innerText = text));
const updateThrottleText = throttle((text) => (throttleText.innerText = text));

input.addEventListener("input", (e) => {
  console.log("running");
  defaultText.innerText = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

function debounce(callback, time = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, time);
  };
}

function throttle(callback, time = 500) {
  let wait = false;

  return (...args) => {
    if (wait) return;

    callback(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, time);
  };
}
