const svgNS = "http://www.w3.org/2000/svg";


window.addEventListener(
    "load",
    () => {
        RedirectionJavascript()
        let spin = create_spinning_wheel("spin-container");
        console.log(spin)
        
        spin.start()
        setTimeout(function(){spin.stop()},5000)      
    });
function RedirectionJavascript(){
    document.location.href= "#spin-container"
    console.log(document.location.href)
}
function create_spinning_wheel (container) {
    var xmlns = "http://www.w3.org/2000/svg";
    var boxWidth = 100;
    var boxHeight = 100 ;
    var svg= document.createElementNS(xmlns, "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
    svg.setAttributeNS(null, "width", boxWidth);
    svg.setAttributeNS(null, "height", boxHeight);
    svg.style.display = "block";


    var svgContainer = document.getElementById("spin-container");
    svgContainer.appendChild(svg);
    spinning_wheel = new SpinningWheel(svg);
    
    
    return spinning_wheel
}

class SpinningWheel {
    constructor(svg){
        this.svg = svg ;
        this.cx = svg.width.baseVal.value/2;
        this.cy = svg.height.baseVal.value/2;        
        this.n_dots = 10 ;
        this.r_dots = this.cx / 10 ;
        this.cr = (Math.min(this.cx, this.cy) - this.r_dots)/2;
        this.color_light = "#ffd800"
        this.color_dark = "#004445"
        this.active = true
        this.main = 0

        this.nodes = [ ] 
        for (let i = 0; i< this.n_dots; i++) {
            let dot = document.createElementNS(svgNS, 'circle');
            dot.setAttribute('cx', Math.cos(2*Math.PI *i/this.n_dots)*this.cr+this.cx); // svg's circle center
            dot.setAttribute('cy', Math.sin(2*Math.PI*i/this.n_dots)*this.cr + this.cy);
            dot.setAttribute('r', this.r_dots);  // svg's circle radius
            dot.setAttribute('id',i)
            dot.style.fill = this.color_light
            dot.style.transition = "all 0.4s ease-in-out"
            this.svg.append(dot);
        }
        console.log(this.svg)
    }
    
    start (){  
       this.repeat =  setInterval(()=>this.one_step(), 200)
    } 
    stop (){
        this.active = false
        this.svg.style.transitionDuration ="2s"
        this.svg.style.height = "0px"
        this.svg.style.width = "0px"
        
    }



    one_step () {
        if (this.active){
            let dot = this.svg.getElementById(String(this.main));
            dot.style.transitionDuration = "2s"
            dot.style.fill = this.color_light;
            if (this.main == this.n_dots -1) {
                this.main = 0
            }
            else {
                this.main = this.main  +1
            }
            let dot2 = this.svg.getElementById(String(this.main))
            dot2.style.transitionDuration = "0s"
            dot2.style.fill = this.color_dark
        }
    }

}

