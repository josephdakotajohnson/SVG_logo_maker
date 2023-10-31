// Base class for shapes
class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
  }
}

class Octagon extends Shape {
  render() {
    return `<polygon points="219.29096493834652,133.70125742738173 178.70125742738173,174.29096493834652 121.29874257261827,174.29096493834652 80.7090350616535,133.70125742738173 80.70903506165348,76.29874257261827 121.29874257261822,35.70903506165351 178.70125742738176,35.70903506165351 219.2909649383465,76.29874257261822" fill="${this.color}" />`
  }
}

module.exports = { Circle, Triangle, Square, Octagon };
