let stocks = {
  fruits: ["strwayberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = 1;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} selected./`);

    await time(0000);
    console.log("Start the production");

    await time(2000);
    console.log("Cut the fruit");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

    await time(1000);
    console.log("Start the Machine");

    await time(2000);
    console.log(`${stocks.holder[1]} was selected`);

    await time(3000);
    console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} were topped`);

    await time(2000);
    console.log("Icecream is served");
  } catch (error) {
    console.log("Error occoured! can't process your order", error);
  } finally {
    console.log("Day Endend.");
  }
}
kitchen();
