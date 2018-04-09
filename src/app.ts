import { fabric } from "fabric";

// declare const fabric: any;

export class App {
  message = 'Hello World!';

  public attached() : void {
    var canvas = new fabric.Canvas("graphic");
    canvas.setBackgroundColor("#aabbcc", () => {});
    
    var circle = new fabric.Circle({ backgroundColor: "blue"});
    circle.setColor("blue");
    circle.setRadius(10);
    circle.left = 20;
    circle.top = 20;
    canvas.add(circle);
    canvas.renderAll();
  }
}
