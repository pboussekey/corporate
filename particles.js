
$(document).ready(function(){
    var h = 400;
    var w =  $("#header").outerWidth();
    var center = [0, 0];

    var radius = [
        350,
        280,
        210,
        150,
        100
    ];
    
    var positions = {
        up : function(){
            return [-50, w * Math.random()];            
        },
        right : function(){
            return [h * Math.random(), w + 50];
        },
        bottom : function(){
            return [h + 50, w * Math.random()]
        },
        left : function(){
            return [h * Math.random(), -50]
        }
    };
    
    

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
            particle.rotation = (Math.random() - 0.5) * 720;
            particle.currentRotation = particle.rotation * 2;
            particle.duration = Math.max(3000, Math.random() * 15000);
            var distance = distanceToCenter(destination[0], destination[1]);
            radius.forEach(function(r){
               if(r >= distance && Math.random() >= 0.5){
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
        
        particle.animate({  opacity : 1 }, {
        step : function(){
            $(particle).css(
                { transform: (particle.currentRotation ? "rotate(" + (-particle.currentRotation) + "deg)" : "") 
                    + "translate(-" + particle.x + "px, " + particle.y + "px) " 
                    + (particle.currentRotation ? "rotate(" + particle.currentRotation + "deg)" : ""), 
                 transition : "transform " + particle.duration + "ms", "transition-timing-function" : particle.currentRotation ? "linear" : "easeIn" })
        },
        duration: particle.duration,
        complete:function(){
            if(!particle.orbit){
                destroyParticle(particle);
            }
            else{
                if(!particle.lifespan){
                    particle.removeClass("small");
                    particle.removeClass("large-border");
                    var subparticle = $(document.createElement( "div" ));
                    subparticle.addClass("particle");
                    subparticle.addClass("small");
                    subparticle.addClass(particle.hasClass("gray") ? "gray" : "");
                    subparticle.addClass("large-border");
                    particle.append(subparticle);
                    
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
        particle.addClass(Math.random() >= 0.5 ? "transparent" : "");
        particle.addClass(Math.random() >= 0.5 ? "large-border" : "");
        particle.addClass(Math.random() >= 0.5 ? "small" : "");
        var source=  Object.keys(positions)[Math.floor(Math.random() * 4)];
        var destination = Object.keys(positions).filter(function(p){ return p !== source; })[Math.floor(Math.random() * 3)];
        source = positions[source]();
        destination = positions[destination]();
        particle.css({ transform: "translate(-" + source[1] + "px, " + source[0] + "px)", opacity : 0 });
        particle.x = source[1];
        particle.y = source[0];
        $( "#animation-layout" ).append(particle);
        animateParticle(particle, destination); 
    };

    for(var i = 0; i < 15; i++){
       setTimeout(generateParticle, Math.random() * 5000);
    }
    
});