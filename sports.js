const loadPlayers = (search) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlayers(data.player));
};

const displayPlayers = (players) => {
  //   console.log(players);
  const playersContainer = document.getElementById("players-container");
  playersContainer.innerHTML = "";
  players.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("col");
    playerDiv.innerHTML = `
    <div class="card">
        <img src="${player.strRender}" class="card-img-top" alt="...">
          <div class="card-body">
               <h4 class="card-title">Name: ${player.strPlayer}</h4>
               <h5 class="card-title">Nationality: ${player.strNationality}</h5>
               <h6 class="card-title">Current Team: ${player.strTeam}</h6>
               <p class="card-title">Country: ${player.strTeam2}</p>
               <p class="card-text">Follow on: <a href="#" target="_blank"><i class="fa-brands fa-facebook"></i></a></p>
          </div>
    </div>
    `;
    playersContainer.appendChild(playerDiv);
  });
};

const findPlayers = () => {
  const searchPlayers = document.getElementById("search-field");
  const searchText = searchPlayers.value;
  searchPlayers.value = "";
  loadPlayers(searchText);
};

// loadPlayers("Lionel Messi");
