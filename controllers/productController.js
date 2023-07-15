const Product = require('../models/product');

module.exports.create = async function(req, res){
    console.log(req.body);
    let product = await Product.create(req.body);
    console.log('new product : ', product);

    return res.json(200, {
        product : product
    });
    // return res.send('you can create new product database');
}

module.exports.productList = async function(req, res){
    let product = await Product.find();
    return res.json(200, {
        products : product
    });
}

module.exports.destroy = async function(req, res){
    let product = await Product.findByIdAndDelete(req.params.id);
    return res.json(200,{
        message : 'data successfully deleted for given id',
        product : product
    });
}

module.exports.details = async function(req, res){
    // console.log("fetching id =", req.params.id);
    // console.log('fetching data by query', req.query);
    let productbyId = await Product.findById(req.params.id);
    console.log('product details :', productbyId);
    let temp = Number(productbyId.quantity)+ Number(req.query.quantity);
    let product = await Product.findByIdAndUpdate(req.params.id, {
        quantity : temp
    });
    // let product = await Product.updateOne({id : req.params.id},  {
    //     quantity : temp
    // }, {runValidators : true}).exec();
    product = await Product.findById(req.params.id);

    return res.json(200, {
        message : 'data gets successfully updated',
        product : product
    });
}