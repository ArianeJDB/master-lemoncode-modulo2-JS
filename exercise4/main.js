const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];


function isBookRead(books, titleToSearch) {
    const isIncluded = books.some(book => book.title === titleToSearch)
    console.log(isIncluded)
}

isBookRead(books, 'hola')
isBookRead(books, 'Devastación')
