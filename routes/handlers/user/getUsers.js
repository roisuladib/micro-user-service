const { User } = require('../../../models'); 

module.exports = async (req, res) => {
   const usersId = req.query.users_id || [];
   const sqlOptions = { 
      attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar'] 
   }
   if (usersId.length) {
      sqlOptions.where = { id: usersId }
   }
   const users = await User.findAll(sqlOptions);
   if (!users) {
      return res.status(404).json({
         status: 'error',
         message: 'User not found!'
      });
   }
   return res.json({
      status: 'success',
      data: users
   });
}