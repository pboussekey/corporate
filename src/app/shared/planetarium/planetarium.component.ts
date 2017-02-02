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
  inputs : ['radius', 'center', 'size', 'nbParticles'],
  selector: '[app-planetarium]',
  templateUrl: './planetarium.component.html',
  styleUrls: ['./planetarium.component.less'],
  animations : [
    trigger("particle", [
        state("normal", style({ opacity : 1 })),
        transition("void => *", [style({ width : 0, height : 0 }), animate(500)]),
        transition("* => void", animate(500, style({ opacity : 0 })))
    ]),
    trigger("circle", [
        state("normal", style({ opacity : 1 })),
        transition("void => *", animate(2000))
    ])
  ]
})
export class PlanetariumComponent implements AfterViewInit  {
    @Input() public radius : number[];
    @Input() public nbParticles : number; 
    @Input() public center : number[];
    @Input() public size : number[];
    public particles : any[] = [];
    public positions : any;
    public autoResize: boolean;
   
    top(){
         return [ Math.floor(this.size[0] * Math.random()), -100];
    }
    right(){
        return [ -100, Math.floor(this.size[1] * Math.random())];
    }
    bottom(){
        return [ Math.floor(2000 * Math.random()), this.size[1] + 100];
    }
    left(){
        return [ this.size[0] + 100,  Math.floor(this.size[1] * Math.random())];
    }
    orbit(){
        var radius = this.radius[Math.floor(Math.random() * this.radius.length)];
        return [radius, 0];
    }
    
    distance(a : number[], b : number[]){
        return Math.round(Math.sqrt(Math.pow(b[0] - b[1],2) + Math.pow(a[0] - a[1], 2)));
    }
    
    destroyParticle(particle : any){
        this.particles.splice(this.particles.indexOf(particle), 1);
        this.particles.push(this.generateParticle(0));
    }
    
    onResize(){
        if (this.autoResize){
            this.size[0] = window.innerWidth;
        }
    }
    
    generateParticle(delay : number){
        delay = delay || 0;
        var keys = Object.keys(this.positions);
        var source = keys.filter(function(p){ return p !== "orbit"; })[Math.floor(Math.random() * (keys.length - 1))];
        var destination = keys.filter(function(p){ return p !== source; })[Math.floor(Math.random() * (keys.length - 1))];
        var rotation = Math.floor((Math.random() - 0.5) * 40);
        var size =  Math.floor(Math.random() * 6 + 10);
        size -= size % 2;
        var borderWidth = Math.min(16 - size, size / 2,Math.floor(Math.random() * 6 + 1));
        var particle = { 
            orbit : destination === "orbit",
            source: this.positions[source](), 
            destination : this.positions[destination](), 
            color : Math.random() > 0.5 ? "blue" : "gray" ,
            opacity : Math.random() * 0.75 + 0.2,
            width : size,
            borderWidth : [borderWidth,0 , 0],
            duration : Math.floor(Math.random() * 5000 + 20000),
            rotation : 0,
            delay : delay
        };
        setTimeout(function(){
           particle.source[0] = particle.destination[0];
           particle.source[1] = particle.destination[1]; 
           particle.rotation = rotation;
        }, particle.delay);
        if(!particle.orbit){
            setTimeout(function(){
                this.destroyParticle(particle);
            }.bind(this), particle.delay + particle.duration - 500);
        }
        else{
            setTimeout(function(){
               particle.rotation = particle.rotation + (particle.rotation < 0 ? -1 : 1) * 720;
               particle.duration *= 2;
               particle.width *= 1.5;
               particle.borderWidth[1] = particle.width * 0.5 * Math.random();
               particle.borderWidth[2] = (particle.width - particle.borderWidth[1] * 2) * (0.3 * Math.random() + 0.2);
               particle.borderWidth[0] = 1;
               setTimeout(function(){
                    this.destroyParticle(particle);
               }.bind(this), particle.duration - 500);
            }.bind(this),  particle.delay + particle.duration);
        }
        return particle;
    }
    
   
    
    ngAfterViewInit() {
        this.autoResize = !this.size[0];
        this.size[0] |= window.innerWidth;
        this.positions = {
            top : this.top.bind(this),
            right : this.right.bind(this),
            bottom : this.bottom.bind(this),
            left : this.left.bind(this),
            orbit : this.orbit.bind(this)
        };
        for(var i = 0; i < this.nbParticles; i++){
            this.particles.push(this.generateParticle(Math.random() * 4000 + 1000));
        }
    }  
}
