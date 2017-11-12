$(function() {

});
//When you click on submit button, creates new item for the list
// listen for a submit event on a form
$('#new-post').on('submit', function(e) {
	e.preventDefault() // do not refresh the page
  	var nextTitle = $(link1).val();
  	var url = $(link2).val()
      $(link1).val('')
      $(link2).val('')

  if (nextTitle.length === 0) return 0
  if (url.length === 0) return 0
  

  $('ol').append('<li><span><i class="fa fa-star-o" aria-hidden="true"></i></span>' + " " +  nextTitle + ' ' + '(' + url + ')' + "</li>") 
$('span').on('click',function(e){
	$(this).find($(".fa")).toggleClass('fa fa-star-o fa fa-star');
	e.stopPropogation()
});

});



