const User= require('../../../models/users');
const jwt= require('jsonwebtoken');


module.exports.createSession = async function(req, res){



    try
    {
        let user = await User.findOne({email: req.body.email});

        if(!user || user.password != req.body.password){
            return res.json(422,{
                message: "rajat"
            });
        }
        return res.json(200,{
            message: 'sign in successfull, keep token safe',
            data: {
                token: jwt.sign((await user).toJSON(), 'codeial', {expiresIn: '100000'})
            }
        })

    }
    catch(err)
    {
        console.log(err);
        return res.json(500,{
        message:"Internal server error"
        });  
    }
    
}