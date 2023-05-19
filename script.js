let serverIP = "smp.projectenyo.eu"
let serverPort = "25565"
let api = "https://eu.mc-api.net/v3/server/ping/"

window.addEventListener("load", function() {
	let ping = api + serverIP + ":" + serverPort
	fetch(ping)
		.then(response => response.json())
		.then(data => {
			document.getElementById("online-status").innerHTML = data.online ? "<span class=\"online\">Online</span>" : "<span class=\"offline\">Offline</span>"
			document.getElementById("players-online").innerHTML = data.players.online + "/" + data.players.max

		})
		.catch(error => {
			document.getElementById("online-status").innerHTML = "<span class=\"offline\">Offline</span>"
			console.log(error)
		})
})
