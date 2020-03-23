const getUserData = (req, res, db) => {
  db.select('*').from('Users')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

module.exports = {
  getUserData
}
