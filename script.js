
const base_url = "https://superheroapi.com/api.php/2607295732758396/search/";

 async function getJSON(url) {
     try {
      const result = await fetch(url);
  
      if (result.status == 200) {
         const json = await result.json();
         return json;
       }
  
       console.log('Problma com comunicação com a API')
     } catch (err) {
       console.error('Problema ao conectar com a API');
       console.error(err);
     }
 }

   async function getHero() {
      let id_hero = document.getElementById("barra");
     var url = base_url + id_hero.value;
     
    
  
     const json = await getJSON(url);
     console.log(json);
  
     const name = json.results[0].name;
     const id = json.results[0].id;
     const intelligence = json.results[0].powerstats.intelligence;
     const strength = json.results[0].powerstats.strength;
     const speed = json.results[0].powerstats.speed;
     const durability = json.results[0].powerstats.durability;
     const power = json.results[0].powerstats.power;
     const combat = json.results[0].powerstats.combat;
     const image = json.results[0].image.url;

     document.getElementById("container").innerHTML = "";
     document.getElementById("container").innerHTML += `
     <article id="header">
            <div id="id" class="n1">${id}</div>
            <h1 class="t1">${name}</h1>
        </article>
        <img src="${image}" class="im1">
                    
        <div class="hero_data_value">Inteligence:</div>
        <div class="hero_stats" style="width: calc(${intelligence}% - 10px); background-color: #ff7c6c; height: 15px; border-radius: 15px;"></div>
                         
        <div class="hero_data_value">Strengh:</div>
        <div class="hero_stats" style="width: calc(${strength}% - 10px); background-color: #f9b32f; height: 15px; border-radius: 15px;"></div>
                    
        <div class="hero_data_value">Speed:</div>
        <div class="hero_stats" style="width: calc(${speed}% - 10px); background-color: #a7d579; height: 15px; border-radius: 15px;"></div>
                        
        <div class="hero_data_value">Durability:</div>
        <div class="hero_stats" style="width: calc(${durability}% - 10px); background-color: #995bde; height: 15px; border-radius: 15px;"></div>
                
        <div class="hero_data_value">Power:</div>
        <div class="hero_stats" style="width: calc(${power}% - 10px); background-color: #4fe4e7; height: 15px; border-radius: 15px;"></div>

        <div class="hero_data_value">Combat:</div>
        <div class="hero_stats" style="width: calc(${combat}% - 10px); background-color: #ffa601; height: 15px; border-radius: 15px;"></div>
                    
       `;
  }
