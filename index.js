const express = require('express');
const app = express();

app.use(express.json());


var cs = new Map()
/**
* POST /cookie
*/
app.post('/cookie', (req, res) => {
    const { name, value, milliseconds } = req.body
    // TODO what if name exists?
    const expires = new Date()
    expires.setTime(expires.getTime() + milliseconds)
    const cookie = { name, value, expires }
    cs.set(name, { value, expires })
    return res.status(201).json(cookie)
})

app.use((req, res) => {
    return res.status(404).json({ error: 'Not Found' });
})

app.listen(3000)