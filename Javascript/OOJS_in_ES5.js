/*
OOPS Principles
- Data Abstraction
   - Hiding the data from External world.
-Data Encapsulation
     - wrapping the data and methods into single unit.

     -why encapsulation?
        - to reduce the complexity of Application
        - to reuse the code
        - organise the code in well structured manner.

- Polymorphism
   Abilty to change from one form to another.

          concepts
          -Operator overloading
          - function/method overloading

- Inheritance
    An ability to acquire the properties and members/ methods of base class into derived class
     
       - Why inheritance?
       1. code reuability
       2. improves the development speed

types of inheritance 
1. Single level inheritance.
2. Multiple level inheritance,
3. Multi level inheritance,
4. Hybrid inheritance,
5. Hierachical inheritance
*/

// let name = "Iphone";

// let model = 13;

// let description = "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.";

// let price = 100000;

// let details = function(){
//     let endProduct = `<h1>${name} ${model}</h1>
//                        <p>${description}</p>
//                        <button>Add to cart</button>
//                       `
//     document.body.innerHTML = endProduct;
// }

// let gstCalc = function(gstPercent){
//    return price + ((price*gstPercent)/100);
// }

// details();

// console.log(gstCalc(18));

// const product = {
//     name : "Iphone",
//     model : 13,
//     description : "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
//     price : 100000,
//     details : function(){
//             let endProduct = `<h1>${this.name} ${this.model}</h1>
//                                <p>${this.description}</p>
//                                <button>Add to cart</button>
//                               `
//             document.body.innerHTML = endProduct;
//         },
//         gstCalc : function(gstPercent=10){
//                return this.price + ((this.price*gstPercent)/100);
//             }
// }

// product.details();

// console.log(product.gstCalc(18));
// console.log(product.gstCalc());

// console.log(10 + 20);

// console.log("10000" + "coders")

function Cart() {
  this.items = [
    {
      name: "Iphone",
      model: 13,
      description:
        "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
      price: 100000,
    },
    {
        name: "Iphone",
        model: 12,
        description:
          "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
        price: 80000,
      },
      {
        name: "Iphone",
        model: 11,
        description:
          "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
        price: 60000,
      },
  ];

  this.allProducts = function(){
      let tableHtml = `<table>
                        <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>${this.items[0].name}</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>${this.items[1].name}</td>
                     </tr>
                     <tr>
                     <td>1</td>
                     <td>${this.items[2].name}</td>
                  </tr>
                  </table>
                        `
    document.body.innerHTML = tableHtml;
  }
}

const cObj = new Cart();
// console.log(cObj.distributorName);


Cart.prototype.distributorName = "10000 Coders";

Cart.prototype.allProductsUsingLoop = function(){
    let tableHtml = `<table>
                        <tr>
                           <th>Sl No</th>
                           <th>Name</th>
                        </tr>
                       `
    for(let i = 0; i < this.items.length; i++){
        tableHtml += `<tr>
                         <td>${i+1}</td>
                         <td>${this.items[i]?.name}</td>
                      </tr>`
    }
    tableHtml += `</table>`
    document.body.innerHTML = tableHtml;
}

const cObj1 = new Cart();
cObj1.allProductsUsingLoop();
console.log(cObj1.distributorName);


