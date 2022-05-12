import React from 'react';
import ReactDOM from 'react-dom';

//css
import './index.css';
import { books } from './Books';
import Book from './Book';
import UseEffectsCleanup from './UseEffectsCleanup';
import UseEffectsFetchData from './UseEffectsFetchData';
function BookList() {
  return (
    <div>
      {/* <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
      <UseEffectsCleanup /> */}
      <UseEffectsFetchData />
    </div>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
