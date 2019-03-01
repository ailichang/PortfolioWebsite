/*jslint plusplus: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/

var HTMLHomeDescription = '<p">%data%</p>';
var HTMLHomeImage = '<img scr="%data%" id="home-image"/>';
var HTMLAboutMeTitle = '<div id="about-me-title">%data%</div>';
var HTMLAboutMeContent = '<p>%data%</p>';
var HTMLSkillsTitle = '<div id="skills-title">%data%</div>';
var HTMLSkillCategoryTitle = '<div class="skill-cat-title">%data%</div>';
var HTMLSkillEntry = '<div class="skill-entry">%data%</div>';
var HTMLSkillContent = '<div class="skill-content">%data%</div>';

var HTMLProjectPreview = '<div class="col-md-4 project-cell"><button type="button" class="project-btn" id ="%data%" data-toggle="modal" data-target="#myModal"><div class="project-btn-mask"> </div></button></div>';
var HTMLProjectTitle = '<span id="project-title"><h4><b>%title%</b> %time%</h4></span>';
var HTMLProjectHeadline = '<div id="project-headline"><p><b>%data%</b></p></div>';
var HTMLSliderIndicator = '<li data-target="#carousel-example-generic" data-slide-to="%id%"></li>';
var HTMLSliderImageItem = '<div class="item"><img src="%image%" alt="%alt%"><div class="carousel-caption"><p>%data%</p></div></div>';
var HTMLProjectImage = '<img scr="%data%" class="project-image"/>';
var HTMLProjectYoutubeVideo = '<iframe width="560" height="315" src="%data%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

var resumeUrl = 'EmilyChangResume.pdf';

var navs = ["a[href='#top-anchor']", "a[href='#about-anchor']", "a[href='#work-anchor']", "a[href='#contact-anchor']"];

var resetNavBar = function (select) {
    "use strict";
    //console.log(select);
    var i;
    for (i = 0; i < navs.length; i++) {
        if (select === navs[i]) {
            if (!$(navs[i]).hasClass('active')) {
                $(navs[i]).addClass('active');
            }
        } else {
            if ($(navs[i]).hasClass('active')) {
                $(navs[i]).removeClass('active');
            }
        }
    }
};

var selectNav = function () {
    "use strict";
    var select = "a[href='" + $(this).attr('href') + "']";
    //console.log(select);
    resetNavBar(select);
};

$(document).ready(function () {
    "use strict";
    //opens resume pdf in another tab
    $('#resume-button').click(function () {
        var win = window.open(resumeUrl, '_blank');
        win.focus();
    });
    
    var i;
    for (i = 0; i < navs.length; i++) {
        $(navs[i]).click(selectNav());
    }
});

$(document).ready(function () {
    "use strict";
    $('[data-toggle="tooltip"]').tooltip();
});

var mq = window.matchMedia("(min-width: 576px)");
if (mq.matches) {
    // window width is at less than 570px
} else {
    // window width is greater than 570px
}