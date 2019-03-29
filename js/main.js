$(document).ready(function ($) {
  $('p').css('border-bottom', '1px solid black')
  $('.first').css('border-color', 'red')
  $('#special').css('background-color', '#ffcc00')
  $('p.first small').css('background-color', 'lightgrey')

// $('.first').text('Lets learn jQuery')
  $('.first').html('Lets learn <em>jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make webpages interactive</small>')

  $('#yourName').val('Bob Builder')

  /* Content Method */
  $('a[href="#1"]').css('background-color', 'tomato')
  $('a[href^="#"]').css('color', 'grey') // $ end with
  $('a[href*="google"]').css('font-weight', 'bold')

  /* Animation Function */
  // $('.card:first').hide(400)
  // $('.card:first').delay(1000).hide(400)
  // $('.card:first').delay(1000).hide(400).show(800)
  //$('.card:first').delay(1000).hide(400).show(800, function () {
   //alert('we\'re back')
  })
$('.card').animate({ borderRadius: '20px'}, 400)
  /* Attribute Method */
  $('img:first').attr('src', './img/image-5.jpg')
  /* class Method */
  console.log($('img:last').hasClass('special'))
  //$('img').addClass('special')
  $('img').toggleClass('special')
  /* Events */
  $('img').click(function(){
    console.log($(this).attr('src'))
    $(this).toggleClass('special')
  })
  /* AJEX */
  $('#content').load('./about.html')
  $('#contentNav .nav-link').click(function(e){
    e.preventDefault()
    var page = $(this)attr('href')
    $('#contentNav.active').removeClass('active')
    $(this).addClass('active')
    $('#content').load(page)
  })// closing click event on the contentNav nav-link
})// Closing the document.ready
$.ajax({
  url: './data/posts.json',
  type:'GET',
  dataType: 'json'
}).done(function(data){
  var numPosts = data.posts.length
  for (var i = 0; i < numPosts; i++){
    var post = '<div class="col-sm-6 p-5"><h3>'
    post +=  (i+1) + '.' + data.posts[i].title
    </h3><p>
    content
    </p></div>
  }
})
