
var h = 400;
var w = $(window).width() - 50;

var center = [$(window).width(), 30];

var radius = [
    350,
    280,
    210,
    150,
    100
];

function isOnCircle(top, left){
    var distance = Math.floor(Math.sqrt(Math.pow(left - center[0],2) + Math.pow(top, center[1], 2)));
    return radius.indexOf(distance);
};

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
   

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];    

}

function animateParticle(particle){
    var newq = makeNewPosition();
    particle.animate({ top: newq[0], left: newq[1] }, {
    duration: Math.max(3000, Math.random() * 15000),
    specialEasing: {
      width: "linear",
    },
    complete:function(){
        animateParticle(particle);        
    } });

};

function destroyParticle(particle){
    particle.animate({ opacity : 0 }, { duration : 2000, complete : function(){ particle.remove(); generateParticle(); } })
};

function generateParticle(){
    var particle = $(document.createElement( "div" ));
    particle.addClass("particle");
    particle.addClass(Math.random() >= 0.5 ? "gray" : "");
    particle.addClass(Math.random() >= 0.5 ? "transparent" : "");
    particle.addClass(Math.random() >= 0.5 ? "large-border" : "");
    var newq = makeNewPosition();
    particle.css({ top: newq[0], left: newq[1], opacity : 0 });
    $( "body" ).append(particle);
    particle.animate({ opacity : 1 }, { duration : 2000 });
    animateParticle(particle); 
    setTimeout(function(){ destroyParticle(particle);},10000);
};

$(document).ready(function(){
    for(var i = 0; i < 10; i++){
       setTimeout(generateParticle, Math.random() * 5000);
    }
    
});