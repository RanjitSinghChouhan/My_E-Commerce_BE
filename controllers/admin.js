const model = require('../models');
const { getAccessToken } = require('../services/jwt');

const Admin = model.admin;
module.exports = {
    register: async function(req, res){
        try{
            const user = await Admin.find({email: `${req.body.email}`});
            if(user.length){
                return res.status(401).json({
                    status: false,
                    message: "user already exist"
                })
            }
             await Admin.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            return res.json({
                status: true,
                message: "user registered successfully"
            })
        }catch(error){
            console.log(error)
            return res.status(500).json({
                status: false,
                message: "Internal server error"
            })
        }
    },

    login: async function(req, res){
        try{
            const user = await Admin.find({email: `${req.body.email}`})
            if(user.length === 0){
                return res.status(404).json({
                    status: false,
                    message: "user does not exist"
                })
            }else {
                if(user[0].password !== `${req.body.password}`){
                    return res.status(401).json({
                        status: false,
                        message: "password does not match"
                    })
                }else {
                    const accessToken = await getAccessToken({userId: user[0]._id})
                    return res.json({
                        status: true,
                        message: "user logged in successfully",
                        accessToken
                    })
                }
            }
        }catch(error){
            console.log(error)
            return res.status(500).json({
                status: false,
                message: "Internal server error"
            })
        }
    },

    userDetails: async function(req, res){
        try{
            const userId = req.userInfo.userId
            const userInfo = await Admin.find({_id: userId});
            return res.status(200).json({
                status: true,
                message: "successfully loaded",
                data: userInfo[0]
            })
        }catch(error){
            console.log(error)
            return res.status(500).json({
                status:  false,
                message: "internal server error"
            })
        }
    }
    
}