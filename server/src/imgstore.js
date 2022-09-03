const multer = require('multer')

const imageStorageEngine = multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, './server/src/avatars')
    },
    filename: (request, file, callback) => {
      callback(null, Date.now() + '--' + file.originalname)
    }
  })

const upload = multer({storage: imageStorageEngine})



module.exports = {upload}