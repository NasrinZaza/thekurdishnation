// We are making a jquery event for each citation
function createJqueryCitations(elements){
    let scriptText = "";
    for (const x of Array(elements).keys()) {
        const jqueryStuff = 
        `$('a#link${x+1}').click(function(){
            $("#citation${x+1}").get(0).scrollIntoView();
            $("#citation${x+1}").effect( "highlight", {color:"#490000"}, 3000 );
        });`;
        scriptText = scriptText+jqueryStuff;
        }
    return scriptText;
}
const htmlTextStuff = ""

const Northern_Kurdistan_HTML = 
`
<script>
$(document).ready(function() {
    ${createJqueryCitations(5)}
});
</script>
<div class="content-wrapper">
<div class="two-column-wrapper">
    <div class="image-wrapper">
        <img src="images/NorthernKurdistan.svg" alt="Northern Kurdistan Map">
        <h1 class="region"> Northern Kurdistan</h1>
        <h2 class="population"> 20 Million Kurds </h2>
    </div>

    <div class="content-wrapper">

        <h class="sub-heading">About</h>
        <p>
        Northern Kurdistan, is one of the most populous Kurdish regions in the Middle East, with 13 of the 81 provinces having Kurdish majorities <a href="#citation1" class="citation" id="link1">[1]</a>. Due to political tensions and the denial of Kurdish existence by the Turkish government, it is difficult to truly identify the celebration of Kurdish culture, although the region has produced important Kurdish musicians and poets.</p><br>

        <h class="sub-heading">Challenges</h>
        
        <p>In terms of challenges, due to Turkification <a href="#citation2" class="citation" id="link2">[2]</a> and the ongoing military and political Kurdish-Turkish conflict, the status of Kurds in this region is dire and ongoing development in Turkish military policies has led to the loss of many Kurdish homes, villages, and lives <a href="#citation3" class="citation" id="link3">[3]</a>.<br>
            
        Although the Kurdish-Turkish conflict has lasted since 1978, the conflict between Kurds and the Turkish government have existed even during the age of the Ottoman Empire. During the 18th and 19th century, Kurdish regions have seen power struggles for decades. In the 1920s and 30s, grassroots Kurdish rebellions were forcefully put down by the Turkish government. Kurdish political parties such as The Kurdistan Workers Party (PKK) often saw many periods of military conflict. There have been many initiatives and government policies set by the Turkish government to systemically suppress the growth and existence of Kurds, such as banning the use of the Kurdish language and forced immigration of Kurds to other regions in Turkey <a href="#citation4" class="citation" id="link4">[4]</a>. In the early 2000s, when Turkey was to be nominated for joining the EU, there were some improvements and allowances for foreign language; however, much of that policy has been reversed in recent years due to the rise in military aggression by the Turkish military <a href="#citation5" class="citation" id="link5">[5]</a></p> 

        <p>In summary, the Kurdish communities in Turkey are one of the largest, but heavily persecuted, regions of Greater Kurdistan.</p>

        <p class="content-citation" id="citation1"> 
            [1] <a href="https://global.britannica.com/place/Kurdistan" class="content-citation">https://global.britannica.com/place/Kurdistan </a></p>
        <p class="content-citation" id="citation2"> 
            [2] Kurdish Politics in Turkey: From the PKK to the KCK. Routledge. 2014. ISBN 978-1-317-27116-1.</p>
        <p class="content-citation" id="citation3"> 
            [3] Dahlman, Carl. The Political Geography of Kurdistan, Eurasian Geography and Economics, Vol. 43, No. 4, 2002, p.278</p>
        <p class="content-citation" id="citation4"> 
            [4] IX. RESTRICTIONS ON THE USE OF THE KURDISH LANGUAGE. www.hrw.org.</p>
        <p class="content-citation" id="citation5"> 
            [5] <a href="https://scholarworks.wmich.edu/cgi/viewcontent.cgi?article=1630&context=masters_theses" class="content-citation">
            https://scholarworks.wmich.edu/cgi/viewcontent.cgi?article=1630&context=masters_theses
            </a></p>
        


    </div>
    
</div>
</div>

`


