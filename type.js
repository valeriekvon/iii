// ────────────────────────────────────────────────────────────
// TYPEWRITER LOGIC (fires once DOM is ready)
// ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const textEl = document.getElementById('typewriter-text');
    const str    = 'This is a critical report for Unit 10 GCD';
    const speed  = 80;
    let   i      = 0;
  
    // make sure it starts empty
    textEl.textContent = '';
  
    // type one character at a time
    (function typeChar() {
      if (i < str.length) {
        textEl.textContent += str[i++];
        setTimeout(typeChar, speed);
      } else {
        // once done, make it contenteditable if you like:
        textEl.setAttribute('contenteditable', 'true');
      }
    })();
  });

