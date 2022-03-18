const searchString = (search, word) => {
  let isFound = false;
  for (let i = 0; i < word.length; i++) {
    //console.log(name.slice(i, i + search.length));
    if (
      search.toLowerCase() === word.slice(i, i + search.length).toLowerCase()
    ) {
      // slice berdasarkan panjang search
      isFound = true;
      break;
    }
  }
  return isFound;
};
const searchName = (search, max, callback) => {
  const names = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];
  let find = [];
  for (let i = 0; i < names.length; i++) {
    if (find.length >= max) {
      break;
    }
    if (callback(search, names[i])) {
      find.push(names[i]);
    }
  }
  return find;
};
console.log(searchName("an", 3, searchString));
