// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
// class Rectangle {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     this.height = height;
//     this.width = width;
//   }

//   info(): string {
//     return "This is a Recktangle";
//   }
//   getArea(): number {
//     return this.height * this.width;
//   }
// }

//  2. Square - ריבוע
// class Square extends Rectangle {
//   constructor(rib: number) {
//     super(rib, rib);
//   }
// }

// 3. Shape - צורה
// class Shape{
//   info(): string {
//     return "This is a Shape";
//   }
// }

// class Rectangle extends Shape {

//   height: number;
//   width: number;

//   constructor (height:number,width:number){
//     super();
//     this.height= height;
//     this.width= width;
//   }

//   info(): string {
//     return "This is a Recktangle";
//   }
//   getArea(): number {
//     return this.height * this.width;
//   }
// }

// class Square extends Rectangle {
//   constructor(rib: number) {
//     super(rib, rib);
//   }
// }

// class ColoredRectangle extends Rectangle {
//   color: string;

//   constructor(height: number, width: number, color: string) {
//     super(height, width);
//     this.color = color;
//   }

//   info(): string {
//     return `This is a ${this.color} Recktangle`;
//   }
// }

// 4. Method Chaining
class Shape{
    info(): string {
      return "This is a Shape";
    }
  }
  
  class Rectangle extends Shape {
  
    height: number;
    width: number;
  
    constructor (height:number,width:number){
      super();
      this.height= height;
      this.width= width;
    }
  
    info(): string {
      return "This is a Recktangle";
    }
    getArea(): number {
      return this.height * this.width;
    }
    scale(num:number){
      this.height = this.height*num;
      this.width= this.width * num;
    }
    Merger(r1:Rectangle,r2:Rectangle):Rectangle{
      return new Rectangle(r1.height+r2.height,r1.width+r2.width);
    }
  
  }
  
  class Square extends Rectangle {
    constructor(rib: number) {
      super(rib, rib);
    }
  }
  
  class ColoredRectangle extends Rectangle {
    color: string;
  
    constructor(height: number, width: number, color: string) {
      super(height, width);
      this.color = color;
    }
  
    info(): string {
      return `This is a ${this.color} Recktangle`;
    }
  }
// 5. Shape with draw method
