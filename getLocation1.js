const request=require('request');
const chalk=require('chalk');
//const key="pk.eyJ1IjoibmFuY3kxMjM0IiwiYSI6ImNqdzF3NXRwZTAydXI0NG82eWQ0bDg3aDcifQ.YoAkW1nQW_A6Jv-tVy6rGQ";

const getLocation=(location,callback)=>
{
    console.log(location);
    var result;
        const l=encodeURIComponent(location);
        const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${l}.json?access_token=pk.eyJ1IjoibmFuY3kxMjM0IiwiYSI6ImNqdzF3NXRwZTAydXI0NG82eWQ0bDg3aDcifQ.YoAkW1nQW_A6Jv-tVy6rGQ`
        request({url:url,json:true},(err,res)=>
        {
            
            if(res.body.features.length==0)
            {
               result={
                    error:"not a valid location"
                }
                callback(result);
                return;
                
            }
            const data=res.body.features[0];
            result={
                place:data.place_name,
                longitude:data.center[0],
                latitude:data.center[1]
            }
           
          callback(result);
         
        });
      
}

module.exports=getLocation;