import ReactDOM from "react-dom/client";
import React from "react";
import { StrictMode } from "react";

import "./index.css";
import { books } from "./books";
import Book from "./book";

// function Greeting() {
//   return React.createElement(
//     "h2",
//     { className: "helper" },
//     React.createElement("h1", "{}", "Welcome to my React class")
//   );
// }

// const Greeting = () => {
//   return (
//     <>
//       <Nav />
//       <Testimony />
//     </>
//   );
// };

// const Testimony = () => <h3>Testimony</h3>;
// const Nav = () => {
//   return (
//     <ul>
//       <li>
//         <a href="#">Home</a>
//       </li>
//       <li>
//         <a href="#">About</a>
//       </li>
//       <li>
//         <a href="#">Profile</a>
//       </li>
//     </ul>
//   );
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map(({ title, image, author }, key) => {
//         if (key === 0) {
//           return (
//             <Book key={key} title={title} image={image} author={author}>
//               <p
//                 style={{
//                   fontSize: "0.5rem",
//                   color: "#333",
//                   marginTop: "0.5rem",
//                 }}
//               >
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Soluta, sequi magni consequatur, perferendis commodi id cum
//                 quisquam deserunt veritatis, asperiores facere! Perferendis rem
//                 aliquam quis nihil, doloremque dolores quia voluptatibus.
//               </p>
//             </Book>
//           );
//         } else {
//           return <Book key={key} title={title} image={image} author={author} />;
//         }
//       })}
//     </section>
//   );
// }

// function Book({ title, author, image, children }) {
//   return (
//     <article className="book">
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// }

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book, key) => {
//         return <Book book={book} key={book.id} />;
//       })}
//     </section>
//   );
// }

// function Book({ book: { title, author, image } }) {
//   return (
//     <article className="book">
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// }

// function BookList() {
//   const getBook = (id) => {
//     const book = books.find(({ id: bookId }) => bookId === id);
//     console.log(book);
//   };
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book {...book} key={book.id} getBook={getBook} />;
//       })}
//     </section>
//   );
// }

// const EventExample = () => {
//   const handleButtonClickEvent = (e) => {
//     alert("You clicked on the submit button");
//   };
//   const handleFormInput = (e) => {
//     console.log(e.target.value);
//   };

//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log(e);
//   };
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="username"
//           style={{ margin: "0.5rem", padding: "7px", color: "red" }}
//           onChange={(e) => handleFormInput(e)}
//         />
//         <button
//           type="button"
//           style={{ padding: "7px" }}
//           onClick={handleButtonClickEvent}
//         >
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// };

// function Book({ title, author, image, id, getBook }) {
//   return (
//     <article className="book">
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       <button type="button" onClick={(e) => getBook(id)}>
//         Get Book
//       </button>
//     </article>
//   );
// }

function BookList() {
  return (
    <>
      <h1 className="pageTitle">Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} bookNumber={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BookList />
  </StrictMode>
);
