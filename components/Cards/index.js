// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsParent = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
    // handle success
    const articlesObj = response.data.articles

    //const articlesArray = Object.keys(articlesObj).map(i => articlesObj[i])
    const objectArray = Object.entries(articlesObj);

    objectArray.forEach(([key, value]) => {
        value.forEach( item => {
            console.log(item)
            let articleCard = cardCreator(item)
            cardsParent.appendChild(articleCard)
        })
    }) 
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error);
});


function cardCreator(cardData){
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          authorDiv = document.createElement('div'),
          authorImgContainer = document.createElement('div'),
          authorImg = document.createElement('img'),
          authorName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    headline.textContent = cardData.headline
    authorDiv.classList.add('author')
    authorImgContainer.classList.add('img-container')
    authorImg.src = cardData.authorPhoto
    authorName.textContent = 'By ' + cardData.authorName

    card.appendChild(headline)    
    card.appendChild(authorDiv)
    authorDiv.appendChild(authorImgContainer)
    authorImgContainer.appendChild(authorImg)
    authorDiv.appendChild(authorName)
    
    return card
}