const orderManager = require('./orderManager').orderManager;
const order = require('./orderManager').order;
const moment = require ('moment');

const newOrderManager = new orderManager();

newOrderManager.on('errorFunc',(msg) => {
    console.log(msg);
})
newOrderManager.on('addNewOrder', (data) => {
    var newOrder = new order(data.id,data.name, data.num);
    newOrderManager.ticketsList.push(newOrder);

})
newOrderManager.on('deleteOrder', (index) => {
    newOrderManager.ticketsList.splice(index,1);
})
newOrderManager.on('UpdateOrder', (data) => {
    newOrderManager.ticketsList[data.index].id =data.id;
    newOrderManager.ticketsList[data.index].name =data.name;
    newOrderManager.ticketsList[data.index].numberOfTickets =data.num;
    newOrderManager.ticketsList[data.index].date= moment().format('L');
})
newOrderManager.on('showAll',() => {
    console.log(newOrderManager.ticketsList);
})
newOrderManager.on('resetOrders',() => {
    newOrderManager.ticketsList = [];
    newOrderManager.count = 0;
})

module.exports = {
    newOrderManager
}

