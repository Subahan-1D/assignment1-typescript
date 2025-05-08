{
  // PROBLEM : 1
  const formatString = (input: string, toUpper?: boolean) => {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  };
  
  console.log(formatString("Hello"));
  console.log(formatString("Hello", true));
  console.log(formatString("Hello", false));
}
