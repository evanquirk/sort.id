"use strict";

const fetch = require("node-fetch");

const searchBooks = function (searchTerms) {
  return fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTerms)
    .then((a) => a.json())
    .then((response) => {
      let results = [];
      let result1 = {};
      let result2 = {};
      if (response.items) {
        result1.name = response.items[0].volumeInfo.title;
        if (response.items[0].volumeInfo.authors) {
          result1.description = response.items[0].volumeInfo.authors[0];
        }
        if (response.items[0].volumeInfo.publishedDate) {
          result1.description +=
            ", " + response.items[0].volumeInfo.publishedDate.slice(0, 4);
        }
        if (response.items[0].volumeInfo.description) {
          result1.description +=
            ". " + response.items[0].volumeInfo.description;
        }
        result1.type = "to_read";
        results.push(result1);
        result2.name = response.items[1].volumeInfo.title;
        if (response.items[1].volumeInfo.authors) {
          result2.description = response.items[1].volumeInfo.authors[0];
        }
        if (response.items[1].volumeInfo.publishedDate) {
          result2.description +=
            ", " + response.items[1].volumeInfo.publishedDate.slice(0, 4);
        }
        if (response.items[1].volumeInfo.description) {
          result2.description +=
            ". " + response.items[1].volumeInfo.description;
        }
        result2.type = "to_read";
        results.push(result2);
      }
<<<<<<< HEAD
      console.log(results);
=======
>>>>>>> 9ec69f0bccf67d70eced497582a073fbf3cce793
      return results;
    });
};


module.exports = { searchBooks };
