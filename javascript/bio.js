/*jslint plusplus: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global HTMLHomeDescription, HTMLHomeImage, HTMLAboutMeTitle, HTMLAboutMeContent, HTMLSkillsTitle, HTMLSKillsCategortTitle, HTMLSKillEntry, HTMLSkillContent*/

var bio = {
    name: "Emily",
    fullName: "Emily Chang",
    role: "Professional Software Developer/ Illustration Hobbyist",
    contacts: {
        email: "dev.emilychang@gmail.com",
        github: "ailichang",
        location: "San Francisco Bay Area, CA"
    },
    welcomeMessage: "A professional Unity & Android application software developer / illustration hobbyist.",
    summary: "I'm an enthusiastic and dedicated developer who loves to explore various innovative technology and create interesting and user friendly interactive experience. Seeking opportunities in software engineer position to leverage user experience design and programming.",
    skills: {
        language: ["English( professional working proficiency)", "Mandarin Chinese( Native fluency)"]
    },
    display: function () {
        "use strict";
        var msg = HTMLHomeDescription.replace("%data%", bio.welcomeMessage),
            summary = HTMLAboutMeContent.replace("%data%", bio.summary);
        
        $("#home-message").append(msg);
        $("#summary").append(summary);
        /*
        $("#header-info").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
        }
        var title = "<div class=\"center-text\">" + name + role + "</div>";
        $("#header-info").prepend(title);
        $("#header-info").prepend(pic);
        $("#header").prepend(msg);

        $("#footerContacts").append(contacts);*/
    }
};

bio.display();
