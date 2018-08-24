const jwt = require('jsonwebtoken')

const controller = {
  get: async (req, res, next) => {
    res.status(200).send({
      message: `Token is valid! Yeaaaay!`
    })
  },

  checkToken: async (req, res, next) => {
    const withToken =
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'

    if (withToken) {
      const token = req.headers.authorization.split(' ')[1] || ''

      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
          res.status(400).send({
            message: `Token is invalid when verifying`
          })
        }
        req.decoded = decoded
        next()
      })
    } else {
      res.status(400).send({
        message: `Token is not found in request headers`
      })
    }
  }
}

module.exports = controller
