
const Countries = require('../countries/countries.js');
const asyncCatcher= require('../helpers/asyncCatcher.js');

exports.getAllCountries = (req,res)=>{
    let results=[];
     Countries.forEach((val, key) => {
        val.forEach((val1, key1)=>{
            results.push({country: key1, ...key1})

        })
    });

    res.status(200).json({
        status: "Success",
        data:{
            results
        }
    });

};


exports.getCountry=(req, res) => {
    let result;
  
    let countryGroup = getCountriesWithAlphabets(req.params.countryName, res);

    for( const [val, key] of  countryGroup.entries() ){
      //todo: fix a ranker algorithm for text correction in this if block
        if(key===require('../helpers/toSentenceCase.js')(queryKey)){
            result={country:key, ...val};
            break;
        }
    }

    if (!(!!result)) return res.status(200).json({
        status: "Failed",
        message: "Country Not found"
    });

    res.status(200).json({
        status: "Success",
        data:{
            result
        }
    })

}




exports.getCountriesGroup = (req, res) =>{
    let countryGroup = getCountriesWithAlphabets (req.params.query, res);
    let result=[];
    
    countryGroup.forEach((val, key)=>{
        result.push({country: key, ...val});
    });

    res.status(200).json({
        status: "Success",
        data:{
            result
        }
    });


}




const getCountriesWithAlphabets = (query, res) => {
 
    let countryGroup = Countries.get(query.toString()[0].toLowerCase());
    if (countryGroup.size===0) return res.status(200).json({
        status: "Failed",
        message: "Country Not found"
    });

    return countryGroup;
}