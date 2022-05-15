const bcrypt = require('bcrypt'); 
const { User } = require('../../../models'); 
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
   const schema = {
      name: 'string|empty: false',
      email: 'email|empty: false',
      password: 'string|min: 6',
      profession: 'string|optional'
   }
   const body = req.body;
   const validate = v.validate(body, schema);
   if (validate.length) {
      return res.status(400).json({
         status: 'error',
         message: validate
      });
   }

   const user = await User.findOne({
      where: { email: body.email }
   });
   if (user) {
      return res.status(409).json({
         status: 'error',
         message: 'Email already exist'
      })
   }

   const password = await bcrypt.hash(body.password, 10);
   const data =  {
      name: body.name,
      email: body.email,
      password,
      profession: body.profession,
      role: 'student',
      avatar: body.avatar
   }
   const createUser = await User.create(data);
   return res.json({
      status: 'success',
      message: 'Create account',
      data: {
         id: createUser.id
      }
   })
}