const Post = require('../models/post');

module.exports.post = async function (req, res) {
  try {
    const post = await Post.create({
      content: req.body.content,
      user: req.user_id,
    });

    if (post) {
      return res.redirect('back');
    } else {
      console.log('Error in adding a post');
      return res.redirect('back');
    }
  } catch (err) {
    console.log('Error in adding a post:', err);
    return res.redirect('back');
  }
};