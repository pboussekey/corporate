import {
  Component,
  style,
  transition,
  animate,
  state,
  trigger,
  Input,
  AfterViewInit,
} from '@angular/core';


@Component({
  moduleId : module.id,
  inputs : ['radius', 'center', 'nbParticles'],
  selector: '[app-planetarium]',
  templateUrl: './planetarium.component.html',
  styleUrls: ['./planetarium.component.less'],
  animations : [
    trigger("particle", [
        transition("void => *", [
            style({
                opacity : 0,
                transform : 'rotate(0deg)'
            }),
            animate(500)
        ]),
        transition("* => void", [
            animate(500, style({
                opacity : 0
            }))
        ])
    ]),
    trigger("circle", [
        state("normal", style({ opacity : 1 })),
        transition("void => *", [
            style({
                width : 0,
                height : 0
            }),
            animate(2000)
        ])
    ]),
  ]
})
export class PlanetariumComponent implements AfterViewInit  {
    @Input() public radius : number[];
    @Input() public nbParticles : number; 
    @Input() public center : number[];
    public particles : any[] = [];
   
    top(){
         return [ (100 * Math.random()) + "%", -100];
    }
    right(){
        return [ -100, (100 * Math.random()) + "%" ];
    }
    bottom(){
        return [ (100 * Math.random()) + "%", "100%"];
    }
    left(){
        return [ "100%", (100 * Math.random()) + "%"];
    }
    orbit(){
        var radius = this.radius[Math.floor(Math.random() * this.radius.length)];
        var angle = Math.floor((Math.random() - 0.5) * 720); 
        return [radius * Math.cos(angle) + this.center[0],  radius * Math.sin(angle) + this.center[1]];
        
    }
    
    generateParticle(delay : number){
        delay = delay || 0;
        var keys = Object.keys(this.positions);
        var source = keys.filter(function(p){ return p !== "orbit"; })[Math.floor(Math.random() * keys.length)];
        var destination = keys.filter(function(p){ return p !== source; })[Math.floor(Math.random() * (keys.length - 1))];
        var rotation = Math.floor((Math.random() - 0.5) * 720);
        var currentRotation = Math.max(-360, Math.min(360,rotation * 10));
        var size =  Math.floor(Math.random() * 6 + 10);
        size -= size % 2;
        var borderSize = Math.min(16 - size, size / 2,Math.floor(Math.random() * 6 + 1));
        var particle = { 
            orbit : destination === "orbit",
            source: this.positions[source](), 
            destination : this.positions[destination](), 
            color : Math.random() > 0.5 ? "blue" : "gray" ,
            opacity : Math.random() * 0.8 + 0.2,
            size : size,
            borderSize : borderSize,
            duration : Math.floor(Math.random() * 20000 + 10000),
            rotation : rotation,
            currentRotation: currentRotation,
            delay : delay
        };
        
        setTimeout(function(){
           particle.source[0] = particle.destination[0];
           particle.source[1] = particle.destination[1]; 
        }, particle.delay);
        if(!particle.orbit){
            setTimeout(function(){
                this.particles.splice(this.particles.indexOf(particle), 1);
                this.particles.push(this.generateParticle(0));
            }.bind(this), particle.delay + particle.duration);
        }
        else{
            setTimeout(function(){
               particle.currentRotation = particle.currentRotation + 720;
               setTimeout(function(){
                    this.particles.splice(this.particles.indexOf(particle), 1);
                    this.particles.push(this.generateParticle(0));
               }, particle.duration);
            },  particle.delay + particle.duration);
        }
        return particle;
    }
    
    public positions : any = {
        top : this.top,
        right : this.right,
        bottom : this.bottom,
        left : this.left
    };
    
    ngAfterViewInit() {
        for(var i = 0; i < this.nbParticles; i++){
            this.particles.push(this.generateParticle(Math.random() * 5000));
        }
    }  
}
