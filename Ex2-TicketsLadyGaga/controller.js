const url = require ('url');
const deleteOrder= require('./handler').deleteOrder;
const addNewOrder= require('./handler').addNewOrder;
const UpdateOrder= require('./handler').UpdateOrder;
const showAll= require('./handler').showAll;
const resetOrders= require('./handler').resetOrders;
const viewLogs = require('./handler').viewLogs;


module.exports =(req,res) => {
    console.log(`Request ${req.method} came from ${req.url}`);

    const urlObject = url.parse(req.url,true,false);
    req.urlObject =urlObject;
    switch(req.method){
        case 'PUT':
            if(urlObject.path.startsWith('/UpdateOrder')){
                UpdateOrder(req,res);
            }
            break;
        case 'DELETE':
           if(urlObject.path.startsWith('/deleteOrder')){
                deleteOrder(req,res);
            }
            else if(urlObject.path.startsWith('/resetOrders')){
                resetOrders(req,res);
            }
            break;
        case 'POST':
            if(urlObject.path.startsWith('/addNewOrder')){
                addNewOrder(req,res);
            }
            else if(urlObject.path.startsWith('/showAll')){
                showAll(req,res);
            }
            else if(urlObject.path.startsWith('/viewLogs')){
                viewLogs(req,res);
            }
            break;
    }
}