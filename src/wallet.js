export default function Wallet() {
  let coins = [];
  function totals() {
    return coins.reduce((acc, value) => (acc += value), 0);
  }
  function display() {
      console.log(coins.join(", "));
  }

  return {
    add(coin) {
      coins.push(coin);
    },
    totals,
    display,
    spend(amount) {
      if (amount > totals()) {
        throw "Unsufficient funds";
      }
      let remainToSpend = amount;
      let change = 0;
      coins.some((value, index) => {
        if (remainToSpend >= value) {
          remainToSpend -= value;
          coins[index] = 0;
          return false;
        } else {
          change = value - remainToSpend;
          coins[index] = change;
          return true
        }
      })

      coins = coins.filter(coin => coin > 0);
      return change;
    }
  };
}
