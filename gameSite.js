let url = new URLSearchParams(window.location.search);

fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${url.get("id")}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0e46dcace3msh6fe3278efb05bb7p16e7d6jsn922ea25ec57f",
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(function(data){
    
    var gameName = document.querySelector(".gameName");
    var gameDescription = document.querySelector(".gameDescription");

    gameName.innerHTML = data.name;
    gameDescription.innerHTML = data.description;
   

    
    var trailer = data.clip.clip;
    var video = document.querySelector(".gameTrailer");
    var source = document.createElement("source");
    source.setAttribute(`src`, `${trailer}`);
    video.appendChild(source);
    
    var platforms = data.platforms;
    var sectionGamePlatforms = document.querySelector(".gamePlatforms")
    
    platforms.forEach(platform => {
        const container = document.createElement("div");
        container.innerHTML=`
        <p>${platform.platform.name}</p>
        `
        sectionGamePlatforms.appendChild(container)
    });

    var sectionRatings = document.querySelector(".ratings");
    var ratings=data.ratings;

    ratings.forEach(rating => {
    const container = document.createElement("section");
    container.innerHTML=`
    <div>
    <h2>${rating.title}</h2>
    </div>
        
        <div class="box">
            <div class="fill"></div>
        </div>
    
    `
     setTimeout(function(){ 
                
        /* fills.forEach(fill => {
            document.querySelectorAll('.fill').setAttribute("style",`width:10%`);
        });  */
        
        
        var fills = document.querySelector(".fill")
        console.log(fills);
        

}, 1500);

    sectionRatings.appendChild(container)
    
    });
    

});