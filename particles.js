
$(document).ready(function(){
    var h = 350;
    var w =  $("#header").outerWidth();
    var center = [30, 0];

    var radius = [
        350,
        280,
        210,
        150,
        100
    ];

    function distanceToCenter(top, left){
        var distance = Math.floor(Math.sqrt(Math.pow(left - center[1],2) + Math.pow(top - center[0], 2)));
        return distance;
    };

    function makeNewPosition(){
        var ny = Math.floor(Math.random() * h);
        var nx = Math.floor(Math.random() * w);

        return [ny,nx];    
    }

    function getIntersection(particle){
        var cx = particle.x;
        var cy = particle.y;
        var currentDistance = distanceToCenter(cy, cx);
        var nx = Math.floor(cx + (center[1] - cx) * (Math.abs(currentDistance - particle.orbit) / currentDistance));
        var ny = Math.floor(cy + (center[0] - cy) * (Math.abs(currentDistance - particle.orbit) / currentDistance));
        console.log(radius, cx, cy, currentDistance, nx, ny, distanceToCenter(ny, nx));
        return [ny , nx];

    }

    function animateParticle(particle){
        if(!particle.orbit){
            particle.duration = Math.max(3000, Math.random() * 15000);
            newq = makeNewPosition();
            var distance = distanceToCenter(newq[0], newq[1]);
            radius.forEach(function(r){
               if(r >= distance && Math.random() >= 0.5){
                   particle.orbit = r;
               } 
            });
            if(particle.orbit){
                newq = getIntersection(particle);
                particle.rotation = (Math.random() - 0.5) * 720;
                particle.currentRotation = particle.rotation * 2;
            }
            particle.x = newq[1];
            particle.y = newq[0];
        }
        else{
            particle.currentRotation = particle.currentRotation + particle.rotation;
        }
        
        particle.animate({  opacity : 1 }, {
        step : function(){
            $(this).css(
                { transform: (particle.currentRotation ? "rotate(" + (-particle.currentRotation) + "deg)" : "") 
                    + "translate(-" + particle.x + "px, " + particle.y + "px) " 
                    + (particle.currentRotation ? "rotate(" + particle.currentRotation + "deg)" : ""), 
                 transition : "transform " + particle.duration + "ms", "transition-timing-function" : particle.currentRotation ? "linear" : "easeIn" })
        },
        duration: particle.duration,
        complete:function(){
            animateParticle(particle);  
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
        var newq = makeNewPosition();
        particle.css({ transform: "translate(-" + newq[1] + "px, " + newq[0] + "px)", opacity : 0 });
        particle.x = newq[1];
        particle.y = newq[0];
        $( "body" ).append(particle);
        animateParticle(particle); 
        setTimeout(function(){ destroyParticle(particle);},30000);
    };

    for(var i = 0; i < 10; i++){
       setTimeout(generateParticle, Math.random() * 5000);
    }
    
});