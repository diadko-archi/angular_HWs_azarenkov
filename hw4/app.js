const cells = [...document.getElementsByClassName("cell")];
let turn = 0;

cells.forEach(cell => {
    cell.onclick = function() {
        if (!cell.style.backgroundColor) {
            cell.style.backgroundColor = turn++ % 2 ==1 ? "yellow" : "blue";
        }
    }
})
    
