function myFunction(){
    var myName = document.getElementById('myName').value;
    myName = myName.toLowerCase();
    function nameSearch(input){
        return input.name == myName;
    }
    var n = names.filter(nameSearch);
    var myDate = n[0].dob;
    var output = document.getElementById('displayResult')
    var t = myDate.slice(0,4);
    myDate = myDate.replace(t,'2017');
    var y = 2017 - t;
    check(myDate)
    // document.getElementById('yrs').innerHTML = "S/he is turning " + y + " years old.";
    //console.log("turning " + y);

    var display = document.getElementById('display');
    var template = Handlebars.compile(display.innerHTML);
    var myDisplay = template({n});
    output.innerHTML = myDisplay;
}

function check(myDate) {
    var countDownDate = new Date(myDate).getTime();
    var x = setInterval(function myCount(){
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    showTm.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        showTm.innerHTML = "EXPIRED";
    }
    myName = "";

}, 1000)};

var names = [
    {name:'codex', eventType:'demo', dob:'2017-05-09'},
    {name:'viwe', eventType:"birthday", dob:'1994-12-05'},
    {name:'loyiso', eventType:'birthday', dob:'1985-11-14'}
];
var k = document.getElementById('k');
var template = Handlebars.compile(k.innerHTML);
var myK = template({names});
document.getElementById('yrs').innerHTML = myK;

function addName(){
    var newName = document.getElementById("newName").value;
    var neweventType = document.getElementById("neweventType").value;
    var newDob = document.getElementById('newDob').value; // var str = "2017-09-20";
    var name1 = {};
    function checkNames(input) {return input.name == newName.toLowerCase();}
    var checkedNames = names.filter(checkNames);
    if(checkedNames.length < 1){

        CreateProp("name",newName.toLowerCase());
        CreateProp("eventType", neweventType.toLowerCase());
        CreateProp("dob", newDob);

        function CreateProp(propertyName, propertyValue){
            name1[propertyName] = propertyValue;
        }

        names.push(name1);
    } else {
        alert("Name Exist")
    }
    var k = document.getElementById('k');
    var template = Handlebars.compile(k.innerHTML);
    var myK = template({names});
    document.getElementById('yrs').innerHTML = myK;

    newDob.value = "";
    newName.value = "";
    neweventType.value = "";

}
function hideShowSearch(){var z = document.getElementById('add');
    if (z.style.display === 'none') {z.style.display = 'block';} else {z.style.display = 'none'}
}
function hideNames(){var z = document.getElementById('yrs');
    if (z.style.display === 'none') {z.style.display = 'block';} else {z.style.display = 'none'}
}
