function appendToDisplay(value){
    document.getElementById('display').value+=value;
}
function ClearDisplay(){
    document.getElementById('display').value='';
}
function CalculateResult(){
    var expression = document.getElementById('display').value;
    var result;
    try{
        result=eval(expression);
        document.getElementById('display').value=result;
    }
    catch(error){
        document.getElementById('display').value='error';
    }
}  