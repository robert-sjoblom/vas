
var status = -1;
var content = '<div class="panel-heading">My Title</div><div class="panel-body">This is a new text. EXCITING!</div>';

function clicked() {
    if(status == -1) {
        status = 1;
        document.getElementById("first-panel").innerHTML = content;}
    else {
        console.log("whoops");
    }
}