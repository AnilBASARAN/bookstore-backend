const Order = require("./order.model")

const postAnOrder = async(req,res)=>{
try{
    const newOrder =  Order({...req.body});
    await newOrder.save();
    res.status(200).send({message: "Order posted successfully",order: newOrder})
}catch(error){
    console.error("Error creating order",error);
    res.status(500).send({message:"Failed to create new order"})
  }
};

const getOrderByEmail = async(req,res)=>{
    try{
        const {email} = req.params;
        const orders = await Order.find({email}).sort({createdAt:-1})
        if(!orders){
            res.status(404).send({message: "Order not found"})
        }
        res.status(200).send(orders)
    }catch(error){
        console.error("Error fetching order",error);
        res.status(500).send({message: "Failed to fetch order"})
    }
}

module.exports = {
    postAnOrder,getOrderByEmail
}