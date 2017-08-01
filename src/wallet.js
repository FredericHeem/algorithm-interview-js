export default function Wallet() {
  let coins = [];
  function totals() {
    return coins.reduce((acc, value) => (acc += value), 0);
  }
  return {
    add(coin) {
      coins.push(coin);
    },
    totals,
    display() {
      console.log(coins.join(", "));
    },
    spend(amount) {
      //console.log("spend ", amount, totals());
      if (amount > totals()) {
        throw "Unsufficient funds";
      }
      let remainToSpend = amount;
      let change = 0;
      //const change
      for (let i = 0; i < coins.length; i++) {
        const value = coins[i];
        //console.log("current value ", value);
        if (remainToSpend >= value) {
          remainToSpend -= value;
          coins[i] = 0;
          //console.log("remainToSpend ", remainToSpend);
        } else {
          change = value - remainToSpend;
          coins[i] = change;
          //console.log("END ", coins[i]);
          break;
        }
      }
      coins = coins.filter(coin => coin > 0);
      return change;
    }
  };
}
