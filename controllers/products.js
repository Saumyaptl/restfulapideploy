const product = require("../models/product");
const getallproducts = async(req,res)=>{
    const{company,name,feature,sort,select} = req.query;
    const queryobject = {};
    if(company){
        queryobject.company = company;
    }
    if(name){
        queryobject.name = { $regex: name, $options:"i"};
    }
    if(feature){
        queryobject.feature = feature;
    }
    let apidata = product.find(req.query);
    if(sort){
        let sortfix = sort.replace(","," ");
        apidata = apidata.sort(sortfix);
    }
    if(select){
        let selectfix = select.split(",").join(" ");
        apidata = apidata.select(selectfix);
    }
    let page = Number(req.query.page)|| 1;
    let limit = Number(req.query.limit)||2;
    let skip =( page-1)*limit;
    apidata = apidata.skip(skip).limit(limit);
    const Mydata = await apidata;
    res.status(200).json({Mydata});
};
const getallproductstesting = async(req,res)=>{
    const Mydata = await product.find(req.query).select("name -price");
    console.log(req.query);
    res.status(200).json({Mydata});

};
module.exports = {getallproducts , getallproductstesting};