const Western_Kurdistan_HTML = 
`
<script>
$(document).ready(function() {
    ${createJqueryCitations(2)}
});
</script>
<div class="content-wrapper">
    <div class="two-column-wrapper">

        <div class="image-wrapper">
            <img src="images/WesternKurdistan.svg" alt="Western Kurdistan Map">
            <h1 class="region"> Western Kurdistan</h1>
            <h2 class="population"> 3.6 Million Kurds </h2>
        </div>
  
        <div class="content-wrapper">

            <h class="sub-heading">About</h>
            <p>
            The borders of Western Kurdistan have varied in recent years, although the area is defined more broadly through particular areas in the Jazire Region, Afrin District, and the Euphrates Region. The Kurds in Syria are the largest ethnic minority, comprising an estimated 10% of the country’s population.</p>
                <br><br>

            <h class="sub-heading">Challenges</h>
            
            <p>   
            The history of Kurds in Syria during the 20th century can be splitinto two general periods, defined by the formation of an independent Syrian Republic in the 1960s. During the reign of the Ottoman Empire,Kurdish tribal groups functioned with semiautonomy, but did not forma fully recognized Kurdish state. After the First World War, regions in Syria such as the Jazira province saw support for an autonomous Kurdish state, but the Syrian government responded with persecuting many pro-Kurdishsupporters, including revoking citizenship andproperty <a href="#citation1" class="citation" id="link1">[1]</a><br><br>
            
            In recent years, the Syrian Civil War and the Rojava revolution has led to the formation of a Kurdish-led autonomous region, which is currently seeing conflict with Turkey after the withdrawal of United States forces in 2019 <a href="#citation2" class="citation" id="link2">[2]</a>.<br></p>
            <p>
            In summary, the Syrian conflicts have led to the formation of a semi autonomous Kurdish state, but this region is yet to be officially recognized and tensions with Turkey have led to a state of uncertainty for the region’s future.
            </p>


            <p class="content-citation" id="citation1"> 
            [1] D. McDowall, A Modern History of the Kurds, I.B. Tauris Publishers, ISBN 978-1-85043-416-0, p. 43 </p>
            <p class="content-citation" id="citation2"> 
            [2] Displaced Kurds from Afrin need help, activist says. The Jerusalem Post. 26 March 2018. 
            <a class="content-citation" href="https://www.jpost.com/Middle-East/Displaced-Kurds-from-Afrin-need-help-activist-says-547096" class="content-citation">https://www.jpost.com/Middle-East/Displaced-Kurds-from-Afrin-need-help-activist-says-547096 
            </a></p>
            
            

        </div>
        
    </div>
</div>
`
const Eastern_Kurdistan_HTML = `
<script>
$(document).ready(function() {
    ${createJqueryCitations(6)}
});
</script>
<div class="content-wrapper">
    <div class="two-column-wrapper">

        <div class="image-wrapper">
            <img src="images/EasternKurdistan.svg" alt="Eastern Kurdistan Map">
            <h1 class="region"> Eastern Kurdistan</h1>
            <h2 class="population"> 12 Million Kurds </h2>
        </div>
  
        <div class="content-wrapper">

            <h class="sub-heading">About</h>
            <p>
            As the third largest ethnic group in Iran, the Kurdish region ofIran spans the areas known as the  Kurdistan Province, KermanshahProvince, West Azerbaijan Province, Ilam Province, and LorestanProvince <a href="#citation1" class="citation" id="link1">[1]</a>. From the 10th century to the 20th, there haveexisted many minor and major Kurdish dynasties, kingdoms, andcity-states, including the existence of a “Kurdistan” near thecity of Bahar <a href="#citation2" class="citation" id="link2">[2]</a>. While the majority of Kurds follow SunniIslam, there are substantial followers of Shia Islam and otherpockets of religion among the population <a href="#citation3" class="citation" id="link3">[3]</a>.</p><br><br>

            <h class="sub-heading">Challenges</h>
            
            <p>   
            Before the 20th century, small pockets of Kurdish areasfunctioned autonomously, including the short lived Republic ofMahabad shortly after the Second World War <a href="#citation4" class="citation" id="link4">[4]</a>. However, thePersian government has actively taken measures to suppress theKurdish population, to the extent of holding political prisonerswithout a fair trial or legal representation <a href="#citation5" class="citation" id="link5">[5]</a>.<br><br>
            
            In the 1979 Iranian rebellion against the Shah, Kurdish supporters attemptedto enact more inclusive policies after overthrowing the Shah’srule. While this attempt was not wildly successful, later effortsin the 90s, including nationwide protests for the recognition ofKurds, enabled Kurdish representation in the Persian governmentthrough the election of Kurdish governors and parliament members<a href="#citation6" class="citation" id="link6">[6]</a>. Despite such developments, tensions between the Persiangovernment and the Kurdish population at large have been highthroughout the last few decades. In the early 2000s, the murderof Kurdish activists by Iranian security forces in the city ofMahabad led to many protests by the Kurdish general population,but also resulted in a tougher crackdown on a number of Kurdish political activists.<br><br>

            In summary, the Kurdish population in Iran is present butsuppressed, despite having a history of smaller Kurdish provincesand states in the distant past.</p>

        <p class="content-citation" id="citation1"> 
            [1] Gunter, Michael M. (November 4, 2010). Historical Dictionary of the Kurds. Scarecrow Press. pp. 274–276. ISBN 978-0-8108-7507-4. </p>
        <p class="content-citation" id="citation2"> 
            [2] Sebastian Mastel (2018). The Kurds: An Encyclopedia of Life, Culture, and Society. p. 236. ISBN 9781440842573.</p>
        <p class="content-citation" id="citation3"> 
            [3]  Izady, Mehrdad R., The Kurds: A Concise Handbook, Taylor & Francis, Washington, D.C., 1992</p>
        <p class="content-citation" id="citation4"> 
            [4] D. McDowall, A Modern History of the Kurds, I.B. Tauris Publishers, ISBN 978-1-85043-416-0, p. 67</p>
        <p class="content-citation" id="citation5"> 
            [5] Romano, David (2006). The Kurdish Nationalist Movement: Opportunity, Mobilization and Identity. Cambridge Middle East studies, 22. Cambridge, UK; New York: Cambridge University Press. p. 240. ISBN 9780521850414. OCLC 61425259.</p>
        <p class="content-citation" id="citation6"> 
            [6] A Rise in Nationalism in Eastern Kurdistan. Kurdistan National Assembly. Archived from the original on 2014-09-14. <a href="http://www.kurdnas.com/en/index.php?option=com_content&view=article&id=465:a-rise-in-nationalism-in-eastern-kurdistan&catid=36:reports1&Itemid=56" class="content-citation">http://www.kurdnas.com/en/index.php?option=com_content&view=article&id=465:a-rise-in-nationalism-in-eastern-kurdistan&catid=36:reports1&Itemid=56</a></p>
        
            </div>
        
    </div>
</div>
`


