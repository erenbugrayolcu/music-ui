var slider = document.getElementById('myRange');
var text = document.getElementById('text')/60;

text.innerHTML = slider.value;

slider.oninput = function(){
    text.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){
    var x = slide.value;
    var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(117,252,117)' + x + '%)'
    slider.style.background = color;
})