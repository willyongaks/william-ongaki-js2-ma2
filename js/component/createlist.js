// const listInput = document.querySelector("input");
// const favButton = document.querySelector("button");

// function createFavourites() {
//     favButton.addEventListener("click", addBookList);

//     function addBookList(){
//         const newBook = listInput.value.trim();


//         if(newBook.length >= 2) {
//             favourites.push(newBook);
//             createFavs();
//             listInput.value = "";
//         }
//     }

//     function createFavs() {
//         const listContainer = document.querySelector(".favourite");

//         listContainer.innerHTML = "";

//         favourites.forEach(function(bookItem) {
//             listContainer.innerHTML += ` <li>${bookItem} <button data-id="${bookItem}">Remove book</button></li>`
//         })
//     }
// }