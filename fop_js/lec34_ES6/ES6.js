import {PI, getCircumference, getArea, getSphereVolume} from './MathUtils.js';

console.log(PI)

let radius = 5

let circumference = getCircumference(radius)
console.log(circumference.toFixed(2))

let area = getArea(radius)
console.log(area.toFixed(2))

let volume = getSphereVolume(radius)
console.log(volume.toFixed(2))