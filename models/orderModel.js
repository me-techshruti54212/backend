const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processsing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,required:true}
})

const orderModel=mongoose.model("order",orderSchema)


module.exports={orderModel}