// all food sets
const StoreFoodSets = [
  { name: "Red set", price: 50 },
  { name: "Green set", price: 50 },
  { name: "Blue set", price: 30 },
  { name: "Yellow set", price: 50 },
  { name: "Pink set", price: 80 },
  { name: "Purple set", price: 90 },
  { name: "Orange set", price: 120 },
];

const calculatePrice = (foodSets, isMemberCard) => {
  const initialPrice = 0;
  const totalPrice = foodSets.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialPrice
  );

  //check if ordered double sets will get 5% discount
  let isDiscountFivePercent = false;
  const SetCount = { Orange: 0, Pink: 0, Green: 0 };
  const addDoubleSet = foodSets.map((foodset) => {
    switch (foodset.name) {
      case "Orange set":
        SetCount.Orange++;
        break;
      case "Pink set":
        SetCount.Pink++;
        break;
      case "Green set":
        SetCount.Green++;
    }
  });

  if (
    (SetCount.Green % 2 === 0 && SetCount.Green > 0) ||
    (SetCount.Pink % 2 === 0 && SetCount.Pink > 0) ||
    (SetCount.Orange % 2 === 0 && SetCount.Orange > 0)
  ) {
    isDiscountFivePercent = true;
  } else isDiscountFivePercent = false;

  //  check the discount condition and calculate totalPrice
  if (isDiscountFivePercent && isMemberCard) {
    return totalPrice * 0.85;
  } else if (isDiscountFivePercent && !isMemberCard) {
    return totalPrice * 0.95;
  } else if (!isDiscountFivePercent && isMemberCard) {
    return totalPrice * 0.9;
  } else {
    return totalPrice;
  }
};

module.exports = calculatePrice;
