function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

// ##########################################################################
box = []

function equalFunc() {

    var eq = document.form.textview.value;

    if (eq) {
        result = document.form.textview.value = math.evaluate(eq)
        box.push(eq + ' = ' + result + ' ')

    }
    var text = "";
    var i = 0;
    while (i < box.length) {
        text += box[i] + "<br>";
        i++;
    }
    document.getElementById("display_history").innerHTML = text;

    return box
}

// ########################################################################


function history() {
    cars = equalFunc()

    var text = "";
    var i = 0;
    while (i < cars.length) {
        text += cars[i] + "<br>";
        i++;
    }
    document.getElementById("demoT").innerHTML = text;
}


// ##########################################################################

function delet(num) {
    var char = document.form.textview.value;
    if (char) {
        document.form.textview.value = char.substring(0, char.length - 1);

    }
}

// ##########################################################################

function clean() {
    document.form.textview.value = "";


}

function tagFunc() {
    var eq = document.form.textview.value;
    document.form.textview.value = Math.tan(eq)
}



function sqrFunc() {
    var eq = document.form.textview.value;
    document.form.textview.value = Math.pow(eq, 2)
}

function piFunc() {
    document.form.textview.value = Math.PI();
}