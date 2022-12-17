let map = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry",    "blue"]
  ]);
for (let i = 0; i < map.size; i++) {
    for (let res of map) {
        console.log(`${map.keys(i)} - X, ${map.keys(i)} - Y`);
    }
}

