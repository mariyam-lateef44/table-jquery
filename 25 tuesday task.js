$(document).ready(function(){
    $("#addbutton").click(handlebtnclick);
    $("#todos li").click(removeMe);
});

function handlebtnclick(){
    var newtodo = $("#newtodo").val();
    $("#todos").append("<td>" + newtodo + "</td>");

    if(!newtodo){
        $("#newtodo").addClass("class");
        return;
    }
}

function removeMe(){
    $(this).remove();
}