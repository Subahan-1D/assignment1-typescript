✔ What are some differences between interfaces and types in TypeScript ?

When I transition from JavaScript to TypeScript, two constructs often come to mind : interfaces and types. At first glance, they seem interchangeable. Both allow me to define the size of the data. However, once I look deeper, I realise they have unique features suitable for different situations.

✔ Interface vs Type in TypeScript : What’s the Difference?

✔ What is an Interface? -------------->

An interface is a way to define the structure of an object. It is specifically designed for object shapes, and it's ideal when working with classes or extending other interfaces.

✔ Syntax Similarity ----------->

interface User {
name: string;
email: string;
}

interface Admin extends User {
role: string;
}

✔ A type can define any kind of type : object shapes, unions, primitives, tuples, functions, etc..

✔ What is a Type Alias ? ------------>

type User = {
name: string;
email: string;
};

type ID = string | number;

✔ Create Advance types ------------->

type Admin = User & { role: string };

✔ enums --------------->

✔  Understanding Enums in TypeScript with Real Examples  ------------>

Question 2 : What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

✔  What is an enum ? --------------->

TypeScript enums are used to define a set of named constants - a powerful feature that makes my code more readable, maintainable, and type-safe. They help me model a specific set of related values, such as the day of the week, user role, direction, or response status.

✔  Numeric enum ---------->

enum Day {
Monday,
Tuesday,
Wednesday,
Thursday,
Friday,
Saturday,
Sunday,
}

    function getDayType(day: Day): string {
    if (day === Day.Sunday || day === Day.Saturday) {
      return "Weekend";
    } else {
      return "Weekday";
    }

}

Why use Enums?

✔ Makes my code self-documenting and easy to understand.

✔ Prevents the use of invalid values.

✔ Improves intellisense and autocomplete in editors.

✔ Helps avoid magic numbers or hard-coded strings.
