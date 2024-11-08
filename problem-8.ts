{
  //

  function validateKeys<T extends object>(obj: T, keys: string[]): boolean {
    for (let key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };

  const isPerson = validateKeys(person, ["name", "age"]);

  console.log(isPerson);

  //
}
