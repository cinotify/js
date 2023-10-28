const { email } = require('../')
const axios = require("axios")
const mime = require('mime')
jest.mock('axios')
axios.post.mockImplementation(() => Promise.resolve())

test('email makes an http request', () => {
    email({
        to: 'jesse@jesse.sh',
        subject: 'abc',
        body: 'def'
    })
    expect(axios.post).toHaveBeenCalledWith("https://www.cinotify.cc/api/notify",{
        subject: 'abc',
        body: 'def',
        to: 'jesse@jesse.sh',
    })
})

test('email with attachments', () => {
    email({
        to: 'jesse@jesse.sh',
        subject: 'abc',
        body: 'def',
        attachments: [
            {
                content: Buffer.from("Hello, World!").toString('base64'),
                type: mime.getType("txt"),
                filename: "example.txt"
            }
        ]
    })
    expect(axios.post).toHaveBeenCalledWith("https://www.cinotify.cc/api/notify",{
        subject: 'abc',
        body: 'def',
        to: 'jesse@jesse.sh',
        attachments: [
            {
                "content": "SGVsbG8sIFdvcmxkIQ==",
                "filename": "example.txt",
                "type": "text/plain",
            }
        ]
    })
})
