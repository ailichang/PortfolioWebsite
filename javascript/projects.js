/*jslint plusplus: true */
/*jslint browser: true*/
/*global $, jQuery, alert, console*/

var HTMLProjectPreview = '<div class="col-md-4 project-cell"><button type="button" class="project-btn" id ="%data%" data-toggle="modal" data-target="#projectModal"><div class="project-btn-mask"><p>%headline%</p></div></button></div>';
var HTMLProjectTitle = '<span id="project-title"><h4><b>%title%</b> %time%</h4></span>';
var HTMLProjectHeadline = '<div id="project-headline"><p><b>%data%</b></p></div>';
var HTMLSliderIndicator = '<li data-target="#myCarousel" data-slide-to="%id%"></li>';
var HTMLSliderImageItem = '<div class="carousel-item"><img src="%image%" alt="%alt%"><div class="carousel-caption"><span>%data%</span></div></div>';
var HTMLProjectImage = '<img scr="%data%" class="project-image"/>';
var HTMLProjectYoutubeVideo = '<iframe width="560" height="315" src="%data%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';


var projects = {
    game: [
        {
            title: "WiseMind",
            time: "September 2016 - August 2017",
            headline: " VR Experience That Improves Psychotherapy",
            role: "Unity Developer",
            company: "Realiteer Corp",
            developmentTools: ["Unity3D", "BrainCloud"],
            platform: ["Oculus Rift", "HTC Vive"],
            description: "WiseMind is a VR platform that improves psychotherapy treatment. The users use Oculus or HTC Vive to do different exercise such as breathing, stone stacking and Tai-chi. The platform is now available on Steam. <br/> I implemented several immersive experience based on psychotherapy treatment. And I researched and integrated various social media APIs and plugins into our experience so that users can easily access to those media. ",
            icon: "image/work/WiseMind.png",
            images: [
                {
                    caption: "Tai-chi Game",
                    url: "image/work/wisemind-taichi.jpg"
                },
                {
                    caption: "Stone Stacking",
                    url: "image/work/wisemind-stackingstone.jpg"
                },
                {
                    caption: "Breathing Exercise",
                    url: "image/work/wisemind-breathing.jpg"
                }
            ],
            videos: [
                {
                    caption: "Promo Video",
                    url: "https://youtu.be/W1WT4dM_ZtY"
                }
            ]

        },
        {
            title: "BattleZ",
            time: "December 2015 - May 2016",
            headline: "VR Multiplayer Zombie Shooting Game",
            role: "Unity Developer",
            company: "Realiteer Corp",
            developmentTools: ["Unity3D", "BrainCloud"],
            platform: ["Google Cardboard (Android, iOS)", "GearVR", "RealControl"],
            description: "BattleZ is a multiplayer zombie shooting game. The players use Google VR (Cardboard) to view and RealControl to aim at zombies. The game is now available on Google Play and App Store.<br/> I designed and implemented the structure of storing and retrieving user data using a BaaS, BrainCloud. I also built user authentication and user profile customization functionalities.",
            icon: "image/work/battleZ-poster.png",
            images: [
                {
                    caption: "Battle Field",
                    url: "image/work/battleZ-1.jpg"
                },
                {
                    caption: "Giant Zombie Appeared",
                    url: "image/work/battleZ-2.png"
                }
            ],
            videos: [
                {
                    caption: "Promo Video",
                    url: "https://youtu.be/aSED7MUTTds"
                }
            ]
        },
        {
            title: "H2HSnow",
            time: "August 2016 - October 2016",
            headline: "A VR Multiplayer Vocabulary Learning Game",
            role: "Unity Developer",
            company: "Realiteer Corp",
            client: "iTutorGroup",
            developmentTools: ["Unity3D", "Photon Unity Networking"],
            platform: ["Google Daydream (Android, iOS)"],
            description: "H2H Snow is a VR multiplayer vocabulary learning game made for iTutorGroup. Players learn vocabulary by throwing snowballs at targets with antonyms tags and feeding food to targets with synonym tags. <br/> I worked on the importing vocabulary file and setting name tags using Photon Network.",
            icon: "image/work/h2hSnow-icon.png",
            images: [
                {
                    caption: "Snow Ball Fight",
                    url: "image/work/h2hSnow-1.jpg"
                },
                {
                    caption: "Summary of End Game: Vocabulary Learned",
                    url: "image/work/h2hSnow-2.jpg"
                }
            ]
        },
        {
            title: "CORT VR",
            time: "May 2016",
            headline: "A Virtual Reality Furniture Showroom",
            role: "Unity Developer",
            company: "Realiteer Corp",
            client: "CORT",
            developmentTools: ["Unity3D", "BrainCloud"],
            platform: ["Google Cardboard (Android, iOS)"],
            description: "CORT VR is a virtual reality furniture showroom made for CORT. The viewer uses Google Cardboard to view furniture and walk through the CORT''s Beverly Hills, California showroom.<br/>I worked on the interface and navigation of experience.",
            icon: "image/work/cort-icon.png",
            images: [
                {
                    caption: "Furniture Showroom",
                    url: "image/work/cort-1.png"
                },
                {
                    caption: "Surprise Effect When Approach Interactive Objects",
                    url: "image/work/cort-2.png"
                }
            ],
            videos: [
                {
                    caption: "Promo Video",
                    url: "https://youtu.be/DJBOhu9PvhM"
                }
            ]
        },
        {
            title: "Hungry Squid",
            headline: "Arcade Style Shooter's Google Tango Game ",
            time: "Spring 2015",
            role: "Unity Developer",
            advisor: "Entertainment Technology Center, CMU",
            platform: ["Google Tangle"],
            developmentTools: ["Unity3D", "NGUI", "Parse BaaS"],
            description: "Hungry squid is an arcade style shooter's game that uses Google Tango's motion tracking. The player's goal is to find out all hidden strawberries in 3D worlds that were generated by other users. The players not only can shoot and destroy objects in the world to find the targets, but also can challenge others by creating a difficult map. ",
            outcome: "Our game, Hungry Squids was a selected demo game at Google booth, GDC 15",
            icon: "image/etc/hungrysquid-icon.png",
            images: [
                {
                    caption: "Play Mode: Walking",
                    url: "image/etc/hungrysquid-playmode-1.png"
                },
                {
                    caption: "Play Mode: Destroy Objects",
                    url: "image/etc/hungrysquid-playmode-2.png"
                },
                {
                    caption: "Create Map Interface",
                    url: "image/etc/hungrysquid-createmode.png"
                },
                {
                    caption: "Map Interface",
                    url: "image/etc/hungrysquid-share.png"
                },
                {
                    caption: "Leader Board",
                    url: "image/etc/hungrysquid-leaderboard.png"
                }
            ],
            videos: [
                {
                    caption: "Promo Video",
                    url: "https://youtu.be/DJBOhu9PvhM"
                }
            ]
        },
        {

            title: "Marioneta",
            headline: "2 Player Kinect Experience to Interact as a Puppet",
            time: "Fall 2014",
            role: "Unity Developer",
            advisor: "Entertainment Technology Center, CMU",
            client: "Pittsburgh Children's Museum",
            platform: ["Kinect v2"],
            developmentTools: ["Unity3D"],
            description: "Marioneta is an installation which presents puppets in a 3D virtual reality environment, which museum guests can control with their bodies via the Microsoft Kinect 2. The puppets featured in our project are based on a collection of puppets donated to the Children’s Museum by Margo Lovelace, most of which are too delicate to be played with. We aim to create an engaging and intuitive experience which appeals to guests of all ages.",
            outcome: ["This interactive experience was installed in Pittsburgh Children's Museum", "This project got accepted by SXSW 15 and IEEE VR 15"],
            icon: "image/etc/marioneta-icon.png",
            images: [
                {
                    caption: "Spring Stage",
                    url: "image/etc/marioneta-main.png"
                },
                {
                    caption: "Players Need to Step into Change Puppet Area to Change Puppet",
                    url: "image/etc/marioneta-floor.png"
                },
                {
                    caption: "Puppet Selection Interface",
                    url: "image/etc/marioneta-ui.jpg"
                },
                {
                    caption: "Project Icon I Made",
                    url: "image/etc/marioneta-icon.png"
                }
            ],
            videos: [
                {
                    caption: "Promo Video",
                    url: "https://youtu.be/DKYC4Ey70Rk"
                },
                {
                    caption: "Basic movements, Jump and Draw Particles by Waving Hands",
                    url: "https://youtu.be/wve7FqOeICI"
                },
                {
                    caption: "Hit, Kick, Pickup, Throwing, Droping, Passing Objects to Other Player and Play intruments",
                    url: "https://youtu.be/iizWjLs3zD8"
                }

            ]
        }

    ],
    design: [
        {
            title: "Food Invite",
            headline: "App Design: Dinnning Decision Maker for Group",
            time: "Fall 2017",
            role: "UX Designer",
            advisor: "General Assembly, San Francisco",
            designTools: ["Sketch", "InVision"],
            description: "Food Invite was designed in UX course. The idea for this mobile application is to help a group of indecisive people to decide when, where and what to eat. The design includes a invitation sytem for host to send invitation to friends with a polling system to gather opinions about restaurant tendencies and food restrictions.",
            slides: "https://docs.google.com/presentation/d/1oMES-BubSEm0BhLYsqIAz245ZqdBHumG_PUKG-_GOpM/edit?usp=sharing",
            images: [
                {
                    caption: "Wireframe",
                    url: "image/foodinvite/wireframe2.png"
                },
                {
                    caption: "Problem Statement",
                    url: "image/foodinvite/problem.png"
                },
                {
                    caption: "Persona",
                    url: "image/foodinvite/persona1.png"
                },
                {
                    caption: "Sketch",
                    url: "image/foodinvite/sketch.png"
                },
                {
                    caption: "Sketch",
                    url: "image/foodinvite/sketch2.png"
                },
                {
                    caption: "User Flow",
                    url: "image/foodinvite/userflow.png"
                },
                {
                    caption: "Wireframe Version 1",
                    url: "image/foodinvite/wireframe.png"
                }
            ]
        },
        {
            title: "Magic Portion Rule Book",
            headline: "2 Player Dice Game",
            time: "Fall 2017",
            role: "UX Designer",
            advisor: "General Assembly, San Francisco",
            designTools: ["Sketch", "InVision"],
            description: "Two kings, who wanted to live forever, send their men to find the entire magic potion of elixir of life. They know that recipe has separated into 3 pieces. Bothof the kings doubt each other having one of pieces and request their men to take it from the other king's men. ",
            pdf: "http://docs.wixstatic.com/ugd/9f5b2e_0f11624c1b454966af8b6df9b63c7327.pdf",
            images: [
                {
                    caption: "Spri",
                    url: "image/etc/marioneta-main.png"
                }
            ]
        }

    ],
    illustration: [
        {
            title: "Doodling!",
            headline: "Watercolor Illustrations",
            time: "2016 - Present",
            description: "Having fun with water color! :) ",
            images: [
                {
                    caption: "Apples",
                    url: "image/watercolor/apple.jpg"
                },
                {
                    caption: "Cupcakes",
                    url: "image/watercolor/cupcake.jpg"
                },
                {
                    caption: "Immitate Jessie Willcox Smith's Painting with watercolor",
                    url: "image/watercolor/umbrella.jpg"
                }
            ]
        },
        {
            title: "Giant",
            headline: "VR + PS Move Game",
            time: "Fall 2013",
            role: "2D Artist / UI Designer",
            advisor: "Entertainment Technology Center, CMU",
            designTools: ["Photoshop"],
            platform: ["Oculus", "PSMove"],
            description: "The idea is you as a giant uses the spoon to help goblins to fight against evil humans. Here is what giant can do with the spoon, hit the human with the spoon, scoop the humans and eat them, smash the obstacles, use the spoon as a bridge to cross gaps or use the spoon as a shield to protect goblins from falling rocks and arrows.",
            images: [
                {
                    caption: "Spri",
                    url: "image/etc/marioneta-main.png"
                },
                {
                    caption: "Players Need to Step into Change Puppet Area to Change Puppet",
                    url: "image/etc/marioneta-floor.png"
                },
                {
                    caption: "Puppet Selection Interface",
                    url: "image/etc/marioneta-ui.jpg"
                }
            ]
        }
    ],
    display: function () {
        "use strict";
        var category, i, index, targetTagId, row, msg, url, button,
            displayDetailOnClick = function () {
                projects.displayDetail(this.id);
            };
        for (category in projects) {
            if (projects.hasOwnProperty(category)) {
                if (category !== "display" && category !== "displayDetail") {
                    for (i = 0; i < projects[category].length; i++) {
                        index = category + "-project-" + i;
                        targetTagId = "#" + category + "-project";
                        //console.log("index: " + index + "tagTd: " + targetTagId);   

                        if (i % 3 === 0) { //create row
                            row = "<div class='row'></div>";
                            $(row).appendTo(targetTagId);
                        }
                        //add cell(project buttons)      
                        msg = HTMLProjectPreview.replace("%data%", index);
                        msg = msg.replace("%headline%", projects[category][i].headline);
                        $(msg).appendTo($(targetTagId + " .row:last-child"));

                        //set button  
                        url = "url('" + projects[category][i].images[0].url + "')";
                        button = $("#" + index)[0]; // get the project button
                        //console.log(button);
                        button.style.backgroundImage = url;
                        //add onlick event
                        button.onclick = displayDetailOnClick;
                    }
                }
            }
        }
    },
    displayDetail: function (id) {
        "use strict";
        var splitPos = id.lastIndexOf('-'), //include '-' position
            category = id.slice(0, splitPos),
            index = id.slice(splitPos + 1), //get project corrent index
            projectCategory = projects.vr,
            row,
            msg,
            image,
            indicator,
            property,
            i;
        
        switch (category) {
        case "vr-project":
            projectCategory = projects.vr;
            break;
        case "game-project":
            projectCategory = projects.game;
            break;
        case "design-project":
            projectCategory = projects.design;
            break;
        case "illustration-project":
            projectCategory = projects.illustration;
            break;
        }
        //set header
        $('#project-title').remove();
        //console.log(index);
        msg = HTMLProjectTitle.replace("%time%", projectCategory[index].time);
        msg = msg.replace("%title%", projectCategory[index].title);
        $('.modal-header').prepend(msg);

        //set details
        $('#project-headline').remove(); //refresh, delete previous result       
        msg = HTMLProjectHeadline.replace("%data%", projectCategory[index].headline);
        $('#project-details').prepend(msg);

        $('#project-table').empty(); //refresh, delete previous result     
        //fill project detail table
        row = "<tr id='%id%'><td>%entry%</td><td>%value%</td></tr>";
        for (property in projectCategory[index]) {
            if (projectCategory[index].hasOwnProperty(property)) {
                if (property !== "images" && property !== "videos" && property !== "icon" && property !== "title" && property !== "time" && property !== "headline") {
                    msg = row.replace("%entry%", property);
                    msg = msg.replace("%value%", projectCategory[index][property]);
                    msg = msg.replace("%id%", "project-" + property);
                    $("#project-table").append(msg);
                }
            }
        }

        //set carousel
        $('#myCarousel').carousel("pause").removeData();
        $('#project-slider').empty();
        $('#project-slider-indicator').empty();
        for (i = 0; i < projectCategory[index].images.length; i++) {
            image = projectCategory[index].images[i];
            msg = HTMLSliderImageItem.replace("%image%", image.url);
            msg = msg.replace("%data%", image.caption);
            msg = msg.replace("%alt%", image.caption);
            $("#project-slider").append(msg);

            indicator = HTMLSliderIndicator.replace("%id%", i);
            $("#project-slider-indicator").append(indicator);
        }
        //add active to show first slide
        $("#project-slider .carousel-item").first().addClass("active");
        $("#project-slider-indicator li").first().addClass("active");
        $('#myCarousel').carousel(0);
    }
    
       
};

projects.display();
