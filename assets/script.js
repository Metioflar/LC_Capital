const header = document.querySelector('header');
window.addEventListener ('scroll', function() {
    header.classList.toggle('sticky', this.window.scrollY > 50)

})

var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

$(document).ready(function(){
  $('.modal').modal();
  let itemmenu= $('.button-menu');
  let navpai = $('.navlist');
  let icone = $('.menu-burger')
  $(icone).click(function(){
    navpai.show();
  })
  itemmenu.each (function(index){
   $(this).click(function(){
    navpai.hide()
  });
 })
});
