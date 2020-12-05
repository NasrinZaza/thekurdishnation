
// Mapael specific json data for styling the map

function createMapaelProperties(countryName="",textSize=30){
    const noHoverProps = {
        // Mapael attributes for just the country body
        attrs: {
            fill: "#b3b3b3"
        }, 
        // Mapael attributes for the country when its hovered
        attrsHover: {
            fill: "#b3b3b3"
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
        fill: "#333333"
    },
    
    attrsHover: {
        fill: "#FF0000"
    },

},
"Southern_Kurdistan":{
    attrs: {
        fill: "#333333"
    },
    
    attrsHover: {
        fill: "#FF0000"
    },

},
"Eastern_Kurdistan": {
    attrs: {
        fill: "#333333"
    },
    
    attrsHover: {
        fill: "#FF0000"
    },
    
    // Text for the overlay
    add_text: "This is Eastern Kurdistan"
},
"Northern_Kurdistan": {
    text: {
        content: "Northern Kurdistan",
        attrs: {
            "font-size": 30
        }
        
    },
    attrs: {
        fill: "#333333"
    },
    attrsHover: {
        fill: "#FF0000"
    },
    add_text: "This is Northern Kurdistan"
}


}


/* Open when someone clicks on the span element (w3schools overlay example) */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay (w3schools overlay example) */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
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
                                    .html(elemOptions.add_text+`
                                    <br><h2>Sub Heading 1</h2><div class = "overlay-info"> Sub Information</div>
                                    <br><h2>Sub Heading 2</h2><div> Sub Information</div>
                                    <br><h2>Sub Heading 3</h2><div> Sub Information</div>`) // Change the html inside the div to the add_text
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