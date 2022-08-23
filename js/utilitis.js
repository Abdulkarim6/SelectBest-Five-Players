/* function for all select button : # 0 */
function getSelectButttonValueById(playerEvent) {
    // step : 0.3
    const listLengthElement = document.querySelectorAll("#ol-list li");
    if (listLengthElement.length >=5 ) {
         alert("you can not add more player");
         return;
    }
    // step : 0
    const playerNameElement = document.getElementById(playerEvent);
    const playerName = playerNameElement.innerText;
    // step : 0.1
    const liParent = document.getElementById("ol-list");
    // step : 0.2
    const li = document.createElement("li");
    li.innerText = playerName;

    liParent.appendChild(li);
}

