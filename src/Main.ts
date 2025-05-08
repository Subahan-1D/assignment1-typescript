{
  // PROBLEM : 1
  const formatString = (input: string, toUpper?: boolean) => {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  };

  //   console.log(formatString("Hello"));
  //   console.log(formatString("Hello", true));
  //   console.log(formatString("Hello", false));

  // PROBLEM : 2
  const filterByRating = (items: { title: string; rating: number }[]) => {
    return items.filter((item) => item.rating >= 4.0);
  };
    // const books = [
    //   { title: "Book A", rating: 4.5 },
    //   { title: "Book B", rating: 3.2 },
    //   { title: "Book C", rating: 3.9 },
    //   { title: "Book D", rating: 4.0 },
    //   { title: "Book E", rating: 5.0 },
    // ];

    // console.log(filterByRating(books));
}
