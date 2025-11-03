import React from 'react'
import Book, { booksData } from './component/Book'
import './App.css'
import Header from './component/Header'
import Footer from './Footer'

const App = () => {
  return (
    <div className='booklist'>
      <Header />
      <div className="books-row">
        {booksData.map((book) => (
          <Book 
            key={book.id}
            title={book.title}
            price={book.price}
            image={book.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App