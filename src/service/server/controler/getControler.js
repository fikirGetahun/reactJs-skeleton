const pool = require('../config')

const getControler ={
    getCategory: async (req, res) =>{
        // return res.send('test')
        try{
            const [rows, fields] = await pool.query('select * from category')
          return  res.json({
            data: rows
          })
        return res.send('test')
        }catch(err){
            console.log(err,'this is ')
        }
    }
}

module.exports = getControler;

