const products=[];

exports.getAddProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProduct = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
};