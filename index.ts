// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
class Rectangle {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  info(): string {
    return "This is a Recktangle";
  }
  getArea(): number {
    return this.height * this.width;
  }
}

//  2. Square - ריבוע
class Square extends Rectangle {
  constructor(rib: number) {
    super(rib, rib);
  }
}

// 3. Shape - צורה
class Shape extends Rectangle {
  info(): string {
    return "This is a Shape";
  }
}

class ColoredRectangle extends Rectangle {

    color:string;

    constructor(height: number, width: number , color:string) {
        super(height, width);
        this.color = color;
      }

    info(): string {
      return`This is a ${this.color} Recktangle`;
    }
  }

// 4. Method Chaining

// 5. Shape with draw method
