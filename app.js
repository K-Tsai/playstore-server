const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('common'));
app.use(cors());
const playstore = require('./playstore.js')

app.get('/apps', (req, res) => {
	const { genre, sort } = req.query;
	if(genre) {
		if(!['Action', 'Puzzle', 'Strategy', 'Casual', 
		'Arcade', 'Card'].includes(genre)) {
			return res
				.status(400)
				.send('Genre must be one of Action, Puzzle, Strategy, Casual, Arcade, or Card')	
		}
	}

	if(sort) {
		if(!['rating', 'app'].includes(sort)) {
			return res
				.status(400)
				.send('Sort must be one of rating or app')
		}
	}
	console.log(playstore);
	res
	.json(playstore)
});

app.listen(8000, () => {
    console.log('Server started on PORT 8000')
})