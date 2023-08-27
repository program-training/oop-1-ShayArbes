// את הקוד שלכם תכתבו כאן
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// class Shape{
//     info(): string {
//       return "This is a Shape";
//     }
//   }
//   class Rectangle extends Shape {
//     height: number;
//     width: number;
//     constructor (height:number,width:number){
//       super();
//       this.height= height;
//       this.width= width;
//     }
//     info(): string {
//       return "This is a Recktangle";
//     }
//     getArea(): number {
//       return this.height * this.width;
//     }
//     scale(num:number){
//       this.height = this.height*num;
//       this.width= this.width * num;
//     }
//     static Merger(r1:Rectangle,r2:Rectangle):Rectangle{
//       return new Rectangle(r1.height+r2.height,r1.width+r2.width);
//     }
//   }
//   class Square extends Rectangle {
//     constructor(rib: number) {
//       super(rib, rib);
//     }
//   }
//   class ColoredRectangle extends Rectangle {
//     color: string;
//     constructor(height: number, width: number, color: string) {
//       super(height, width);
//       this.color = color;
//     }
//     info(): string {
//       return `This is a ${this.color} Recktangle`;
//     }
//   }
// 5. Shape with draw method
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        return "drawing a shape ";
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.draw = function () {
        return "drawing a Triangle";
    };
    return Triangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.draw = function () {
        return "drawing a Circle";
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.draw = function () {
        return "drawing a Square";
    };
    return Square;
}(Shape));
function renderShapes(item) {
    item.forEach(function (item) {
        item.draw();
    });
}
