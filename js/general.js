const finishHim = () => {
  const elems = [...document.querySelectorAll('.bar > span')];
  elems.forEach(el => {
    el.setAttribute('style', 'width: 100%');
    el.innerHTML = '100%'
  })
}

