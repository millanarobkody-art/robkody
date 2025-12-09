const trailSpans = document.querySelectorAll('.mouse-trail span');

document.addEventListener('mousemove', e => {
  let x = e.clientX;
  let y = e.clientY;

  trailSpans.forEach((span, i) => {
    setTimeout(() => {
      span.style.transform = `translate(${x}px, ${y}px)`;
    }, i * 50); 
  });
});
