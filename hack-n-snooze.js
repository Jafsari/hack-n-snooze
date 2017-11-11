$(function() {

});

// listen for a submit event on a form
$('#new-post').on('submit', function(e) {
	e.preventDefault() // do not refresh the page
  	var nextTitle = $(link1).val();
  	var url = $(link2).val()
      $(link1).val('')
      $(link2).val('')

  if (nextTitle.length === 0) return 0
  if (url.length === 0) return 0
  

  $('ul').append('<li>' + nextTitle + ' ' + '(' + url + ')' + "</li>") 


});