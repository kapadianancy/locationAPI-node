const request=require('request');
const chalk=require('chalk');
//const key="pk.eyJ1IjoibmFuY3kxMjM0IiwiYSI6ImNqdzF3NXRwZTAydXI0NG82eWQ0bDg3aDcifQ.YoAkW1nQW_A6Jv-tVy6rGQ";

const getLocation=()=>
{
    if(process.argv[2])
    {
        const location=encodeURIComponent(process.argv[2]);
        const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoibmFuY3kxMjM0IiwiYSI6ImNqdzF3NXRwZTAydXI0NG82eWQ0bDg3aDcifQ.YoAkW1nQW_A6Jv-tVy6rGQ`
        request({url:url,json:true},(error,res)=>
        {
            if(res.body.features.length==0)
            {
            return console.log(chalk.red.inverse("error-not valid location"));
            }
            const data=res.body.features[0];
            console.log(chalk.blue(`place=${data.place_name} longitude=${data.center[0]} latitude=${data.center[1]}`));


        })
    }
    else
    {
        console.log(chalk.red.inverse("location required"));
    }

}