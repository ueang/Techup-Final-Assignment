
// Question #1: Inventory Management


const inventory = {
 apple: { price: 35, quantity: 100 },
 banana: { price: 10, quantity: 50 },
};


// เริ่มเขียนโค้ดตรงนี้
//apple=200
inventory.apple.quantity=200
console.log(inventory)


//add orange
inventory.orange={price: 20, quantity: 300}
console.log(inventory)


//คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกด้วย Loop
console.log(inventory.apple.price)


let total=0
for (let key in inventory){
 total+=inventory[key].price*inventory[key].quantity
}
console.log("Total inventory value: "+total+" baht")
