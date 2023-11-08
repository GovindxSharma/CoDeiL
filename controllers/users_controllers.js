const User=require('../models/user')
module.exports.profile=function(req,res){
    return res.render('users',{
        title:'heading',
        name:'Govind'
    })
}
bena
module.exports.post=function(req,res){
    return res.end('<h1>POst</h1>');
}

module.exports.signup=function(req,res){
    return res.render('sign_up',{
        title:'Sign_up'
    })
}
module.exports.signin=function(req,res){
    return res.render('sign_in',{
        title:'Sign_In'
    })
}
module.exports.create = async function (req, res) {
    try {
      if (req.body.password !== req.body.confirm_password) {
        return res.redirect('back');
      }
  
      const existingUser = await User.findOne({ email: req.body.email });
  
      if (!existingUser) {
        await User.create(req.body); // Creating the user directly
        return res.redirect('/users/sign_in');
      } else {
        return res.redirect('back');
      }
    } catch (err) {
      console.log('Error in creating a user:', err);
      return res.redirect('back');
    }
  };

module.exports.createSession=function(req,res){
    return res.redirect('profile')
}