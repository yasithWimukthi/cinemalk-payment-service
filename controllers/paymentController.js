const payAll = require("../models/payment_model");




// theaters: add new theater
const payCard = (req, res) => {
    const newPay = new payAll({
        user_id:req.body.user_id,
        holder:req.body.holder,
        number:req.body.number,
        date:req.body.date,
        cvv:req.body.cvv,
        total:req.body.total
    });

    newPay
        .save()
        .then(() => {
            res.status(201).json({
                message: "Payed"
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err.message,
            });
        });
}



const payMobile = (req, res) => {
    const newPay = new payAll({
        user_id:req.body.user_id,
        total:req.body.total,
        owner:req.body.owner,
        phone:req.body.phone
    });

    newPay
        .save()
        .then(() => {
            res.status(201).json({
                message: "Payed"
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err.message,
            });
        });
}









const all ={
    payCard,
    payMobile
}

module.exports = all