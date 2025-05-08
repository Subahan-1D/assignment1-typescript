{
  // PROBLEM : ---------------------------------------------------------------> 1
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

  // PROBLEM : ---------------------------------------------------------------> 2

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

  // PROBLEM : ---------------------------------------------------------------> 3

  const concatenateArrays = <T>(...arrays: T[][]) => {
    let result: T[] = [];
    for (const array of arrays) {
      result = result.concat(array);
    }
    return result;
  };
  //  console.log(concatenateArrays(["a", "b"], ["c"])) ;
  // console.log(concatenateArrays([1, 2], [3, 4], [5]));

  // PROBLEM : ---------------------------------------------------------------> 4

  class Vehicle {
    private make: string;
    private year: number;

    constructor(name: string, year: number) {
      this.make = name;
      this.year = year;
    }
    getInfo() {
      return `Make : ${this.make} , Year : ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel() {
      return `Model : ${this.model}`;
    }
  }
  //   const myCar = new Car("Toyota", 2025, "Corolla");
  //   console.log(myCar.getInfo());
  //   console.log(myCar.getModel())

  // PROBLEM : ---------------------------------------------------------------> 5

  const processValue = (value: string | number) => {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  };
  //   console.log(processValue("hello"));
  //   console.log(processValue(10));

  // PROBLEM : ---------------------------------------------------------------> 6
   
    
  interface Product {
    name: string;
    price: number;
  }
  const getMostExpensiveProduct = (products: Product[]) => {
    if (products.length === 0) return null;

    const highestPrice = Math.max(...products.map((product) => product.price));
    return products.find((product) => product.price === highestPrice);
  };
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
    { name: "mog", price: 0 },
  ];

//   console.log(getMostExpensiveProduct(products));

// PROBLEM : ---------------------------------------------------------------> 7
}
