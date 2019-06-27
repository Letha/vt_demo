(function() {

var likes = document.querySelectorAll('.own--b-like');

likes.forEach(
  function(element, i, likes) {
    element.addEventListener( 'click', onLikeClick )
  }
);


function onLikeClick( event ) {

  var targetImage = event.currentTarget.querySelector('img');

  if( typeof targetImage.dataset.active === 'undefined' ) {

    targetImage.dataset.active = '';
    targetImage.src = './own/images/shapes/like_active.svg';

  } else {

    targetImage.removeAttribute('data-active');
    targetImage.src = './own/images/shapes/like.svg';
  }
}

}());
