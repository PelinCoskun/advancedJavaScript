let products = [
    { id: 1, name: "Acer Laptop", unitPrice: 15000 },
    { id: 2, name: "Monster Laptop", unitPrice: 16000 },
    { id: 3, name: "Asus Laptop", unitPrice: 17000 },
    { id: 4, name: "Dell Laptop", unitPrice: 18000 },
    { id: 5, name: "Casper Laptop", unitPrice: 19000 },
  ];

  console.log("<ul>");
products.map((product) => console.log(`<li>${product.name}</li>`));
console.log("</ul>");