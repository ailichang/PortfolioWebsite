/*jslint plusplus: true */
/*jslint browser: true*/
/*global $, jQuery, alert, console*/

var HTMLProjectPreview = '<div class="col-md-4 project-cell"><button type="button" class="project-btn" id ="%data%" data-toggle="modal" data-target="#projectModal"><div class="project-btn-mask"><p>%headline%</p></div></button></div>';
var HTMLProjectTitle = '<span id="project-title"><b>%title%</b>&nbsp&nbsp&nbsp%time%</span>';
var HTMLProjectHeadline = '<div id="project-headline"><p><b>%data%</b></p></div>';
var HTMLSliderIndicator = '<li data-target="#myCarousel" data-slide-to="%id%"></li>';
var HTMLSliderImageItem = '<div class="carousel-item"><img src="%image%" alt="%alt%"><div class="carousel-caption"><span>%data%</span></div></img></div>';
var HTMLProjectImage = '<img src="%data%" class="project-image"/>';
var HTMLSliderYoutubeVideoItem = '<div class="carousel-item"><iframe id="%id%" width="%width%" height="%height%" src="https://www.youtube.com/embed/%videoID%?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen="true" allowscriptaccess="always"><div class="carousel-caption"><span>%data%</span></div></iframe></div>';
var HTMLButtonLink =  '<a href="%url%" class="btn" role="button" target="_blank"> <button type="button" class="btn btn-info">%text%</button></a>';
var videoWidth = 418,
    videoHeight = 235;

function ResizeVideo() {
    var previousWidth = videoWidth; 
    if(innerWidth < 576){
        videoWidth = 418;
        videoHeight = 235;
    }
    else if(innerWidth < 768){ // min width 576
        videoWidth = 418;
        videoHeight = 235;            
    }
    else if(innerWidth < 992){ //min width 768
        videoWidth = 468;
        videoHeight = 263;
    }
    else if(innerWidth < 1200){ //min width 992
        videoWidth = 718;
        videoHeight = 404
    }
    else{ // min width 1200px
        videoWidth = 966;
        videoHeight = 544;
    }
    if(previousWidth !== videoWidth){
         console.log("current window size: w:"+ window.innerWidth + "h:" +window.innerHeight);
         $("iframe").each( function (){
            console.log($(this)[0]);
            $(this)[0].setAttribute("width", videoWidth);
            $(this)[0].setAttribute("height", videoHeight);
        });   
    }
}
window.addEventListener("resize", ResizeVideo);
ResizeVideo();

