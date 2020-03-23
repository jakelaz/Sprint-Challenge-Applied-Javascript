// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabsParent = document.querySelector('.tabs .topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function (response) {
    // handle success
    response.data.topics.forEach( item => {
        let tab = tabCreator(item);
        tabsParent.appendChild(tab); 
    })    
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function (response) {
    //console.log(response);
});

function tabCreator(tabName){
    const tab = document.createElement('div')

    tab.classList.add('tab')

    tab.textContent = tabName
    
    return tab
}