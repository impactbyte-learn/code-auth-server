const User = require('./model')

const SEED_USERS = [
  {
    email: 'alpha@example.com',
    password: 'alphapassword'
  },
  {
    email: 'beta@example.com',
    password: 'betapassword'
  },
  {
    email: 'gamma@example.com',
    password: 'gammapassword'
  }
]
const controller = {
  // ---------------------------------------------------------------------------
  seed: async (req, res, next) => {
    User.insertMany(SEED_USERS)
      .then(users => {
        res.status(200).send(users)
      })
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      )
  },

  // ---------------------------------------------------------------------------
  get: async (req, res, next) => {
    User.find()
      .then(users => {
        res.status(200).send(users)
      })
      .catch(error =>
        res.status(400).send({
          message: error
        })
      )
  },

  // ---------------------------------------------------------------------------
  getOne: async (req, res, next) => {
    User.findOne({
      _id: req.params.id
    })
      .then((err, user) => {
        res.status(200).send(user)
      })
      .catch(error =>
        res.status(400).send({
          message: error
        })
      )
  },

  // ---------------------------------------------------------------------------
  register: async (req, res, next) => {
    const { email, password } = req.body

    const newUser = {
      email,
      password
    }

    User.create(newUser)
      .then((err, user) => {
        res.send({
          message: `User is successfully registered`,
          newUser
        })
      })
      .catch(error =>
        res.status(400).send({
          message: error
        })
      )
  },

  // ---------------------------------------------------------------------------
  login: async (req, res, next) => {
    res.send({
      message: `User is successfully logged in`,
      token: `ey.................`
    })
  },

  // ---------------------------------------------------------------------------
  logout: async (req, res, next) => {
    res.send({
      message: `User is successfully logged out`
    })
  }
}

module.exports = controller
