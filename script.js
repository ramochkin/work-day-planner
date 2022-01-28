$("#currentDay").text(moment().format('MMMM Do YYYY'))
$(".saveBtn").on('click', function(){
    var inputText = $(this).siblings('.description').val();
    var inputTime = $(this).parent().attr('id');
    localStorage.setItem(inputTime, inputText);
})



//change id's to military time HTML

//write function comparing timeblock hour to current time.
//if past add class past, if future add class future, if present add class present
//Google Loops in Jquery
function styling(){
 var currentHour = moment().hours();

    $('.time-block').each(function(){
        var rowhour = parseInt($(this).attr('id'))

        if(rowhour < currentHour){
            //we need to add a class of past
            $(this).addClass('past')
        } else if(rowhour === currentHour) {
            $(this).addClass('present')
            $(this).removeClass('past')
        } else {
            $(this).addClass('future')
            $(this).removeClass('past')
            $(this).removeClass('present')
        }
    })
}

styling()

$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

