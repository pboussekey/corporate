
$(document).ready(function(){
    var h = 800;
    var w =  $("#header").outerWidth();
    var center = [0, 0];

    var radius = [
        370,
        290,
        210,
        150,
        100
    ];
    
    var positions = {
        up : function(){
            return [-100, Math.floor( $("#header").outerWidth() * Math.random())];            
        },
        right : function(){
            return [Math.floor(h * Math.random()), -100];
        },
        bottom : function(){
            return [h + 100, Math.floor( $("#header").outerWidth() * Math.random())]
        },
        left : function(){
            return [Math.floor(h * Math.random()),  $("#header").outerWidth() + 100]
        }
    };
    
    function step(){
        
    }

    function distanceToCenter(top, left){
        var distance = Math.floor(Math.sqrt(Math.pow(left - center[1],2) + Math.pow(top - center[0], 2)));
        return distance;
    };

    function getIntersection(particle){
        var cx = particle.x;
        var cy = particle.y;
        var currentDistance = distanceToCenter(cy, cx);
        var nx = Math.floor(cx + (center[1] - cx) * (Math.abs(currentDistance - particle.orbit) / currentDistance));
        var ny = Math.floor(cy + (center[0] - cy) * (Math.abs(currentDistance - particle.orbit) / currentDistance));
        return [ny , nx];

    }

    function animateParticle(particle, destination){
        if(!particle.orbit){
            particle.rotation = Math.floor((Math.random() - 0.5) * 720);
            particle.currentRotation = Math.max(-360, Math.min(360,particle.rotation * 10));
            particle.duration = Math.floor(Math.max(15000, Math.random() * 20000));
            var distance = distanceToCenter(destination[0], destination[1]);
            radius.forEach(function(r){
               if(r >= distance && Math.random() >= 0.20){
                   particle.orbit = r;
               } 
            });
            if(particle.orbit){
                destination = getIntersection(particle);
            }
            particle.x = destination[1];
            particle.y = destination[0];
        }
        else{
            particle.currentRotation = particle.currentRotation + particle.rotation;
        }
        
        particle.animate({ opacity : particle.opacity  }, {
        step : function(){
            $(particle).css( 
                { transform: (particle.currentRotation ? "rotate(" + particle.currentRotation + "deg)" : "") 
                    + "translate(" + (-particle.x) + "px, " + particle.y + "px) " , 
                 transition : "transform linear " + particle.duration + "ms" })
        },
        duration: particle.duration,
        complete:function(){
            if(!particle.orbit){
                destroyParticle(particle);
            }
            else{
                if(!particle.lifespan){
                    particle.size = Math.floor(particle.size * 1.5);
                    particle.animate(
                        { 
                            "border-width" : 1,
                            height : particle.size, 
                            width : particle.size, 
                            top : -Math.floor(particle.size * 0.5 + particle.borderSize),
                            right : -Math.floor(particle.size * 0.5 + particle.borderSize),
                    }, { 
                        duration : 500, 
                        easing : "easeOutElastic",
                        step : function(){
                            $(particle).css( 
                                { transform: (particle.currentRotation ? "rotate(" + particle.currentRotation + "deg)" : "") 
                                    + "translate(" + (-particle.x) + "px, " + particle.y + "px) " , 
                                 transition : "transform linear " + particle.duration + "ms" })
                        }
                    });
                    var subparticle = $(document.createElement( "div" ));
                    subparticle.addClass("particle");
                    subparticle.addClass(particle.hasClass("gray") ? "gray" : "");
                    subparticle.borderSize = Math.max(1,Math.floor(Math.random() * particle.size * 0.5));
                    particle.append(subparticle);
                    subparticle.animate(
                        { 
                            "border-width" : subparticle.borderSize
                    }, { 
                        duration : 500, 
                        easing : "easeOutElastic"
                    });
                    
                    particle.lifespan = setTimeout(function(){ destroyParticle(particle);},30000);
                }
                animateParticle(particle);
            }
        } });

    };

    function destroyParticle(particle){
        particle.animate({ opacity : 0 }, { 
            duration : 500, 
            complete : function(){ particle.remove(); generateParticle(); } })
    };

    function generateParticle(){
        var particle = $(document.createElement( "div" ));
        particle.addClass("particle");
        particle.addClass(Math.random() >= 0.5 ? "gray" : "");
        var source=  Object.keys(positions)[Math.floor(Math.random() * 4)];
        var destination = Object.keys(positions).filter(function(p){ return p !== source; })[Math.floor(Math.random() * 3)];
        source = positions[source]();
        destination = positions[destination]();
        particle.x = source[1];
        particle.y = source[0];
        particle.opacity = Math.random() * 0.8 + 0.2;
        particle.size = Math.floor(Math.random() * 6 + 10);
        particle.size -= particle.size % 2;
        particle.borderSize = Math.min(16 - particle.size, particle.size / 2,Math.floor(Math.random() * 6 + 1));
        $( "#animation-layout" ).append(particle);
        particle.css(
            { 
                transform: "translate(" + (-source[1]) + "px, " + source[0] + "px)", 
                height : particle.size, 
                width : particle.size, 
                top : -Math.floor(particle.size * 0.5 + particle.borderSize),
                right : -Math.floor(particle.size * 0.5 + particle.borderSize),
                "border-width" : particle.borderSize,
                opacity : particle.opacity
            });
        animateParticle(particle, destination); 
    };

    for(var i = 0; i < 10; i++){
       setTimeout(generateParticle, Math.random() * 5000);
    }
    
});