const Southern_Kurdistan_HTML = 
`
<script>
$(document).ready(function() {
    ${createJqueryCitations(3)}
});
</script>
<div class="content-wrapper">
    <div class="two-column-wrapper">

        <div class="image-wrapper">
            <img src="images/SouthernKurdistan.svg" alt="Southern Kurdistan Map">
            <h1 class="region"> Southern Kurdistan</h1>
            <h2 class="population"> 8.5 Million Kurds </h2>
        </div>
  
        <div class="content-wrapper">

            <h class="sub-heading">About</h>
            <p class="content-paragraph">
            Perhaps the most politically recognized region for Kurds, the Constitution of Iraq specifically designates this area as an autonomous region, known as the Kurdistan Region, having their own parliament, borders, foreign policy and armed forces known as the Peshmerga, which translates to: those who stand before death, although this was not achieved without decades of conflict and political revolts <a href="#citation1" class="citation" id="link1">[1]</a>.</p>
            

            <h class="sub-heading">Challenges</h>
            
            <p class="content-paragraph">   
            During the era of the League of Nations, petitions were made to create an autonomous Kurdish region. Although this effort failed, the events of the Second World War allowed various Kurdish tribes to gain a foothold . This would eventually lead to the Iraqi-Kurdish war, which lasted from 1960 to 1970, resulting in negotiations for the Kurdish-led regions to gain autonomy. However, various policies and the growth of Arabification, especially under Saddam Hussein, led to the loss of many Kurdish lives <a href="#citation2" class="citation" id="link2">[2]</a>.
            </p>
            <p class="content-paragraph">
            After the US invasion of Iraq in 2003, and the subsequent withdrawal in the late 2010s, many disputes over key oil fields led to further US intervention. In 2017, a referendum was held to fully secede from Iraq, with a 92.73% vote in favor of. However, the Iraqi government retook control of key areas from Kurdistan, causing the vote to be cancelled. Today, Iraqi Kurdistan holds significant economic and political power within Iraq, and is home to Kuridsh refugees from other regions <a href="#citation3" class="citation" id="link3">[3]</a>.
               
            In summary, the Iraqi Kurdistan region is the most autonomous area of the Greater Kurdistan, and holds a key role in the political, economical, and social aspects of Iraq. 
            </p>

            <p class="content-citation" id="citation1"> 
            [1] Rafaat, Aram (2018). Kurdistan in Iraq: The Evolution of a Quasi-State. Routledge. p. 132. ISBN 9781351188814.</p>
            <p class="content-citation" id="citation2"> 
            [2] E. O'Ballance (1995). The Kurdish Struggle, 1920-94. Palgrave. p. 21.</p>
            <p class="content-citation" id="citation3"> 
            [3] Philip S. Hadji (September 2015). Iraq Timeline: Since the 2003 War. United States Institute of Peace. 41 (2). <a href="https://www.usip.org/publications/2019/07/iraq-timeline-2003-war" class="content-citation">https://www.usip.org/publications/2019/07/iraq-timeline-2003-war</a></p>

        </div>
        
    </div>
</div>
`