var pauseYoutubeVideo = function () {
    "use strict";
    var id = $(".carousel-item.active:has(iframe)").find("iframe").attr('id');
    if (id !== null && typeof (id) !== "undefined") {
        window.frames[id].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
};

var stopYoutubeVideo = function () {
    "use strict";
    var id = $(".carousel-item.active:has(iframe)").find("iframe").attr('id');
    if (id !== null && typeof (id) !== "undefined") {
        window.frames[id].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    }
};

var projects = {
    game: [
        {
            title: "Live Planet VR",
            time: "May 2019 - October 2019",
            headline: " VR App for Displaying 360 Videos and Live Streams",
            role: "Unity Developer",
            company: "Live Planet Inc.",
            developmentTools: ["Unity3D", "Android Studio","Rider","Git","CircleCI"],
            platform: ["Oculus Go", "GearVR"],
            description: "Live Planet is a VR app for displaying 360 videos and livestreams captured by Live Planet 360 Camera and other supported cameras. The app allows user to view videos and livestreams uploaded from PC platform and browse other public videos, playlists and live streams. Users are also find specific video, playlist and live streams with a live planet (gear icon) code.",
            images: [
                {
                    caption: "Home",
                    url: "image/work/liveplanet/home.png"
                },
                {
                    caption: "Featured Channel",
                    url: "image/work/liveplanet/channel.png"
                },
                {
                    caption: "Pausing Video From a Playlist",
                    url: "image/work/liveplanet/playlist_pause.png"
                },
                {
                    caption: "Vdeo Detail Page",
                    url: "image/work/liveplanet/video_detail.jpg"
                },
                {
                    caption: "Live Planet 360 Camera",
                    url: "image/work/liveplanet/camera.png"
                },
                {
                    caption: "Live Planet Control Apps (PC & Android)",
                    url: "image/work/liveplanet/control_app.jpg"
                }
            ],
            videos: [
            ]

        },
        {
            title: "WiseMind",
            time: "September 2016 - August 2017",
            headline: " VR Experience That Improves Psychotherapy",
            role: "Unity Developer",
            company: "Realiteer Corp",
            developmentTools: ["Unity3D", "BrainCloud","GitHub"],
            platform: ["Oculus Rift", "HTC Vive"],
            description: "WiseMind is a VR platform that improves psychotherapy treatment. The users use Oculus or HTC Vive to do different exercise such as breathing, stone stacking and Tai-chi. The platform is now available on Steam. <br/> I implemented several immersive experience based on psychotherapy treatment. And I researched and integrated various social media APIs and plugins into our experience so that users can easily access to those media. ",
            icon: "image/work/realiteer/WiseMind.png",
            images: [
                {
                    caption: "Tai-chi Game",
                    url: "image/work/realiteer/wisemind-taichi.jpg"
                },
                {
                    caption: "Stone Stacking",
                    url: "image/work/realiteer/wisemind-stackingstone.jpg"
                },
                {
                    caption: "Breathing Exercise",
                    url: "image/work/realiteer/wisemind-breathing.jpg"
                }
            ],
            videos: [
                {
                    caption: "WiseMind Promo Video",
                    youtubeId: "W1WT4dM_ZtY"
                }
            ]

        },
        {
            title: "BattleZ",
            time: "December 2015 - May 2016",
            headline: "VR Multiplayer Zombie Shooting Game",
            role: "Unity Developer",
            company: "Realiteer Corp",
            developmentTools: ["Unity3D", "BrainCloud","GitHub"],
            platform: ["Google Cardboard (Android, iOS)", "GearVR", "RealControl"],
            description: "BattleZ is a multiplayer zombie shooting game. The players use Google VR (Cardboard) to view and RealControl to aim at zombies. The game is now available on Google Play and App Store.<br/> I designed and implemented the structure of storing and retrieving user data using a BaaS, BrainCloud. I also built user authentication and user profile customization functionalities.",
            icon: "image/work/realiteer/battleZ-poster.png",
            images: [
                {
                    caption: "Battle Field",
                    url: "image/work/realiteer/battleZ-1.jpg"
                },
                {
                    caption: "Giant Zombie Appeared",
                    url: "image/work/realiteer/battleZ-2.png"
                }
            ],
            videos: [
                {
                    caption: "BattleZ Promo Video",
                    youtubeId: "aSED7MUTTds"
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
            developmentTools: ["Unity3D", "Photon Unity Networking","GitHub"],
            platform: ["Google Daydream (Android, iOS)"],
            description: "H2H Snow is a VR multiplayer vocabulary learning game made for iTutorGroup. Players learn vocabulary by throwing snowballs at targets with antonyms tags and feeding food to targets with synonym tags. <br/> I worked on the importing vocabulary file and setting name tags using Photon Network.",
            icon: "image/work/realiteer/h2hSnow-icon.png",
            images: [
                {
                    caption: "Snow Ball Fight",
                    url: "image/work/realiteer/h2hSnow-1.jpg"
                },
                {
                    caption: "Summary of End Game: Vocabulary Learned",
                    url: "image/work/realiteer/h2hSnow-2.jpg"
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
            developmentTools: ["Unity3D", "BrainCloud","GitHub"],
            platform: ["Google Cardboard (Android, iOS)"],
            description: "CORT VR is a virtual reality furniture showroom made for CORT. The viewer uses Google Cardboard to view furniture and walk through the CORT''s Beverly Hills, California showroom.<br/>I worked on the interface and navigation of experience.",
            icon: "image/work/realiteer/cort-icon.png",
            images: [
                {
                    caption: "Furniture Showroom",
                    url: "image/work/realiteer/cort-1.png"
                },
                {
                    caption: "Surprise Effect When Approach Interactive Objects",
                    url: "image/work/realiteer/cort-2.png"
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
                    caption: "Hungry Squid Promo Video",
                    youtubeId: "DJBOhu9PvhM"
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
                    caption: "Marioneta Promo Video",
                    youtubeId: "DKYC4Ey70Rk"
                },
                {
                    caption: "Basic movements, Jump and Draw Particles by Waving Hands",
                    youtubeId: "wve7FqOeICI"
                },
                {
                    caption: "Hit, Kick, Pickup, Throwing, Droping, Passing Objects to Other Player and Play intruments",
                    youtubeId: "iizWjLs3zD8"
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
            title: "Magic Potion Rule Book",
            headline: "2 Player Dice Game",
            time: "Fall 2017",
            role: "Game Designer",
            advisor: "Entertainment Technology Center, CMU",
            description: "Here's the story of the game: Two kings, who wanted to live forever, send their men to find the entire magic potion of elixir of life. They know that recipe has separated into 3 pieces. Both of the kings doubt each other having one of pieces and request their men to take it from the other king's men. ",
            pdf: "doc/MagicPotion_RuleBook.pdf",
            images: [
                {
                    caption: "Main Deck",
                    url: "image/etc/magic-potion/main-deck.jpg"
                },
                {
                    caption: "Info Deck",
                    url: "image/etc/magic-potion/info-deck.jpg"
                },
                {
                    caption: "Icons",
                    url: "image/etc/magic-potion/icons.jpg"
                },
                {
                    caption: "Character Card: Assassin",
                    url: "image/etc/magic-potion/assassin-card.png"
                },
                {
                    caption: "Character Card: Hunter",
                    url: "image/etc/magic-potion/hunter-card.png"
                },
                {
                    caption: "Character Card: Merchant",
                    url: "image/etc/magic-potion/merchant-card.png"
                },
                {
                    caption: "Character Card: Magician",
                    url: "image/etc/magic-potion/magician-card.png"
                },
                {
                    caption: "Character Card: necromancer",
                    url: "image/etc/magic-potion/necromancer-card.png"
                },
                {
                    caption: "Character Card: Priest",
                    url: "image/etc/magic-potion/priest-card.png"
                },
                {
                    caption: "Character Card: Swordsman",
                    url: "image/etc/magic-potion/swordsmen-card.png"
                },
                {
                    caption: "Character Card: thief",
                    url: "image/etc/magic-potion/thief-card.png"
                },
                {
                    caption: "Prototype",
                    url: "image/etc/magic-potion/prototype.jpg"
                }
            ]
        }

    ],
    illustration: [
        {
            title: "Doodling!",
            headline: "Watercolor Illustrations",
            time: "2016 - Present",
            description: "I took a watercolor course in Palo Alto Art Center in 2016 and since then I got interested in watercolor illustrations. Here are some of my recent watercolor illustrations!",
            images: [
                {
                    caption: "Apples",
                    url: "image/watercolor/apple.jpg"
                },
                {
                    caption: "Tiger",
                    url: "image/watercolor/tiger.jpg"
                },
                {
                    caption: "Deer",
                    url: "image/watercolor/deer.jpg"
                },
                {
                    caption: "Afghan Girl",
                    url: "image/watercolor/afghan_girl.jpg"
                },
                {
                    caption: "Flower",
                    url: "image/watercolor/flower_girl.jpg"
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
                    caption: "Goblins Asking for Help",
                    url: "image/etc/giant-ask.png"
                },
                {
                    caption: "Goblins Observing",
                    url: "image/etc/giant-observing.png"
                },
                {
                    caption: "User Instruction: Bridge",
                    url: "image/etc/giant-instruction-bridge.png"
                },
                {
                    caption: "User Instruction: Eat Evil Human",
                    url: "image/etc/giant-instruction-eat.png"
                },
                {
                    caption: "User Instruction: Scoop Evil Human",
                    url: "image/etc/giant-instruction-scoop.png"
                },
                {
                    caption: "User Instruction: Shield",
                    url: "image/etc/giant-instruction-shield.png"
                }
            ],
            videos: [
                {
                    caption: "Opening Animatic",
                    youtubeId: "OAO5e56SFOs"
                },
                {
                    caption: "Gameplay Video",
                    youtubeId: "kjNk0E0ZlIE"
                }
            ]
        }
    ],
    mobile: [
        {
            title: "Habit Builder",
            time: "Current",
            headline: " Android mobile app for building good habits",
            role: "Android Developer",
            company: "None",
            developmentTools: ["Android Studio (Java/ Kotlin)"],
            platform: ["Android Mobile"],
            description: "Habit Builder is an android mobile app for helping users to build habits and track behaviours. The users can create habits and the missions will be scheduled. Tools like counters and timers are also privided so that the users can easily check if they reaches their mission goals. For example, take a walk in the neighborhood for 30 minutes every weekend or drink a cup of water for 5 times everyday. Furthermore, the users who completed the missions can received experience points and achievements. ",
            images: [
                {
                    caption: "Habits",
                    url: "image/work/habitbuilder/habit.png"
                },
                {
                    caption: "Missions",
                    url: "image/work/habitbuilder/missions.png"
                },
                {
                    caption: "Mission's Counter",
                    url: "image/work/habitbuilder/counter.png"
                },
                {
                    caption: "Mission's Timer",
                    url: "image/work/habitbuilder/timer.png"
                },
                {
                    caption: "Create Habit",
                    url: "image/work/habitbuilder/create_habit.png"
                },
                {
                    caption: "Reward (with mock data)",
                    url: "image/work/habitbuilder/reward.png"
                },
                {
                    caption: "Inventory (with mock data)",
                    url: "image/work/habitbuilder/inventory.png"
                },
                {
                    caption: "Monthly Tracker",
                    url: "image/work/habitbuilder/tracker.png"
                }
            ]
        }
        ,
         {
            title: "SangJar Android App",
            time: "August 2020 - March 2021",
            headline: "Android mobile shopping app for SangJar",
            role: "Android Developer (Client Side)",
            company: "SangJar",
            developmentTools: ["Android Studio (Java), Shopify API"],
            platform: ["Android Mobile"],
            description: "SangJar is an online shop for selling Korean beauty kit products. SangJar also teaches the users how to use the k-beauty products.",
            images: [
                {
                    caption: "Main",
                    url: "image/work/sangjar/home.png",
                },
                {
                    caption: "Product Detail",
                    url: "image/work/sangjar/product_detail.png",
                },
                {
                    caption: "Product Detail",
                    url: "image/work/sangjar/product_detail_2.png",
                },
                {
                    caption: "Shopping Cart",
                    url: "image/work/sangjar/cart.png",
                },
                {
                    caption: "Customer Review",
                    url: "image/work/sangjar/customer_review.png",
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
                        button.style.backgroundPosition = "center";
                       // button.style.backgroundSize="contain";
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
            video,
            indicator,
            property,
            propertyEntry,
            propertyValue,
            i;
        
        switch (category) {
        case "mobile-project":
            projectCategory = projects.mobile;
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
        row = "<tr id='%id%'><td class='table-entry''>%entry%</td><td>%value%</td></tr>";
        for (property in projectCategory[index]) {
            if (projectCategory[index].hasOwnProperty(property)) {
                if (property !== "images" && property !== "videos" && property !== "icon" && property !== "title" && property !== "time" && property !== "headline") {
                    propertyEntry = property;
                    if (property === "developmentTools") {
                        propertyEntry = "dev tools";
                    } else if (property === "designTools") {
                        propertyEntry = "design tools";
                    }
                    msg = row.replace("%entry%", propertyEntry.toUpperCase());
                    propertyValue = projectCategory[index][property];
                    if (propertyValue instanceof Array) {
                        propertyValue = propertyValue.join(', ');
                    }
                    if (property === "pdf" || property === "slides") {
                        propertyValue = HTMLButtonLink.replace('%url%', propertyValue);
                        propertyValue = propertyValue.replace('%text%', "Open in New Tab");
                    }
                    msg = msg.replace("%value%", propertyValue);
                    msg = msg.replace("%id%", "project-" + property);
                    $("#project-table").append(msg);
                }
            }
        }

        //set carousel
        //$('#myCarousel').carousel("pause").removeData(); //somehow triggers animation
        $('#project-slider').empty();
        $('#project-slider-indicator').empty();
        
        //add video to carousel
        if (projectCategory[index].hasOwnProperty("videos")) {
            for (i = 0; i < projectCategory[index].videos.length; i++) {
                video = projectCategory[index].videos[i];
                //msg = HTMLSliderYoutubeVideoItem.replace("%url%", video.url);
                msg = HTMLSliderYoutubeVideoItem.replace("%videoID%", video.youtubeId);
                msg = msg.replace("%id%", video.youtubeId);
                msg = msg.replace("%data%", video.caption);
                msg = msg.replace("%width%", videoWidth);
                msg = msg.replace("%height%", videoHeight);
                $("#project-slider").append(msg);

                indicator = HTMLSliderIndicator.replace("%id%", i);
                $("#project-slider-indicator").append(indicator);
                
                //set video pause when next or prev button is clicked
                $('a.carousel-control-prev').click(pauseYoutubeVideo);
                $('a.carousel-control-next').click(pauseYoutubeVideo);
                
                //pause button when modal closes
                $('#projectModal').off('hide.bs.modal').on('hide.bs.modal', function (e) { //hide modal event was fired multiple times, this is a hack solution
                   // e.stopImmediatePropagation();
                    stopYoutubeVideo();
                })
            }
        }
                
        //add image to carousel
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
