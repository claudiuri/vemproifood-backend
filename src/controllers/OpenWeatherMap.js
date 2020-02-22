const axios = require('axios');

const getGenreByTemp = (temperature) =>{

    if(temperature > 30) {
        return 'paty'

    } else if(temperature > 14 && temperature < 31) {

        return 'pop'

    } else if(temperature > 9 && temperature < 15){
        
        return 'rock'
    }else{

        return 'classical'
    }
}

module.exports = {

    getTempAndGenre(search){

        return new Promise(async (resolve, reject) =>{
            try {
    
                let urlOpenWeather = `http://api.openweathermap.org/data/2.5/weather?${search}&units=metric&appid=b77e07f479efe92156376a8b07640ced`;
    
                const responseTemp =  await axios.get(urlOpenWeather);
    
                const { temp } = responseTemp.data.main;

                const genre = getGenreByTemp(temp);
    
                resolve({ genre, temp });
                
            } catch (error) {
                reject(error)
            }
       });
    }
};