// Mapael specific json data for styling the map

function createMapaelProperties(countryName="",textSize=20){
    const noHoverProps = {
        // Mapael attributes for just the country body
        attrs: {
            fill: "#fff"
        }, 
        // Mapael attributes for the country when its hovered
        attrsHover: {
            fill: "#fff"
        },  
        text: {
            content: countryName,
            attrs: {
                "font-size": textSize,
                fill: "#000"
            },
            attrsHover: {
                fill: "#000"    
            }
            
        },            
    }
    return noHoverProps;
}




const area_data = {
"Russia2": createMapaelProperties(),
"Russia1": createMapaelProperties(),
"Kazakhstan": createMapaelProperties(),
"Uzbekistan": createMapaelProperties(),
"Turkmenistan": createMapaelProperties(),
"SaudiArabia": createMapaelProperties(),
"Egypt": createMapaelProperties(),
"Armenia": createMapaelProperties(),
"Georgia": createMapaelProperties(),
"Azerbaijan1": createMapaelProperties(),
"Azerbaijan2": createMapaelProperties(),
"Kuwait": createMapaelProperties(),
"Lebanon": createMapaelProperties(),
"Cyprus": createMapaelProperties(),
"Jordan": createMapaelProperties(),
"Israel": createMapaelProperties(),
"Iran2": createMapaelProperties(),
"Iran": createMapaelProperties("Iran"),
"Turkey5": createMapaelProperties(),
"Turkey4": createMapaelProperties(),
"Turkey3": createMapaelProperties(),
"Turkey2": createMapaelProperties(),
"Turkey": createMapaelProperties("Turkey"),
"Syria": createMapaelProperties("Syria"),
"Iraq2": createMapaelProperties(),
"Iraq": createMapaelProperties("Iraq"),
"Western_Kurdistan": {
    attrs: {
        fill: "#009E49"
    },
    
    attrsHover: {
        fill: "#FF0000"
    },

    add_text: Western_Kurdistan_HTML

},
"Southern_Kurdistan":{
    attrs: {
        fill: "#009E49"
    },
    
    attrsHover: {
        fill: "#FF0000"
    },

    add_text: Southern_Kurdistan_HTML

},
"Eastern_Kurdistan": {
    attrs: {
        fill: "#009E49"
    },
    
    attrsHover: {
        fill: "#FF0000"
    },
    
    // Text for the overlay
    add_text: Eastern_Kurdistan_HTML
},
"Northern_Kurdistan": {
 /*   text: {
        content: "Northern Kurdistan",
        attrs: {
            "font-size": 20
        }
    },*/

    attrs: {
        fill: "#009E49"
    },
    attrsHover: {
        fill: "#FF0000"
    },
    add_text: Northern_Kurdistan_HTML
}


}


/* Open when someone clicks on the span element (w3schools overlay example) */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay (w3schools overlay example) */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  console.log('close buton clicked')
}




// From mapael example 
        $(function () {
            $(".mapcontainer").mapael({
                map: {
                    name: "kurdistan_area",
                    // Set default plots and areas style
                    defaultPlot: {
                        size: 30,
                        attrs: {
                            fill: "#004a9b"
                            , opacity: 0.6
                        }
                        , 
                        attrsHover: {
                            // opacity: 1
                        }, 
                        text: {
                            attrs: {
                                fill: "#505444"
                            }
                            , attrsHover: {
                                fill: "#000"
                            }
                        }
                    },
                    // Area information -> actual map country body
                    defaultArea: {
                        eventHandlers: {
                            // Create a function when a country is clicked
                            click: function (e, id, mapElem, textElem, elemOptions) {
                        
                                // If the element that we clicked has the add_text property
                                if(elemOptions.add_text){
                                    // Changes the overlay div text to the country text using jquery
                                    $('.overlay-content') // Choose to change the div that has class overlay-content
                                    .html(elemOptions.add_text) // Change the html inside the div to the add_text
                                    .css({
                                        fontSize: '25px',
                                        color: '#FFFFFF'
                                    
                                    }) // Change the css properties of the div overlay-content
                                    

                                    // After we change the text, open the overlay
                                    openNav();
                                }
                            }
                        },
                        // Default properties for all country bodies
                        attrs: {
                            fill: "#828E82"
                            , stroke: "#ced8d0"
                        },
                        attrsHover: {
                            // fill: "#AAAE8E"
                        }
                        , text: {
                            attrs: {
                                fill: "#505444"
                            },
                            attrsHover: {
                                // fill: "#000"
                            }
                        }
                    }
                },
                // Moved to top of this page, contains the preoprties for each country
                areas: area_data
           
            });
        });