const spollersArray = document.querySelectorAll('[data-spollers]');
if(spollersArray.length > 0){
  const spollersRegular = Array.from(spollersArray).filter(function(item,index,self){
    return !item.dataset.spollers.split(",")[0];
    
  })
  if(spollersRegular.length > 0){
      initSpollers(spollersRegular);
  }
  function initSpollers(spollersArray, mathMedia = false){
    spollersArray.forEach(spollersBlock =>{
      spollersBlock = mathMedia ? spollersBlock.item : spollersBlock;
      if(mathMedia.matches || ! mathMedia){
        spollersBlock.classList.add('_init');
        initSpollersBody(spollersBlock);
        spollersBlock.addEventListener("click", setSpollerAction);
      }
      else{
        spollersBlock.classList.remove('_init');
        initSpollersBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    })
  }
  function initSpollersBody(spollersBlock, hideSpollerBody = true){
    const spollersTitles = spollersBlock.querySelectorAll('[data-spoller]');
    if(spollersTitles.length > 0){
      spollersTitles.forEach(spollersTitle => {
        if(hideSpollerBody){
          spollersTitle.removeAttribute('tabindex');
          if(!spollersTitle.classList.contains('_active')){
            spollersTitle.nextElementSibling.hidden = true;
          }
        }
        else{
          spollersTitle.setAttribute('tabindex', '-1');
          spollersTitle.nextElementSibling.hidden = false;
        }
      })
    }
  }
  function setSpollerAction(e){
    const el = e.target;
    if(el.hasAttribute('data-spoller') || el.closest('[data-spoller]')){
      const spollersTitle = el.hasAttribute('data-spoller')? el : el.closest('[data-spoller]');
      const spollersBlock = spollersTitle.closest('[data-spollers]');
      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
      if(!spollersBlock.querySelectorAll('._slide').length){
        if(oneSpoller && !spollersTitle.classList.contains('_active')){
          hideSpollerBody(spollersBlock);
        }
        spollersTitle.classList.toggle('_active');
        _slideToggle(spollersTitle.nextElementSibling, 500);
      }
      e.preventDefault();

    }
  }
  function hideSpollerBody(spollersBlock){
    const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
    if(spollerActiveTitle){
      spollerActiveTitle.classList.remove('_active');
      _slideUp(spollerActiveTitle.nextElementSibling, 500);
    }
  }
}
let _slideUp = (target, duration = 500) => {
  if(!target.classList.contains('_slide')){
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(()=>{
      target.hidden = true;
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');


    }, duration);
  }
}
let _slideDown = (target, duration = 500) => {
  if(!target.classList.contains('_slide')){
    target.classList.add('_slide');
    if(target.hidden){
      target.hidden = false;
    }
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(()=>{
      target.style.removeProperty('height');

      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');


    }, duration);
  }
}
let _slideToggle = (target, duration = 500) => {
  if(target.hidden){
    return _slideDown(target,duration);

  }
  else{
    return _slideUp(target, duration);
  }
}