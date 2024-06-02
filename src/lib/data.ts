import { shops } from "./seed";

export async function fetchOverview() {
  try {
    const cardDetails = shops.map((shop) => {
      return {
        key: shop.id,
        id: shop.id,
        shopName: shop.title,
        items: shop.items.length,
      };
    });

    return cardDetails;
  } catch (err) {
    console.log("Error fetching data: ", err);
    throw err;
  }
}

export async function fetchInventory() {
  try {
    await fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((res) => {
        return res;
      })
      .catch((err) => console.log("Err fetching: ", err));
  } catch (err) {
    console.log("error fetching inventory: ", err);
    throw err;
  }
}
