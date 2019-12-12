const MAX_capcity= 10;
const EventEmitter=require('events');
const moment = require ('moment');
var idCounter=1;

class order{
    constructor(id,name,numberOfTickets){
        this.id=id;
        this.name=name;
        this.numberOfTickets=numberOfTickets;
        this.date=moment().format('L');
    }
}

class orderManager extends EventEmitter{
    constructor(){
        super();
        this.ticketsList = [];
        this.count = 0;
    }

    addNewOrder(_name, _numberOfTickets){
        if(_numberOfTickets + this.count > MAX_capcity){
            this.emit('errorFunc',`Sorry ${_name},no tickets left`);
             return 'There is not enough capctiy';
        }else{
            let newOrderData = {name: _name,num: _numberOfTickets, id: idCounter};
            this.emit('addNewOrder', newOrderData);
            this.count += _numberOfTickets;
            idCounter++; 
            return 'New order successfully added!';
        }
    }
    deleteOrder(_id){
        var index=this.ticketsList.findIndex(x=>x.id==_id);
        if (index==-1){
            this.emit('errorFunc',`There is no such order ${_id} in the system`);
             return 'We can not find this order';
        }
        else{
            this.count -= this.ticketsList[index].numberOfTickets;
            this.emit('deleteOrder',index);
            return 'The order is no longer exist';
        }
    }
    UpdateOrder(_id,_name,_numberOfTickets){
        var index=this.ticketsList.findIndex(x=>x.id==_id);
        var updateOrder;
        if (index==-1){
            this.emit('errorFunc',`There is no such order ${_id} in the system`);
            return 'We can not find this order';
        }
        else{
            if(this.ticketsList[index].numberOfTickets>_numberOfTickets)
            {
                this.count -= this.ticketsList[index].numberOfTickets;
                this.count +=_numberOfTickets;
                updateOrder= {name:_name,num: _numberOfTickets,id:_id,index:index};
                this.emit('UpdateOrder',updateOrder);
                return 'Order successfully updated! '
            }
            else{
                let diff = _numberOfTickets - this.ticketsList[index].numberOfTickets;
                if(diff + this.count > MAX_capcity){
                    this.emit('errorFunc',`Sorry ${_name},we were unable to update the order because no tickets were left`);
                    return 'There is not enough capctiy';
                }
                else{
                    this.count += diff;
                    updateOrder= {name:_name,num: _numberOfTickets,id:_id,index:index};
                    this.emit('UpdateOrder',updateOrder);
                    return 'Order successfully updated!';
                }
            }            
        }
    }
    showAll(){
        this.emit('showAll');
        return this.ticketsList;
    }
    resetOrders(){
        this.emit('resetOrders');
        return 'All orders have been reset';
    }
    
}

module.exports = {
    order,
    orderManager
}