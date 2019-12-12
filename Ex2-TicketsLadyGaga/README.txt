Project 2:

Name: Chen Gutman.  id:205616147

API:
https://documenter.getpostman.com/view/9403224/SWE9XbZX

Function 'addNewOrder': need to receive name and number of tickets
For example :
{
	"name":"Chen",
	"numberOfTickets":4
}
Function 'deleteOrder' : receive only the reservation number (id)
For example :
{
	"id":1
}

Function 'UpdateOrder': receive the reservation number and also a new name and a new number tickets.
For example :
{
	"id":1,
	"name": "omer",
	"numberOfTickets":1
}

Function 'showAll' & 'resetOrders' & 'viewLog' only Admin :
{
	"Admin":true
}
** false will show you a massage that only admin can show this pages. 

