const userModel = require("../models/userModel")
const { isValidName } = require("../util/validator")



const createUser = async (req, res) => {
    try {
        const data = req.body
        let { Name, PhoneNumber, Age, Pincode, AadharNumber, password } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "all fields are mandatory" })

        if (!Name) return res.status(400).send({ status: false, message: "Name is mandatory" })
        if(!isValidName(Name)) return res.status(400).send({status:false,message:"Enter a valid name"})

        if(!PhoneNumber) return res.status(400).send({ status: false, message: "PhoneNumber is mandatory" })
        


    }

    catch (err) {
        return res.status(500).send({ status: false, message: err.message })

    }
}