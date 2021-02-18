let citySearch = document.getElementById('citySearch');
let search =async(e)=>{
    e.preventDefault();
    let CityName = document.getElementById('cityName');
    let cityName = CityName.value;
    let cityMsg = document.getElementById('cityMsg');
    let temperature = document.getElementById('temp');
    let tempStatus = document.getElementById('tempStatus');
    let loader = document.getElementById('loader')
    let displayBottom = document.querySelector('.display-bottom'); 
    
    cityMsg.innerText = '';
    if(cityName===''){
        cityMsg.innerText = "Please write the name before search...";
        displayBottom.classList.add('data-hidden')
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=79300dbfc63a02a3d6eea9278991af22`
        loader.classList.add('loading');
        displayBottom.classList.add('data-hidden')
        try{
        axios.get(url)
        .then(response => {
            console.log(response);
            let city = response.data.name;
            let country = response.data.sys.country;
            let temp = response.data.main.temp;
            let status = response.data.weather[0].main;
            
            cityMsg.innerHTML = `<span style="font-size:30px; color:#0097e6; font-weight:bold;">${city}</span> <sup>${country}</sup>`
            temperature.innerText = temp;

            if(status==='Clear'){
                tempStatus.innerHTML ='<i class="fas fa-cloud"></i>'
            }
            else if(status==='Sunny'){
                tempStatus.innerHTML ='<i class="fas fa-sun" style="color:#eccc68"></i>'
            }
            else if(status==='Clouds'){
                tempStatus.innerHTML ='<i class="fas fa-cloud" ></i>'
            }
            else if(status==='Rain'){
                tempStatus.innerHTML ='<i class="fas fa-cloud-rain" ></i>'
            }
            else if(status==='Fog'){
                tempStatus.innerHTML ='<i class="fas fa-smog"></i>'
            }
            else if(status==='Smoke'){
                tempStatus.innerHTML ='<i class="fas fa-smog"></i>'
            }
            else if(status==='Mist'){
                tempStatus.innerHTML ='<i class="fas fa-smog"></i>'
            }
            else{
                tempStatus.innerHTML ='<i class="fas fa-cloud"></i>'
            }
            CityName.value = "";
            loader.classList.remove('loading');
            displayBottom.classList.remove('data-hidden');
        })
        .catch(error => {
            console.log(error.value);
            cityMsg.innerHTML = 'Please enter <span style="color:rgb(226, 88, 88); font-weight:bold;">correct</span> city name...';
            loader.classList.remove('loading');
            displayBottom.classList.add('data-hidden');
        })
    }
    catch{

    }
        
    }

}
citySearch.addEventListener('click',search);

let setDay_Date=()=>{
    let date = document.getElementById('date');
    let day = document.getElementById('day');

    let dateobj = new Date();
    let dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let monthArr = ["JAN","FEB","MAR","APR","MAY",'JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

    date.innerText = `${dateobj.getDate()} ${monthArr[dateobj.getMonth()]}`;
    day.innerText = dayArr[dateobj.getDay()];
}

setDay_Date();