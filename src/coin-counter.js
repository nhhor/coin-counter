const userValue = 1.29;
const userValueInPennies = Math.floor(100 * userValue); //89!!!

const coinArray = [];

const quarters = (userValueInPennies) => {
  const newNum = userValueInPennies;
  if (newNum / 25 < 1){
    // console.log("Quarter remainder: ",newNum)
    return newNum;
  } else {
    coinArray.push("25");
    return quarters(newNum-25);
  }
};

const dimes = (element) => {
  const newNum = element;
  if (newNum / 10 < 1){
    // console.log("Dime remainder: ",newNum)
    return newNum;
  } else {
    coinArray.push("10");
    return dimes(newNum-10);
  }
};

const nickels = (element) => {
  const newNum = element;
  if (newNum / 5 < 1){
    // console.log("Nickel remainder: ",newNum)
    return newNum;
  } else {
    coinArray.push("5");
    return nickels(newNum-5);
  }
};

const pennies = (element) => {
  const newNum = element;
  if (newNum / 1 < 1){
    // console.log("penny remainder: ",newNum)
    return newNum;
  } else {
    coinArray.push("1");
    return pennies(newNum-1);
  }
};

console.log(userValueInPennies);
pennies(nickels(dimes(quarters(userValueInPennies))));
console.log(`Coins: ${coinArray}`);


// -------------------------------------------------------



// THANKSM LIAM...
const recu = (v, arr, i) => {
  if (i === coins.length) return arr;
  const timesIn = (Math.floor(v / coins[i]));
  const rem = v - (timesIn * coins[i]);
  arr.push(timesIn);
  return recu(rem, arr, i+1);
}

console.log(recu(userValueInPennies,[],0));
