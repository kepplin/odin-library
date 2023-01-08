# odin-library

## See the Live Demo 👇

https://kepplin.github.io/odin-library/

With this task, I wanted to be unique so I decided to add books instead of just cards, but styling this was a horrid experience.

## Instructions

Press the add book button to open up a form. Fill in the form and press submit to add a book to the bookshelf. If you check the 'read book?' checkbox in the form, the book's border color will be green, otherwise it will be red.
Pressing a book in the bookshelf toggles its border color.
Hovering over a book rotates it to display a cover with all the info you inputed into the form.

## How it Works:

1. The submit button is clicked (from the popup form)
2. The function addBookToLibrary runs, in which a new object is created using a constructor function, this object is placed into the empty array "myLibrary". This function also invokes the function renderBooks.
3. Within renderBooks, myLibrary.map is used in which the function createBook is called.
4. createBook, creates the individual book elements in the DOM, appends the elements to one another to form a full on book and then appends the full book to the empty div with a class of "bookshelf" (declared in HTML). It also styles the books giving them random patterns and heights.

I tried to get the background image (the bookcase) to repeat, essentially adding more layers when enough books were added, but it always ended up looking funky, so then I attempted to create my own bookshelf in CSS, but it was hard to style, so I just settled for a max book limit. One day, when I am a more experienced programmer, I will come back to this, and implemenet a repeating bookshelf.

![demoemptybookshelf](https://user-images.githubusercontent.com/107027281/211130123-1b449623-789f-4036-ab81-12fb294b1563.png)
Empty bookshelf

![demofullbookshelf](https://user-images.githubusercontent.com/107027281/211130373-13c7fb95-1927-4f3c-a4db-f8e449b6c345.png)
Full bookshelf

## Credits:

https://www.cssscript.com/animated-virtual-bookshelf/#google_vignette (Book styling + animations)
https://www.transparenttextures.com/wood-pattern.html (timber texture)
