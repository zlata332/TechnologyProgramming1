function maskCard(cardNumber, maskChar = 'X') {
  if (cardNumber.length < 10) {
    throw new Error("Номер карты должен содержать хотя бы 10 символов");
  }


  const maskedCard = cardNumber.slice(0, 6) + maskChar.repeat(cardNumber.length - 10) + cardNumber.slice(-4);
  return maskedCard;
}

console.log(maskCard("4815154823541789"));  
console.log(maskCard("4815154823541789", "*"));  
console.log(maskCard("4815154823541789", ""));  