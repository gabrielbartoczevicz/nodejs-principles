const express = require('express')

const app = express()

app.get('/', (request, response) => response.json({ message: 'Henlo World!' }))

app.listen(3333, () => console.log('Server started at :3333'))
