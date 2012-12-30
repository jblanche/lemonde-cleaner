/*global jQuery:true */

jQuery('a[href*="conjugaison"]').replaceWith(function(){
  return jQuery(this).text();
});

jQuery('a.lien_interne').replaceWith(function(){
  return jQuery(this).text();
});
