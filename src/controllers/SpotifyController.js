// require('dotenv').config();
const qs = require('qs');
const axios = require('axios');

const getToken = () => {

    return new Promise(async(resolve, reject) => {
        try {
  
            const data = qs.stringify({ grant_type: 'client_credentials' })

            const headers = { 
                headers: { 
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(`${process.env.CLIENTE_ID}:${process.env.CLIENTE_SECRET}`).toString('base64')}` 
                },
            };

            const response = await axios.post('https://accounts.spotify.com/api/token', data, headers)

            resolve(response.data.access_token)

          } catch (error) {

            reject(error)
          }
    });
};

module.exports = {

    getTracks(genre){

        return new Promise(async(resolve, reject) => {
            try {

                const token = await getToken()
		
                const response = await axios.get(`https://api.spotify.com/v1/recommendations?limit=20&market=BR&seed_genres=${genre}`, { headers: { 'Authorization': 'Bearer '+ token } })
                
                const tracks = response.data.tracks.map(track => { return { name: track.name }});

                resolve(tracks)

            } catch (error) {
                
                reject(error)
            }
        });
    }
};