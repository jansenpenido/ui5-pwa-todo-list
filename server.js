const port = process.env.PORT || 8809
const express = require('express')
express()
	.use(express.static('webapp'))
	.listen(port, () => console.log(`openui5 pwa sample is live on port ${port}`))