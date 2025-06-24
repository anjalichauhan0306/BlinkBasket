const dairyProducts = [
  { title: "Amul Taaza Milk", size: "500ml", price: 28, img: "IMAGES/ITEMS/proc_1.jpg" },
  { title: "Amul Gold Milk", size: "500ml", price: 34, img: "IMAGES/ITEMS/proc_1_2.avif" },
  { title: "Amul Shakti Milk", size: "500ml", price: 31, img: "IMAGES/ITEMS/proc_1_3.avif" },
  { title: "Amul Cow Milk", size: "500ml", price: 29, img: "IMAGES/ITEMS/proc_1_4.jpg" },
  { title: "Amul Masti Curd", size: "500ml", price: 24, img: "IMAGES/ITEMS/proc_51.avif" },
  { title: "Amul Butter", size: "100g", price: 62, img: "IMAGES/ITEMS/proc_1_6.avif" }
];
// 🧺 All product data is stored here

const snacksProducts = [
  { title: "Cheetos Flamin Hot", size: "28.3g", price: 160, img: "IMAGES/ITEMS/proc_3_1.jpg" },
  { title: "Masala Peanuts", size: "50g", price: 69, img: "IMAGES/ITEMS/proc_3_2.jpg" },
  { title: "Beanly Choco Dip", size: "52g", price: 99, img: "IMAGES/ITEMS/proc_3_3.jpg" },
  { title: "Jalapeno Chips", size: "113g", price: 99, img: "IMAGES/ITEMS/proc_3_4.jpg" },
  { title: "Brown Rice Paper", size: "100g", price: 229, img: "IMAGES/ITEMS/proc_3_5.jpg" },
  { title: "Cheetos Cheese", size: "24.8g", price: 161, img: "IMAGES/ITEMS/proc_3_6.jpg" }
];

const juiceProducts = [
  { title: "Amul Buttermilk", size: "440ml", price: 15, img: "IMAGES/ITEMS/proc_5_1.jpg" },
  { title: "Thums Up", size: "750ml", price: 45, img: "IMAGES/ITEMS/proc_5_2.jpg" },
  { title: "Bisleri Water", size: "5L", price: 70, img: "IMAGES/ITEMS/proc_5_3.jpg" },
  { title: "Ice Cubes", size: "1kg", price: 69, img: "IMAGES/ITEMS/proc_5_4.jpg" },
  { title: "Diet Coke", size: "300ml", price: 40, img: "IMAGES/ITEMS/proc_5_5.jpg" },
  { title: "Sprite Lime", size: "750ml", price: 45, img: "IMAGES/ITEMS/proc_5_6.jpg" }
];
const tobaccoProducts = [
  { title: "Brown Cones Stash Pro", size: "6 pcs", price: 90, img: "IMAGES/ITEMS/proc_2_1.jpg" },
  { title: "Thins Cones LIT", size: "3 packs", price: 60, img: "IMAGES/ITEMS/proc_2_2.jpg" },
  { title: "Ripper Rolling Paper", size: "64 pcs", price: 120, img: "IMAGES/ITEMS/proc_2_3.jpg" },
  { title: "SLIMJIM Rolled Cones", size: "6 pcs", price: 90, img: "IMAGES/ITEMS/proc_2_4.jpg" },
  { title: "Dollar Cones Bongchie", size: "3 packs", price: 60, img: "IMAGES/ITEMS/proc_2_5.jpg" },
  { title: "Flavoured Sesh Rolls", size: "6 rolls", price: 120, img: "IMAGES/ITEMS/proc_2_6.jpg" }
];

const freshenerProducts = [
  { title: "Mint Candy (Strawberry)", size: "18g", price: 149, img: "IMAGES/ITEMS/proc_4_1.jpg" },
  { title: "Rajnigandha Pearls", size: "6g", price: 60, img: "IMAGES/ITEMS/proc_4_2.jpg" },
  { title: "Spearmint Gum", size: "14 pcs", price: 160, img: "IMAGES/ITEMS/proc_4_3.jpg" },
  { title: "Mint Candy (Fresh)", size: "14g", price: 149, img: "IMAGES/ITEMS/proc_4_4.jpg" },
  { title: "Tropical Twist Gum", size: "14 pcs", price: 160, img: "IMAGES/ITEMS/proc_4_5.jpg" },
  { title: "Mint Saunf", size: "100g", price: 46, img: "IMAGES/ITEMS/proc_4_6.jpg" }
];
const fruitProducts = [
  { title: "Fresh Banana", size: "6 pcs", price: 39, img: "IMAGES/ITEMS//banana.jpg" },
  { title: "Apples Imported", size: "4 pcs", price: 129, img: "IMAGES/ITEMS/apple.jpg" },
  { title: "Orange Juicy", size: "1kg", price: 60, img: "IMAGES/ITEMS/orange.jpg" },
  { title: "Pineapple Sliced", size: "400g", price: 79, img: "IMAGES/ITEMS/pineapple.jpg" },
  { title: "Kiwi Green", size: "3 pcs", price: 85, img: "IMAGES/ITEMS/kiwi.jpg" },
  { title: "Grapes Seedless", size: "500g", price: 55, img: "IMAGES/ITEMS/grapes.jpg" }
];

function renderProducts(productArray, sectionTitle) {
  const productHTML = productArray.map(product => {
    return `
      <div class="product-item">
        <div class="productimg">
          <img src="${product.img}" width="70%" alt="${product.title}">
          <p><img src="IMAGES/PRODUCTS/15-mins.png" width="15px" alt="time">8 Mins</p>
        </div>
        <div class="product-content">
          <h3>${product.title}</h3>
          <p>${product.size}</p>
          <div class="btn-price-outer">
            <b>₹${product.price}</b>
            <button>ADD</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
   document.querySelector('.product-section-container').innerHTML += `
    <section class="product-section">
      <div class="headingRow">
        <h2>${sectionTitle}</h2>
        <a href="#">See All</a>
      </div>
      <div class="productRow">
        ${productHTML}
      </div>
    </section>
  `;
}

window.onload = () => {
  showGreeting();
  renderProducts(dairyProducts, "Dairy, Bread & Eggs");
  renderProducts(snacksProducts, "Snacks & Munchies");
  renderProducts(juiceProducts, "Cold Drinks & Juices");
  renderProducts(freshenerProducts, "Mouth Fresheners");
  renderProducts(tobaccoProducts, "Rolling Paper & Tobaccos");
   renderProducts(fruitProducts, "Fresh Fruits");
};