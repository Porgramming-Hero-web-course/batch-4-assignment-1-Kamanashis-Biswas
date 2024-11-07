# Union and Intersection Types in TypeScript

In TypeScript, **Union** and **Intersection** types are powerful tools that make your code more flexible and secure. They help you handle different types of data easily, making your code more expressive and adaptable to different programming situations.

---

## Union Types

**Union Type** allow a variable or function parameter to accept multiple types of values. For example, imagine you have a function that needs to handle both `string` and `number` input—maybe it's a function that takes user IDs, and those IDs can be either numbers or strings. With union types, you can define this function to accept both types, such as `string` | `number`

TypeScript's type narrowing feature then kicks in, allowing you to work with each type safely by checking the specific type within the function. This reduces errors and makes your code more adaptable. So, by using a union type, you don't need a separate function to handle each possible type.

### Example of Union Types:

```typescript
function printId(id: string | number) {
  console.log("ID:", id);
}

printId(123); // Works with a number
printId("abc"); // Works with a string
```

---

## Intersection Type

**Intersection Types** allow you to combine multiple types, meaning that a variable must meet all the requirements of each type at the intersection. Imagine you have a `Person` type with a `name` property and an `Employee` type with an `EmployeeId` property Using an intersection, you can combine all the `Person` and `Employee` attributes to create an `EmployeeDetails` type that has both the Name and EmployeeId attributes.

Intersection types are helpful when you need objects that meet the criteria of more than one type, especially in more complex data structures.

### Example of Intersection Types:

```typescript
type Person = { name: string };
type Employee = { employeeId: number };

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Alice",
  employeeId: 1234,
};

console.log(employee);
```
