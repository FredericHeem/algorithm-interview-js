import assert from "assert";
import Wallet from "./problem";

const coins = [1, 100, 200, 200, 1000, 1];

it("add one", () => {
  const wallet = Wallet();
  const coin = 2;
  wallet.add(coin);
  assert.equal(wallet.totals(), 2);
});

it("sample 1", () => {
  const wallet = Wallet();
  
  coins.forEach(coin => wallet.add(coin));
  assert.equal(wallet.totals(), 1502);
});
it.only("spend", () => {
  const wallet = Wallet();
  coins.forEach(coin => wallet.add(coin));
  wallet.display();

  assert.equal(wallet.spend(100), 1)
  wallet.display();
  assert.equal(wallet.totals(), 1402);

  assert.equal(wallet.spend(50), 151)
  wallet.display();
  assert.equal(wallet.totals(), 1352);

  try {
    wallet.spend(5e3);
    assert(false);
  } catch(error){
    console.log("error ", error)
    assert(error === "Unsufficient funds");
  }
});

it("display", () => {
  const wallet = Wallet();
  coins.forEach(coin => wallet.add(coin));
  wallet.display();
});

