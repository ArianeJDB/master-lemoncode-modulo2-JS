console.log("This is your playground, experiment with TS code and check the console");


interface Books {
    title: string,
    isRead: boolean
}
const books: Books[] = [
    { title: "Harry Potter y la piedra filosofal",isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books: Books[], titleToSearch: string) {
    const bookIsRead = books.some(book => book.title === titleToSearch && book.isRead)
    console.log(bookIsRead)
}

isBookRead(books, 'hola')
isBookRead(books, 'Devastación')
isBookRead(books, 'Canción de hielo y fuego')
