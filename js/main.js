


let card=document.querySelector(".cards");
let searchbutton=document.querySelector("button");
let searchinput=document.querySelector(".search_bar input");
let weatherIcon=document.querySelector(".weather-icon img");
let number_temp=document.querySelector(".current-temp .number");
let descrip=document.querySelector(".description");

let location_name=document.querySelector(".location-response-name");

let humidit=document.querySelector(".humidity");
let wind_speed=document.querySelector(".wind-speed");


let tempbox=document.querySelector(".temp-box")
let errorbox=document.querySelector(".error-box");

searchbutton.addEventListener("click", search);

searchinput.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        search();
    }
})

function search(){
    let cityname=document.querySelector(".search_bar input").value;
    let apikey="29e4bbbf5a323caf58dda85182f5f083";
    let apicell=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apikey}`;
    fetch(apicell)
    .then(response => response.json())
    .then((data)=>{
        if(data.cod=='404'){
            errorbox.style.display="flex"
            tempbox.style.display="none"
            card.style.height = "251px"
        
        }
        card.classList.add("slid_card")
        tempbox.style.display="flex"
       
        errorbox.style.display="none"
        
        
            let city=data.name;
            let country=data.sys.country;
            let {description,id}=data.weather[0];
            let {temp,humidity}=data.main;
            let windSpeed=data.wind.speed;
            number_temp.innerHTML=Math.round(temp);
            descrip.innerHTML=description;
            location_name.innerHTML=`${city}, ${country}`;
            humidit.innerHTML=humidity + "%";
            wind_speed.innerHTML=windSpeed + "Kem/h";
            if (id === 800) {
                weatherIcon.src = "image/clear.svg";
            }
            else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
                
                weatherIcon.src="image/rain.svg";
                
            }
            else if (id >= 600 && id <= 622) {
                
                weatherIcon.src="image/snow.svg";
            }
            else if (id >= 701 && id <= 781) {
                
                weatherIcon.src="image/storm.svg";
            }
            else if (id >= 801 && id <= 804) {
                
                weatherIcon.src="image/cloud.svg";
            }
    })
    
}
