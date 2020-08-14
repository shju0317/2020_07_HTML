var div_list = document.getElementsByTagName("div")

for(var i = 0; i < div_list.length; i++){
    var red = Math.floor(Math.random() * 256); // 0~25599까지의 난수로 변환
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // 10진수를 16진수 문자열로 바꾸기
    // red = toHex(red);
    // green = toHex(green);
    // blue = toHex(blue);

    // background-color
    // backgroundColor
    // 백틱(`) : ES2015 이상에서만 사용가능한 연산자
    var s = "rgb("+red+","+green+","+blue+")";
    var color_string = `rgb(${red},${green},${blue})`;
    div_list[i].style.backgroundColor = color_string;
    div_list[i].innerHTML = color_string;
}