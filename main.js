// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
const like = document.querySelectorAll('.like-glyph')

function clickLike(like){
  const heart = like.target;
  mimicServerCall('doesThisNeedToBeCopiedOrNot?')
  .then(function(){
    if(heart.value === EMPTY_HEART){
      heart.value === FULL_HEART
    }
    else heart.value === EMPTY_HEART
  })

  .catch(function(error) {
  const modal = document.getElementById("modal");
  modal.className = "";
  modal.innerText = error;
  setTimeout(() =>  modal.className = "hidden", 3000);
})

}

  for(const glyph in like){
    glyph.addEventListener('click', clickLike)
  }
  


  


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
