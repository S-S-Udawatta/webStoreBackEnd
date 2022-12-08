const CustomerSchema = require('../model/Customer');
const bcrypt = require('bcrypt')

let hashedPassword = null

const saveCustomer = async (req,resp)=>{
    try {
        const salt = await bcrypt.genSalt()
        hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(hashedPassword)
    }catch {
        resp.status(500).send()
    }
    const customer= new CustomerSchema({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    customer.save().then(result=>{
        resp.json({data:{status:201,customer,message:'Customer Saved'}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const getCustomer =  (req,resp)=>{
    CustomerSchema.findOne({email: req.headers.email } ).then(async result => {
        if (result == null) {
            return resp.json({data: {status: 201, value: result, auth:false, message: 'Customer not found'}});
        }
        try {
            if (await bcrypt.compare(req.headers.password, result.password)) {
                return resp.json({data: {status: 201, value: result, auth:true, message: 'Customer found'}});

            } else {
                return resp.json({data: {status: 201, value: result, auth:false, message: 'Customer not found'}});
            }
        } catch {
            return resp.json({data: {status: 201, value: result, auth:false, message: 'Customer not found'}});
        }
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};
const getCustomerByID = (req,resp)=>{
    CustomerSchema.findOne({email: req.headers.email } ).then(result=>{
            resp.json({data: {status: 201, value: result, message: 'Customer found'}});

    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const deleteCustomer = (req,resp)=>{
    CustomerSchema.deleteMany({email: req.headers.id}).then(result=>{
        resp.json({data:{status:201,value:result,message:'Customer exists'}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const listCustomer = (req,resp)=>{
    CustomerSchema.find().then(result=>{
        resp.json({data:{status:201,value:result}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};



module.exports = {
    saveCustomer,
    getCustomer,
    listCustomer,
    deleteCustomer,
    getCustomerByID,
}