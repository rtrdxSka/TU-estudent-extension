function removeBlinkAnimation() {
  const elements = document.getElementsByClassName('miga');
  for (let element of elements) {
    element.style.animation = 'none';
    element.style.webkitAnimation = 'none';
  }
}

// Run the function when the page loads
removeBlinkAnimation();

// Also run the function when the DOM changes
const observer = new MutationObserver(removeBlinkAnimation);
observer.observe(document.body, { childList: true, subtree: true });