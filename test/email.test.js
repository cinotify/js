const { email } = require('../')
const axios = require("axios")
jest.mock('axios')
axios.post.mockImplementation(() => Promise.resolve())

test('email makes an http request', () => {
    email({
        to: 'jesse@jesse.sh',
        subject: 'abc',
        body: 'def'
    })
    expect(axios.post).toHaveBeenCalled()
})