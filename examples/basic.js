const { email } = require('../')
const mime = require('mime')

email({
  to: 'example@example.com',
  subject: 'hello',
  body: 'hey there from js',
  attachments: [
    {
      content: Buffer.from("Hello, World!").toString('base64'),
      type: mime.getType("txt"),
      filename: "example.txt"
    }
  ]
})
