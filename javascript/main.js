var resumeUrl = 'EmilyChangResume.pdf';

$(document).ready(function() {
    //opens resume pdf in another tab
    $('#resume-button').click(function(){
        var win = window.open(resumeUrl,'_blank');
        win.focus();
    });

    //the page jumps to #work-anchor location
    $('#work-button').click(function(){
        var loc = document.location.toString().split('#')[0];
        document.location = loc + "#work-anchor";
        return false;
    });

});
