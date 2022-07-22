import React from "react";
import { Book } from "./models/book";

export class BookItem extends React.Component<Book> {
  render() {
    return (
      <li>
        <label>{this.props.title}</label>
        &nbsp;
        <label>{this.props.author}</label>
      </li>
    );
  }
};
