const OrderSchema = require('../model/Order');
const e = require("express");

const placeOrder = (req,resp)=>{
    const order = new OrderSchema({
        customer: req.body.customer,
        items: req.body.items,
        totalPrice: req.body.total,
        address: req.body.address,
        contact: req.body.contact,
        date: req.body.date
    })
    order.save().then(result=>{
        if(result != null) {
            resp.json({data: {status: 201, order, message: 'Order Placed'}});
            console.log(result)
        }
        else {
            resp.json({data: {status: 201, order, message: 'Order Not Placed'}});

        }
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
}

const getOrderList = (req,resp)=>{
    OrderSchema.find().then(result=>{
        if(result != null) {
            resp.json({data: {status: 201, value: result, message: 'Order list'}});
            console.log(result)
        }
        else {
            resp.json({data: {status: 201, value: result, message: 'No Orders'}});

        }
    }).catch(error=>{
        console.log(error)
    })
}

module.exports = {
    placeOrder,
    getOrderList
}