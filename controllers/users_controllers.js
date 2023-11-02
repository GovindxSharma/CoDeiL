const User=require('../models/user')
module.exports.profile = async function (req, res) {
  try {
    if (req.cookies.user_id) {
      const user = await User.findById(req.cookies.user_id);

      if (user) {
        return res.render('users',{
          title: "User Profile",
          user
        });
      }
    }

    // If the user is not found or there is no user_id in cookies, or any other error,
    // redirect to the sign-in page
    return res.render('users/sign_in');
  } catch (err) {
    console.error('Error in profile:', err);
    return res.render('users/sign_in');
  }
};


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
  module.exports.createSession = async function (req, res) {
    try {
      // Find a user with the provided email
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        // User not found, redirect back
        return res.redirect('back');
      }
  
      // Check if the password matches
      if (user.password !== req.body.password) {
        return res.redirect('back');
      }
  
      // If password matches, create a session
      res.cookie('user_id', user.id);
      return res.redirect('/users/profile');
    } catch (err) {
      console.error('Error in createSession:', err);
      return res.redirect('back');
    }
  };
  