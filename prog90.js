//array of objects
weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

//create the output object
wd={}
//access each items from the weatherdata array
for(data of weatherData){
    district=data.district
    currTemp=data.weather
    //check district is there in output object
    if(district in wd){
        oddTemp=wd[district]//32
        //compare the temperature
        if(oddTemp>currTemp){
            wd[district]=oddTemp
        }
        else{//if new value is >old value
            wd[district]=currTemp
        }
    }
    else{//if district not present in wd
        wd[district]=currTemp
    }
}
console.log(wd);
