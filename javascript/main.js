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

var resumeUrl = 'doc/EmilyChangResume.pdf';

var navs = ["a[href='#top-anchor']", "a[href='#about-anchor']", "a[href='#work-anchor']", "a[href='#contact-anchor']"];

var resetNavBar = function (select) {
    "use strict";
    console.log(select);
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
    console.log(select);
    resetNavBar(select);
};

$(document).ready(function () {
    "use strict";
    //opens resume pdf in another tab
    $('#resume-button').click(function () {
        var win = window.open(resumeUrl, '_blank');
        win.focus();
    });
    
    //add selectNav function to nav 
    var i;
    for (i = 0; i < navs.length; i++) {
        $(navs[i]).click(selectNav);
    }
    
    //toggle tooltip
     $('[data-toggle="tooltip"]').tooltip();
});
