import React from "react";

const Book = ({ book, onDelete, onEdit }) => {
  return (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.year}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(book.id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onEdit(book)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default Book;
