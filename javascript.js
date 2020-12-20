fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0e46dcace3msh6fe3278efb05bb7p16e7d6jsn922ea25ec57f",
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(function(data){
    var gamesList = data.results;
    var htmlGameList = document.querySelector(".gamesList");

    gamesList.forEach(spil => {
        const container = document.createElement("div");
        container.innerHTML=`
        <a href="gamesite.html?id=${spil.id}">
            <h2>${spil.name}</h2>
            <img src="${spil.background_image}">
        </a>
            `
        htmlGameList.appendChild(container)
    });

});




