import React from "react";

export const Rectangle = () => {
  return (
    <svg width={300} height={300}>
      <rect
        x={40}
        y={50}
        width={200}
        height={100}
        fill="#EC407A"
        strokeWidth={10}
        stroke="#69F0AE"
      />
    </svg>
  );
};

export const Circle = () => {
  return (
    <svg width={300} height={300}>
      <circle cx={100} cy={100} r={80} fill="#2196F3" strokeWidth={10} stroke="#69F0AE" />
    </svg>
  );
};

export const Ellipse = () => {
  return (
    <svg width={300} height={300}>
      <ellipse cx={200} cy={100} rx={100} ry={70} fill="#2196F3" />
    </svg>
  );
};

export const Line = () => {
  return (
    <svg width={600} height={600}>
      <line x1={200} y1={100} x2={400} y2={500} strokeWidth={30} stroke="#CDDC39" />
    </svg>
  );
};

// можно в рамках одного холста(svg) рисовать сразу несколько фигур
export const Some = () => {
  return (
    <svg width={600} height={600}>
      <line x1={200} y1={100} x2={400} y2={500} strokeWidth={30} stroke="#CDDC39" />
      <circle cx={100} cy={100} r={50} fill="#2196F3" strokeWidth={10} stroke="#69F0AE" />
      <ellipse cx={200} cy={400} rx={80} ry={50} fill="#2196F3" />
    </svg>
  );
};

export const Polyline = () => {
  return (
    <svg width={300} height={300}>
      <polyline points="0,100 50,25 50,75 100,0" fill="none" strokeWidth={5} stroke="#69F0AE" />
    </svg>
  );
};

export const Polygon = () => {
  return (
    <svg width={400} height={400}>
      <polygon
        points="50,0 100,50 100,100 50,150 0,100 0,50"
        fill="7E57C2"
        strokeWidth={5}
        stroke="#69F0AE"
      />
    </svg>
  );
};

// https://materialdesignicons.com/
export const Heart = () => {
  return (
    <svg width={24} height={24}>
       <path fill="#000000" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
    </svg>
  );
};

export const Heart2 = ({size, color}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
       <path fill={color} d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
    </svg>
  );
};

const types = {
    "heart": "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z",
    "cake": "M21,21V17C21,15.89 20.1,15 19,15H18V12C18,10.89 17.1,10 16,10H13V8H11V10H8C6.89,10 6,10.89 6,12V15H5C3.89,15 3,15.89 3,17V21H1V23H23V21M12,7A2,2 0 0,0 14,5C14,4.62 13.9,4.27 13.71,3.97L12,1L10.28,3.97C10.1,4.27 10,4.62 10,5A2,2 0 0,0 12,7Z"
}

export const SomeShape = ({size, color, type}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
       <path fill={color} d={types[type]} />
    </svg>
  );
};

/*
https://developer.mozilla.org/ru/docs/Web/SVG
https://developer.mozilla.org/ru/docs/Web/SVG/Attribute
https://developer.mozilla.org/en-US/docs/Web/SVG/Element 
*/

/* 
svg:
width - размеры холста
height - размеры холста
viewBox - https://developer.mozilla.org/ru/docs/Web/SVG/Attribute/viewBox, что-то что помагает скейлить фигуру, размер хослта мы теперь задаём динамически через props, а во viewBox указываем первые две цифры это смещение относительно холста, а вторые две это размеры самой фигуры, в нашем случае иконки из https://materialdesignicons.com/ оптимизированны под 24x24

shapes:
fill - цвет заливки
stroke - цвет обводки
strokeWidth - ширина обводки

rect:
x - координаты смещения верхнего левого угла, относительно холста
y - координаты смещения верхнего левого угла, относительно холста
width - размеры прямоугольника
height - размеры прямоугольника

circle:
cx - координаты смещения центра круга, относительно холста
cy - координаты смещения центра круга, относительно холста
r - радиус круга

ellipse:
cx - координаты смещения центра, относительно холста
cy - координаты смещения центра, относительно холста
rx - радуис по оси X
ry - радуис по оси Y

line:
x1 - координата первой точки отрезка по оси X, относительно холста
y1 - координата первой точки отрезка по оси Y, относительно холста
x2 - координата второй точки отрезка по оси X, относительно холста
y2 - координата второй точки отрезка по оси Y, относительно холста

polyline:
polygon:
points - набор координат (x,y x,y x,y ...)
fill - заливка, fill="none" - заливку отключаем

path:
d - описание того, как нужно двигаться чтобы построить фигуру
*/
