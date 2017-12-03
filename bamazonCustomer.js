var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");
var productExist = false;
var quantityValid = false;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bamazon_db",
  port: "8889"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

});

function readProduct() {
    console.log("Available Products for Purchase:");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;

      console.table(res);
    //    connection.end();
       purchaseProduct();
    });
    
}
  
function purchaseProduct() {
    var question = [{
        name: 'id',
        message: 'Which item would you like to purchase? (Enter id #)',
        type: 'input'
    }, {
        name: 'quantity',
        message: 'How many of these items would you like to purchase?',
        type: 'input'
    
    }];
    inquirer.prompt(question).then(function(answer) {
        var purchaseExecute = new PurchaseInquiry (answer.id, answer.quantity);
        
    });
};

function additionalOrder() {
    var question = {
        name: 'buyMore',
        message: 'Would you like to purchase additional merchandise?',
        type: 'list',
        choices: ['Yes', 'No']
    };
    inquirer.prompt(question).then(function(answer) {
        if(answer.buyMore === 'Yes'){
            readProduct();
        } else {
            console.log("Thanks for shopping with Bamazon! Please come again!!!")
            connection.end();
        }
    })
};

var PurchaseInquiry = function(id, quantity){
    this.id = id;
    this.quantity = quantity;
    var itemQuery = 'SELECT * FROM products WHERE item_id = ?';
    connection.query(itemQuery, [parseInt(this.id)], function(err, res) {
        if (err) throw err;
        console.log("res[0] yields   " + res[0].stock_quantity);
        if (parseInt(quantity) <= res[0].stock_quantity) {

            var newQuantity = res[0].stock_quantity - parseInt(quantity);
            var orderQuery = 'UPDATE products SET stock_quantity = ? WHERE item_id = ?';
            connection.query(orderQuery, [newQuantity, id], function() {
                if (err) throw err;
                var totalCost = res[0].price * parseInt(quantity);
                console.log('You have chosen to buy ' + quantity + ' of ' + res[0].product_name);
                console.log('Your total for this order is: $' + totalCost +'. Thank you for your purchase!');
               additionalOrder();
            });
        } else {console.log('Selected Quantity Not Available')
                readProduct()};
    })

};
readProduct();