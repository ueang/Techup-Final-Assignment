
// Question 5: Calculating Total Price in User's Cart


function calculateTotalPrice(input) {
    // เริ่มเขียนโค้ดตรงนี้
    let total =0
    for(let i=0;i<input.length;i++) {
      total+= input[i].price*input[i].quantity
    }
   return total
   }
   
   
   // ตัวอย่างการใช้งาน
   const cart = [
    { name: "apple", price: 10, quantity: 2 },
    { name: "banana", price: 15, quantity: 1 },
    { name: "orange", price: 5, quantity: 3 },
   ];

   console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50


   //another method: reduce
// Question 5: Calculating Total Price in User's Cart


function calculateTotalPrice() {
    // เริ่มเขียนโค้ดตรงนี้
    return cart.reduce((total,item)=> total+item.price*item.quantity,0)
  }
   // ตัวอย่างการใช้งาน
   const cart = [
    { name: "apple", price: 10, quantity: 2 },
    { name: "banana", price: 15, quantity: 1 },
    { name: "orange", price: 5, quantity: 3 },
  ];
   console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
 
 
 