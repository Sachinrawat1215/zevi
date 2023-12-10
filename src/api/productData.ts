import { faker } from "@faker-js/faker";

interface Product {
  category: string;
  name: string;
  image: string;
  strikethroughPrice: number;
  newPrice: number;
  rating: number;
  ratingCount: number;
}

function generateFakeProduct(): Product {
  const category = faker.commerce.department();
  const name = faker.commerce.productName();
  const image = faker.image.imageUrl(200, 200);
  const strikethroughPrice = Number(faker.commerce.price(100, 500));
  const newPrice = Number(strikethroughPrice) - 100;
  const rating = Number(faker.commerce.price(1, 5));
  const ratingCount = Number(faker.commerce.price(10, 100));

  return {
    category,
    name,
    image,
    strikethroughPrice,
    newPrice,
    rating,
    ratingCount,
  };
}

export const getProducts = () => {
  const products = [];

  for (let i = 0; i < 200; i++) {
    const product = generateFakeProduct();
    if(product.category === "Clothing"){
      console.log(product.category);
      products.push(product);
    }
  }
console.log(products);
  return products;
};
