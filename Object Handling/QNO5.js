//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

class Cylinder{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getVolume(){
        let volume = Math.PI*Math.pow(this.radius,2)*this.height;
        return volume.toFixed(4);
    }
};
let myCylinder = new Cylinder(3,5);
let volume = myCylinder.getVolume();
console.log(`The Volume of a cylinder is ${volume}`);