console.log("javascript running");
const btn=document.querySelector("button");
const address=document.querySelector("input");
const result=document.querySelector("#result");

btn.addEventListener("click",(event)=>
{
    result.innerHTML="";
    let l=address.value;
    event.preventDefault();
    console.log(l);
    fetch("http://localhost:3000/weather?address="+l).then((res)=>
    {
        res.json().then((data)=>
        {
            console.log(data);
            if(data.error)
            {
                return result.innerHTML=data.error;
            }
            else
            {
                return result.innerHTML=data.place+" "+data.latitude+" "+data.longitude;
            }
            
        }).catch((error)=>
        {
            return result.innerHTML=error.error;
        })
    }).catch((error)=>
    {
        return result.innerHTML=error.error;
    })
})