var cells = document.getElementsByTagName("div");
let turn = 0;

for(let i = 0; i < 9; i++){
    cells[i].onclick = function() {
        turn = ++turn;
        let color = cells[i].className;
        console.log(cells[i], color)
        if (color == "uncolored" && color != "yellow" && turn%2 != 0) {
            cells[i].classList.remove("uncolored");
            cells[i].classList.add("blue");
        }
        else if (color == "uncolored" && color != "blue") {
            cells[i].classList.remove("uncolored");
            cells[i].classList.add("yellow");
        }
    }
}
