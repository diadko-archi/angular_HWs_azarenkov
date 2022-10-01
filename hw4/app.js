const cells = document.getElementsByTagName("div");
let turn = 0;

for(let i = 0; i < 9; i++){
    cells[i].onclick = function() {
        let color = turn%2 == 0 ? "blue" : "yellow";
        if (cells[i].className != "blue" && cells[i].className != "yellow"){
            cells[i].classList.toggle(color)
            turn = ++turn;
        }
    }
}
