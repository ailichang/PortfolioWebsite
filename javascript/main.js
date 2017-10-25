var resumeUrl = 'EmilyChangResume.pdf';

$(document).ready(function() {
    $('#resume-button').click(function(){
        var win = window.open(resumeUrl,'_blank');
        win.focus();
    });
    $('#work-button').click(function(){
        var loc = document.location.toString().split('#')[0];
        document.location = loc + "#work-anchor";
        return false;
    });

});
