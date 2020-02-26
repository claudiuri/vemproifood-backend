const qs = require('qs');
const express = require('express');
const apm = require('elastic-apm-node');
const { getTempAndGenre } = require('./controllers/OpenWeatherMapController');
const { getTracks } = require('./controllers/SpotifyController');
const app = express();

apm.start({
	serviceName: 'NodeApp',
	serverUrl: 'http://10.96.145.224:8200'
});

app.use("/", async (req, res) => {

	let { city, lat, lon } = req.query;
	let search;

	if (city){
		search = qs.stringify({ q: encodeURIComponent(city) });

	}else if (lat && lon){
		search = qs.stringify({ lat, lon });
	}

	try {

		const { temp, genre } = await getTempAndGenre(search);
		
		const tracks = await getTracks(genre);

		res.send({ temp, genre, tracks })

	} catch (error) {
		
		const { response } = error;

		if(response)
			res.status(response.data.cod).send({ "Error": response.data.message })
		else
			res.status(500).send({ "Error": "Server error" })
	}
});

app.listen(3000, () => console.log("Servidor on")) 