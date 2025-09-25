const cart = [
  { name: "Хлеб", price: 50 },
  { name: "Молоко", price: 70 },
  { name: "Сыр", price: 200 },
  { name: "Шоколад", price: 120 }
];


function calculateTotal(cart, callback) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return callback(total);
}


function noDiscount(total) {
  return total;
}


function tenPercentDiscount(total) {
  return total * 0.9;
}


function bonusForBigPurchase(total) {
  return total > 300 ? total - 50 : total;
}


console.log("Итог с без скидки:", calculateTotal(cart, noDiscount));
console.log("Итог со скидкой 10%:", calculateTotal(cart, tenPercentDiscount));
console.log("Итог с бонусом для большой покупки:", calculateTotal(cart, bonusForBigPurchase));
