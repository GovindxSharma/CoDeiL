const User=require('../models/user')
//profile render
module.exports.profile=function(req,res){
    return res.render('users',{
        title:'User Profile'
        // name:'Govind'
    })
}
// render the sign up page
module.exports.signup = function(req, res){
  if (req.isAuthenticated()){
  return res.redirect('/users/profile');
  }
  return res.render('sign_up', {
  title: "Codeil | Sign Up"
  })
  }
module.exports.signin = function(req, res){
  if (req.isAuthenticated()){
  return res.redirect('/users/profile');
  }
  return res.render('sign_in', {
  title: "Codeil | Sign In"
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
        return res.redirect('/users/sign-in');
      } else {
        return res.redirect('back');
      }
    } catch (err) {
      console.log('Error in creating a user:', err);
      return res.redirect('back');
    }
  };

// sign in and create a session for the user
module.exports.createSession = function(req, res){
  return res.redirect('back');
  }
  
  module.exports.destroySession = function (req, res) {
    req.logout(function (err) {
      if (err) {
        console.log('Error in logging out:', err);
      }
      return res.redirect('back');
    });
  };
  