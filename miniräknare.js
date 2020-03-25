function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}
function equal(){
    var exp = document.form.textview.value;

    if(document.form.textview.value != "Error"){
        try {
            document.form.textview.value = eval(document.form.textview.value)
        }
        catch(err) {
            document.form.textview.value = "Error"
        }
    }
}
function clean(){
    document.form.textview.value = ""
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length - 1)
}