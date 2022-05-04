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


books.forEach(function(book) {

    listHtml.innerHTML += `
                            <li class="list_item"> Title : ${book.title} <br><br>
                             isbn : ${book.isbn} <i class="fa fa-trash" aria-hidden="true"></i> </li>

                             `
})


const removeBtn = document.querySelectorAll("ul i");

removeBtn.forEach(function(btn) {

    btn.addEventListener("click" , removeItem);
})

function removeItem(){
console.log(event)
};