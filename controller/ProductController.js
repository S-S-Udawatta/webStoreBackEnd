const  ProductSchema = require('../model/Product');

const addProduct = (req,resp)=>{
    const product = new ProductSchema({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        unitPrice: req.body.unitPrice,
        category: req.body.category,
        thumbnail: req.body.thumbnail
    });
    product.save().then(result=>{
        resp.json({data:{status:201,product,message:'Product Saved'}});
        console.log(result);
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
}

const deleteProduct = (req,resp)=>{
    ProductSchema.findOneAndDelete({id: req.headers.id}).then(result=>{
        resp.json({data:{status:201,value:result,message:'Product Deleted'}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const getProduct = (req,resp)=>{
    console.log(req.headers.id)
    ProductSchema.findOne({id: req.headers.id } ).then(result=>{
        resp.json({data: {status: 201, value: result, message: 'Product found'}});
        console.log(result)

    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const updateProduct = (req,resp)=>{
    console.log(req.body)
    ProductSchema.findOneAndUpdate({id: req.body.id } , {$set:{
            name: req.body.name,
            description: req.body.description,
            unitPrice: req.body.unitPrice,
            category: req.body.category,
            thumbnail: req.body.thumbnail
    }}).then(result=>{
        resp.json({data: {status: 201, value: result, message: 'Product Updated'}});

    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const listProduct = (req,resp)=>{
    ProductSchema.find().then(result=>{
        resp.json({data:{status:201,value:result}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const listByProductCategory = (req,resp)=>{
    ProductSchema.find({category: req.headers.category }).then(result=>{
        resp.json({data:{status:201,value:result}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    listProduct,
    listByProductCategory
}