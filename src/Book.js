import React from 'react';

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
      >
        {author}
      </h4>

      <button onClick={() => clickHandler(props)}> more.. </button>
    </article>
  );
};

const clickHandler = (book) => {
  console.log('this is click event', book);
};

export default Book;
