const key = "49252d9c53c7b481dcd1271806ac8920";
const btn = document.getElementById("btn")

async function buscarCidade(){

    const cidade = document.querySelector("#buscador").value;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${key}&units=metric`);
        const data = await response.json();
        console.log(data)
        carregarValoresNoHTML(data)
       
    } catch (error) {
        console.error('Erro ao buscar dados da cidade:', error);
        throw error; 
    }
}


function carregarValoresNoHTML(dados){
    document.getElementById("city").innerHTML = `Tempo em ${dados.name}`;
    document.getElementById("temp").innerHTML = Math.floor(dados.main.temp)+"°C";
    document.getElementById("tempo").innerHTML = `${dados.weather[0].description}`
    document.getElementById("umidade").innerHTML = `umidade: ${dados.main.humidity}%`
    document.getElementById("img-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}
btn.addEventListener('click',buscarCidade)