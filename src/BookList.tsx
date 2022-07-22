import React from "react";
import { BookItem } from "./BookItem";

export class BookList extends React.Component {
  list = [
    { title: "A Christmas Carol", author: "Charles Dickens" },
    { title: "The Mansion", author: "Henry Van Dyke" },
  ];
  render() {
    return (
      <ul>
        {this.list.map((book, i) => (
          <BookItem {...book} key={i} />
        ))}
      </ul>
    );
  }
}
