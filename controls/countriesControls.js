const { createClient } = require('redis');

const Countries = require('../countries/countries.js');
const funcCatcher= require('../helpers/funcCatcher.js');






const client = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});
exports.getAllCountries = funcCatcher((req,res, next) => {
    client.get('all', (err, jobs)=>{
        if(err) console.log(err);
        if(jobs){
            
            res.status(200)
                .json({
                    status: "Success",
                    data: JSON.parse(jobs)
                    
                });
        } else {
            let results = [];
            Countries.forEach((val, key) => {
                val.forEach((val1, key1) => {
                    results.push({ country: key1, ...val1 })

                })
            });

            client.setex('all',  600, JSON.stringify(results));
            res.status(200)
                .json({
                    status: "Success",
                    data: {
                        results
                    }
                });
        }

    })

    

});


exports.getCountry=funcCatcher((req, res, next) => {
    client.get(req.params.countryName.toString().toLowerCase(), (err, jobs) => {
        if (err) console.log(err);
        if (jobs) {
           
            res.status(200)
                .json({
                    status: "Success",
                    data: JSON.parse(jobs)

                });
        } else {
            let result;

            let [countryGroup, queryKey] = [getCountriesWithAlphabets(req.params.countryName, res), require('../helpers/toSentenceCase.js')(req.params.countryName)];
            
            for (const [key, val] of countryGroup.entries()) {
                //todo: fix a ranker algorithm for text correction in this if block
                
                if (key === queryKey) {
                    result = { country: key, ...val };
                    break;
                }
            }

           
            if (!(!!result)) return res.status(200).json({
                status: "Failed",
                message: "Country Not Found"
            });

            client.setex(req.params.countryName.toString().toLowerCase(),  600, JSON.stringify(result));
            res.status(200)
                .json({
                    status: "Success",
                    data: {
                        result
                    }
                })
        }


    });
    

});




exports.getCountriesGroup = (req, res) =>{

    client.get(req.params.query.toString().toLowerCase()[0], (err, jobs) => {
        if (err) console.log(err);
        if (jobs) {
           
            res.status(200)
                .json({
                    status: "Success",
                    data: JSON.parse(jobs)

                });
        } else {
            let countryGroup = getCountriesWithAlphabets(req.params.query, res);
            let result = [];

            countryGroup.forEach((val, key) => {
                result.push({ country: key, ...val });
            });

            client.setex(req.params.query.toString().toLowerCase()[0], 600, JSON.stringify(result));
            res.status(200)
                .json({
                    status: "Success",
                    data: {
                        result
                    }
                });


        }

    })

    

}




const getCountriesWithAlphabets = (query, res) => {
 
    let countryGroup = Countries.get(query.toString()[0].toLowerCase());
    if (countryGroup.size===0) return res.status(200).json({
        status: "Failed",
        message: "Country Not Found"
    });

    return countryGroup;
}
