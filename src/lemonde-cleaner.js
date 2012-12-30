[].forEach.call(
  document.querySelectorAll('a.lien_interne'), function(el){
    el.outerHTML = el.innerText;
  }
);
