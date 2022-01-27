$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
$(".saveBtn").on('click', function(){
    var inputText = $(this).siblings('.description').val();
    var inputTime = $(this).parent().attr('id');
    localStorage.setItem(inputTime, inputText);
})








//moment().hours()