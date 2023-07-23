var product = [];

function btnreg() {

    var name = document.getElementById("name").value;
    var Tname = document.getElementById("Tname").value;
    var Hours = document.getElementById("Hours").value;

       product.push({
            "name": name,
            "Tname": Tname,
            "Hours": Hours
       });    

    list();
    clean();
}
 
function list(){
var table = document.getElementById("table");

table.innerHTML = "";

for (var i = 0; i < product.length; i++) {

    var show = table.insertRow(-1); 

    var column1 = show.insertCell(0);
    var column2 = show.insertCell(1);
    var column3 = show.insertCell(2);
    var column4 = show.insertCell(3);
    var column5 = show.insertCell(4);

    column1.innerHTML = i + 1;      
    column2.innerHTML = product[i].name;
    column3.innerHTML = product[i].Tname;
    column4.innerHTML = product[i].Hours;
    column5.innerHTML = "<button class='btn btn-success' onclick='select("+i+")'>Select</button>";
}}

function select(show){

    document.getElementById("hid").value = show;
    document.getElementById("name").value = product[show].name;
    document.getElementById("Tname").value = product[show].Tname;
    document.getElementById("Hours").value = product[show].Hours;

    document.getElementById("btnreg").style.display = "none";
    document.getElementById("btnsav").style.display = "inline-block";
    document.getElementById("btnrem").style.display = "inline-block";
    document.getElementById("btncal").style.display = "inline-block";
}

function remove() {
    var id = document.getElementById("hid").value;

    product.splice(id, 1);        

    list();

    clean();
}

function btnsav() {

    var id = document.getElementById("hid").value;
    var name = document.getElementById("name").value;
    var Tname = document.getElementById("Tname").value;
    var Hours = document.getElementById("Hours").value;

 product[id] = {

        "name": name,
        "Tname": Tname,
        "Hours": Hours
 }

    list();

    clean();
}

function clean() {

    document.getElementById("name").value = "";
    document.getElementById("Tname").value="";
    document.getElementById("Hours").value="";

    document.getElementById("name").focus();

    document.getElementById("btnreg").style.display = "inline-block";
    document.getElementById("btnsav").style.display = "none";
    document.getElementById("btnrem").style.display = "none";
    document.getElementById("btncal").style.display = "none";

}