const listKey = "list"
let favourites = retrieveFromStorage();
let books = [
    {
        isbn: "1600506460320",
        title: "Great book",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
    },
];


const listHtml = document.querySelector(".container");
const listInput = document.querySelector("input");
const favButton = document.querySelector("button");



function createList() {

    listHtml.innerHTML = "";

    books.forEach(function (book) {

    listHtml.innerHTML += `
                            <li class="list_item"> Title : ${book.title} <br><br>
                             isbn : ${book.isbn} <i class="fa fa-trash" aria-hidden="true" data-item="${book.isbn}"></i> </li>

                             `
    });


    const removeBtn = document.querySelectorAll("li i");


    removeBtn.forEach(function (btn) {

        btn.addEventListener("click", removeItem);
    });
};

createList();




function removeItem(event) {
    // console.log(event)

    const removeBook = event.target.dataset.item;

    const newBookList = books.filter(function (item) {
        if (removeBook !== item.isbn) {
            return true;
        }

    });
    // console.log(item)

    books = newBookList;

    createList();

};




// Creating favourite book items
createFavs();

favButton.addEventListener("click", addBookList);


function addBookList() {

    const newBook = listInput.value.trim();


    if (newBook.length >= 2) {
        favourites.push(newBook);
        createFavs();
        saveToStorage(favourites);
        listInput.value = "";
        listInput.focus();
    }
}

function createFavs() {
    const listContainer = document.querySelector(".favourite");

    listContainer.innerHTML = "";

    favourites.forEach(function (bookItem) {
        listContainer.innerHTML += ` <li>${bookItem} <button data-id="${bookItem}">Remove book</button></li>`
    });

    const items = document.querySelectorAll("li button");

    items.forEach(function(bookItem) {
        bookItem.addEventListener("click", removeBookList);
    });
}

function removeBookList(event) {
    console.log(event)
    const deleteBook = event.target.dataset.id;

    const newBookList = favourites.filter(function(bookItem) {
        if(deleteBook !== bookItem) {
            return true;
        }
        
    });
console.log(favourites)
    favourites = newBookList;

    createFavs();
}


function saveToStorage(bookToSave){
    localStorage.setItem(listKey , JSON.stringify(bookToSave));
}

function retrieveFromStorage() {
    const currentFavs = localStorage.getItem(listKey);

    if(!currentFavs) {
        return [];
    }

    return JSON.parse(currentFavs);
}






