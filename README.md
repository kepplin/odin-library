# odin-library

## See the Live Demo 👇

https://kepplin.github.io/odin-library/

## How it Works:

1. The submit button is clicked (from the popup form)
2. The function addBookToLibrary runs, in which a new object is created using a constructor function, this object is placed into the empty array "myLibrary". This function also invokes the function renderBooks.
3. Within renderBooks, myLibrary.map is used in which the function createBook is called.
4. createBook, creates the individual book elements in the DOM, appends the elements to one another to form a full on book and then appends the full book to the empty div with a class of "bookshelf" (declared in HTML). It also styles the books giving them random patterns and heights.

## Credits:

https://www.cssscript.com/animated-virtual-bookshelf/#google_vignette (Book styling + animations)
https://www.transparenttextures.com/wood-pattern.html (timber texture)
