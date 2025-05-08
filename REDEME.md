// Level -2 Assignment 1 or task 8 Problem Solving

Question 1 : What are some differences between interfaces and types in TypeScript?

ans : When I transition from JavaScript to TypeScript, two constructs often come to mind : interfaces and types. At first glance, they seem interchangeable. Both allow me to define the size of the data. However, once I look deeper, I realise they have unique features suitable for different situations.

**\*\***\*\***\*\*** Syntax Similarity **\*\***\*\*\***\*\***
**\*\***\*\*\***\*\*** Just type use (=) \***\*\*\*\***
type Person = {
name : string,
age : number
}

\***\*\*\*\*\*** interface **\*\***\***\*\***
**\*\***\*\*\***\*\*** Just interface use not (=) \***\*\*\*\***
interface Person {
name : string,
age : number ,
}
**************\*************** enums **************\*\***************
Question 2 : What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Ans : TypeScript enums are used to define a set of named constants - a powerful feature that makes my code more readable, maintainable, and type-safe. They help me model a specific set of related values, such as the day of the week, user role, direction, or response status.
