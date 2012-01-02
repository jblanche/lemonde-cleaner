/*global jQuery:true */

jQuery('.listLink').replaceWith(function(){
  return jQuery(this).text();
});