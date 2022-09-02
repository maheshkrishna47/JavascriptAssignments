// Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.

// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);

// obj.getVolume();

// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr

// 2h

// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr
// 3
// where r is the radius
// 3) Cone- Volume= πr
// 2h/3

// where r is the radius and h is the height of the cone.


class Shape{
    constructor(radius){
        this.radius=radius;
    }
  }
  
  class Cylinder extends Shape{
    
    constructor(radius,height){
      super(radius);
      this.height = height;   
    }
    getVolume(){
        return 3.14 * this.radius * this.radius * this.height;
      
    }
  }

  class Sphere extends Shape{
    
    constructor(radius){
      super(radius);
 
    }
    getVolume(){
        return (4/3) * 3.14 * this.radius * this.radius * this.radius;
      
    }
  }

  class Cone extends Shape{
    
    constructor(radius,height){
      super(radius);
      this.height = height;   
    }
    getVolume(){
        return (3.14 * this.radius * this.radius * this.height)/3;
      
    }
  }
  
  let cylinder= new Cylinder(2,10);
  console.log(parseFloat(cylinder.getVolume().toFixed(4)));

  let sphere= new Sphere(2);
  console.log(parseFloat(sphere.getVolume().toFixed(4)));

  let cone= new Cone(2,10);
  console.log(parseFloat(cone.getVolume().toFixed(4)));