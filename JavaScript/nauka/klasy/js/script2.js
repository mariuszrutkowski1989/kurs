console.log('Dziedziczenie klas');

// Dziedziczenie sluzy stworzeniu hierarchii klas, innych cech roznym klasom

class Line {
    constructor(length = 0) {
        this.length = length;
    }

    setLenght(lenght = 0) {
        this.length = lenght;
    }
}

let linia = new Line(108);
linia.setLenght(110);
console.log(linia);

// A teraz prostokąt 

class Rectangle extends Line {
    constructor(width = 0, lenght = 0) {
        super(lenght);
        this.width = width;
    }

    setWidth(width = 0) {
        this.width = width;
    }
}

let prostokat = new Rectangle(10, 20);
prostokat.setWidth(100);
prostokat.setLenght(200);
console.log(prostokat);


class Cuboid extends Rectangle {
    constructor(height = 0, width = 0, lenght = 0) {
        super(lenght, width);
        this.height = height;
    }
    setHeight(height = 0) {
        this.height = height;
    }
}

let prostoPadloscian = new Cuboid (40,  50, 60);
prostoPadloscian.setHeight(400);
prostoPadloscian.setWidth(500);
prostoPadloscian.setLenght(600);
console.log(prostoPadloscian);


