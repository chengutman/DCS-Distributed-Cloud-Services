const newOrderManager = require('./orderEvents').newOrderManager;
var Log =[];
var logCounter=1;

const deleteOrder = (req,res)=>{
    let body=[];
    req.on('data',(chunk)=>{
        body+=chunk.toString();
    });
    req.on('end',()=>{
        const newDataItem=JSON.parse(body);
        if(newDataItem.id){
            let msg = newOrderManager.deleteOrder(newDataItem.id);
            Log.push(`${logCounter++}.${msg}`);
            res.write(msg);
            res.end();
        }
        else{
            Log.push(`${logCounter++}.invalid input`);
            res.write('invalid input');
            res.end();
        }
    });
}
const addNewOrder = (req,res)=>{
    let body=[];
    req.on('data',(chunk)=>{
        body+=chunk.toString();
    });
    req.on('end',()=>{
        const newDataItem=JSON.parse(body);
        if(newDataItem.name && newDataItem.numberOfTickets){
            let msg= newOrderManager.addNewOrder(newDataItem.name,newDataItem.numberOfTickets);
            Log.push(`${logCounter++}.${msg}`);
            res.write(msg);
            res.end();
        }
        else{
            Log.push(`${logCounter++}.invalid input`);
            res.write('invalid input');
            res.end();
        }
    });
}
const UpdateOrder = (req,res)=>{
    let body=[];
    req.on('data',(chunk)=>{
        body+=chunk.toString();
    });
    req.on('end',()=>{
        const newDataItem=JSON.parse(body);
        if(newDataItem.id && newDataItem.name &&newDataItem.numberOfTickets){
            let msg= newOrderManager.UpdateOrder(newDataItem.id,newDataItem.name,newDataItem.numberOfTickets);
            Log.push(`${logCounter++}.${msg}`);
            res.write(msg);
            res.end();
        }
        else{
            Log.push(`${logCounter++}.invalid input`);
            res.write('invalid input');
            res.end();
        }
    });
}
const showAll = (req,res)=>{
    let body=[];
    req.on('data',(chunk)=>{
        body+=chunk.toString();
    });
    req.on('end',()=>{
        const newDataItem=JSON.parse(body);
        if(newDataItem.admin){
            let msg= newOrderManager.showAll();
            Log.push(`${logCounter++}.View all orders`);
            res.write(JSON.stringify(msg));
            res.end();
        }
        else{
            Log.push(`${logCounter++}.Only Admin can view this page`);
            res.write('Only Admin can view this page');
            res.end();
        }
    });
}
const resetOrders = (req,res)=>{
    let body=[];
    req.on('data',(chunk)=>{
        body+=chunk.toString();
    });
    req.on('end',()=>{
        const newDataItem=JSON.parse(body);
        if(newDataItem.admin){
            let msg= newOrderManager.resetOrders();
            Log.push(`${logCounter++}.Reset all orders`);
            res.write(JSON.stringify(msg));
            res.end();
        }
        else{
            Log.push(`${logCounter++}.Only Admin can view this page`);
            res.write('Only Admin can view this page');
            res.end();
        }
    });
}
const viewLogs = (req,res)=>{
    let body=[];
    req.on('data',(chunk)=>{
        body+=chunk.toString();
    });
    req.on('end',()=>{
        const newDataItem=JSON.parse(body);
        if(newDataItem.admin){
            console.log(Log);
            res.write(JSON.stringify(Log));
            res.end();
        }
        else{
            Log.push(`${logCounter++}.Only Admin can view all Logs`);
            res.write('Only Admin can view all Logs');
            res.end();
        }
    });
}
module.exports = {
    deleteOrder,
    addNewOrder,
    UpdateOrder,
    showAll,
    resetOrders,
    viewLogs
}
