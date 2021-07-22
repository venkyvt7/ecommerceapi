const express = require('express');
// const { or } = require('sequelize/types/lib/operators');

const router = express.Router();
const sequelize = require('../../db/db');
const Orders = require('../../db/order');
const Products = require('../../db/products');
router.post('/placeorders', async (req, res) => {


    const {
        userid,
        productid,
        address
    } = req.body;

    console.log(userid);
    // console.log(productid.toString());

    cc = productid.toString();
    console.log(cc)


    var tt = {
        userid: userid,
        productsid: productid.toString(),
        address: address
    }

    try {
        const value = await Orders.create(tt);
        res.send("Succesfully Ordered");
    } catch {
        res.send("dfjfkjdfdjk");
    }
})


router.post('/orderhistory', async (req, res) => {

    const {
        userid
    } = req.body;

    try {
        var ordersbyid = await Orders.findAll({
            where: {
                userid
            }
        });

        // console.log((ordersbyid[0].dataValues));
        // ordersbyid[0].dataValues.prod="43434";
        // res.send(ordersbyid);
        var value = [];

        var temp1 = [];
        for (i = 0; i < ordersbyid.length; i++) {

            value.push(ordersbyid[i]);
            // console.log(ordersbyid[i],666556);
            var str = ordersbyid[i].productsid;
            var productids = str.replace('[', '').replace(']', '').split(',').map(x => x.trim());
            console.log(productids);
            var temp = [];
            for (j = 0; j < productids.length; j++) {
                // console.log(productids[j])
                const ordersbyid1 = await Products.findOne({
                    where: {
                        id: productids[j]
                    }
                });
                temp.push(ordersbyid1);
            }
            // console.log(temp);
            ordersbyid[i].dataValues.products = temp;
            // console.log(value[i],"hjhjhjhjjhhj");
            // temp1.push(temp);



        }

        // console.log(ordersbyid)
        res.send(ordersbyid);
    } catch (e) {

    }



})

module.exports = router;