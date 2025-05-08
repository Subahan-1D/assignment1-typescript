{
  const formatString = (input: string, toUpper?: boolean) => {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  };
  const filterByRating = (items: { title: string; rating: number }[]) => {
    return items.filter((item) => item.rating >= 4.0);
  };

  const concatenateArrays = <T>(...arrays: T[][]) => {
    let result: T[] = [];
    for (const array of arrays) {
      result = result.concat(array);
    }
    return result;
  };
 

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


  const processValue = (value: string | number) => {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  };

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


  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  const getDayType = (day: Day) => {
    if (day === Day.Friday || day === Day.Saturday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  };


  const squareAsync = async (n: number): Promise<number> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  };
  console.log("StatTime :", new Date().toLocaleTimeString());
  squareAsync(4).then((result) => {
    console.log("timeResult :", result);
    console.log("after 1s", new Date().toLocaleTimeString());
  });
    squareAsync(-4)
  .catch((error) => {
      console.error("Error:", error.message);
    });
}
