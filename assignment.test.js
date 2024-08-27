const calculatePrice = require("./assignment");

// table 1 ordered red set and green set with no member card will get no discount
test("table1 ordered with no any discount", () => {
  expect(
    calculatePrice(
      [
        { name: "Red set", price: 50 },
        { name: "Green set", price: 50 },
      ],
      false
    )
  ).toBe(100);
});

// table 2 ordered red set and 2 Pink set with no member card will get 5% discount
test("table2 ordered with 5% discount", () => {
  expect(
    calculatePrice(
      [
        { name: "Red set", price: 50 },
        { name: "Pink set", price: 80 },
        { name: "Pink set", price: 80 },
      ],
      false
    )
  ).toBe(199.5);
});

// table 3 ordered only Pink and Purple set with member card will get 10% discount
test("table3 ordered with 10% discount", () => {
  expect(
    calculatePrice(
      [
        { name: "Pink set", price: 80 },
        { name: "Purple set", price: 90 },
      ],
      true
    )
  ).toBe(153);
});

// table 4 ordered 2 Orange , Pink and Blue set with member card will get 15% discount
test("table4 ordered with 15% discount", () => {
  expect(
    calculatePrice(
      [
        { name: "Orange set", price: 120 },
        { name: "Orange set", price: 120 },
        { name: "Pink set", price: 80 },
        { name: "Blue set", price: 30 },
      ],
      true
    )
  ).toBe(297.5);
});
