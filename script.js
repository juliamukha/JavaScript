'use strict';

// class GoodsItem {
//   constructor(title, price, description) {
//     this.title = title;
//     this.price = price;
//     this.description = description;

//   }

//   render() {
//     return `
//         <div class="featuredItem" data-id="1" data-name="${this.title}" data-price="${this.price}">
//         <div class="featuredImgWrap">
//           <img src="images/featured/1.jpg" alt="">
//           <div class="featuredImgDark">
//             <button class="addToCart">
//               <img src="images/cart.svg" alt="">
//               Add to Cart
//             </button>
//           </div>
//         </div>

//         <div class="featuredData">
//           <div class="featuredName">
//             ${this.title}
//           </div>
//           <div class="featuredText">
//             ${this.description}
//           </div>
//           <div class="featuredPrice">
//            $${this.price}
//           </div>
//         </div>
//       </div>`;
//   }
// }

// class GoodsList {
//   constructor() {
//     this.goods = [
//       {
//         title: 'Shirt',
//         price: 150,
//         description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
//       },
//       {
//         title: 'Socks',
//         price: 50,
//         description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
//       },
//       {
//         title: 'Jacket',
//         price: 350,
//         description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
//       },
//       {
//         title: 'Shoes',
//         price: 250,
//         description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
//       },
//       {
//         title: 'Jacket',
//         price: 250,
//         description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
//       },
//       {
//         title: 'Vest',
//         price: 100,
//         description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
//       },
//     ];
//   }

//   render() {
//     let goodsList = "";
//     this.goods.forEach(good => {
//       const goodItem = new GoodsItem(good.title, good.price, good.description);
//       goodsList += goodItem.render();
//     })
//     document.querySelector('.featuredItems').innerHTML = goodsList;
//   }
// }

// const list = new GoodsList();
// list.render();


// Начальный код домашнего задания
const goods = [
  {
    title: 'Shirt',
    price: 150,
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
  },
  {
    title: 'Socks',
    price: 50,
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
  },
  {
    title: 'Jacket',
    price: 350,
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
  },
  {
    title: 'Shoes',
    price: 250,
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
  },
  {
    title: 'Jacket',
    price: 250,
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
  },
  {
    title: 'Vest',
    price: 100,
    description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'
  }
];

const renderGoodsItem = (title = 'New item', price = '-',
  description = 'Known for her sculptural takes on traditional tailoring', index) => {
  return `
        <div class="featuredItem" data-id="item${index + 1}" data-name="${title}" data-price="${price}">
        <div class="featuredImgWrap">
          <img src="images/featured/${index + 1}.jpg" alt="">
          <div class="featuredImgDark">
            <button class="addToCart">
              <img src="images/cart.svg" alt="">
              Add to Cart
            </button>
          </div>
        </div>

        <div class="featuredData">
          <div class="featuredName">
            ${title}
          </div>
          <div class="featuredText">
            ${description}
          </div>
          <div class="featuredPrice">
           $${price}
          </div>
        </div>
      </div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map((item, index) =>
    renderGoodsItem(item.title, item.price, item.description, index));
  document.querySelector('.featuredItems').innerHTML = goodsList.join('');
}

renderGoodsList(goods);