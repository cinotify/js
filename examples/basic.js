const { email } = require('../')

email({
    to: 'example@example.com',
    subject: 'hello',
    body: 'hey there from js'
})