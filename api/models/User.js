const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
   tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
   ]
})

userSchema.pre('save' , async function(next){
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password , 12);
        this.cpassword = await bcrypt.hash(this.cpassword , 12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function(){
    try{
        let genToken = jwt.sign({_id:this._id} , process.env.KEY);
        this.tokens = this.tokens.concat({token:genToken});
        await this.save();
        return genToken;
    }catch(err){
        console.log(err);
    }
}
const User = mongoose.model('USERS' , userSchema);
module.exports = User;