const text = document.getElementById('text');
let isClicked = true;
document.getElementById('bold').addEventListener('click', function(event){
    if(isClicked){
        text.style.fontWeight = 'bold';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.fontWeight = 'normal';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});

document.getElementById('italic').addEventListener('click', function(event){
    if(isClicked){
        text.style.fontStyle = 'italic';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.fontStyle = 'normal';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});


document.getElementById('underline').addEventListener('click', function(event){
    if(isClicked){
        text.style.textDecoration = 'underline';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.textDecoration = 'none';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});



document.getElementById('left').addEventListener('click', function(){ 
    text.style.textAlign = 'left';
    left.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
    right.style.backgroundColor = 'transparent';
    center.style.backgroundColor = 'transparent';
    justify.style.backgroundColor = 'transparent';
});


document.getElementById('center').addEventListener('click', function(){
    text.style.textAlign = 'center';
    center.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
    left.style.backgroundColor = 'transparent';
    right.style.backgroundColor = 'transparent';
    justify.style.backgroundColor = 'transparent';
});


document.getElementById('right').addEventListener('click', function(){
    text.style.textAlign = 'right';
    right.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
    left.style.backgroundColor = 'transparent';
    center.style.backgroundColor = 'transparent';
    justify.style.backgroundColor = 'transparent';
});


document.getElementById('justify').addEventListener('click', function(){
    text.style.textAlign = 'justify';
    justify.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
    left.style.backgroundColor = 'transparent';
    center.style.backgroundColor = 'transparent';
    right.style.backgroundColor = 'transparent';
});


let fontSize = document.getElementById('font-size');
fontSize.addEventListener('click', function(){
    const number = fontSize.value;
    text.style.fontSize = number+'px';
});
fontSize.addEventListener('keyup', function(){
    const number = fontSize.value;
    text.style.fontSize = number+'px';
});

document.getElementById('capital').addEventListener('click', function(event){
    if(isClicked){
        text.style.textTransform = 'uppercase';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.textTransform = 'none';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});


document.getElementById('color').addEventListener('change', function(event){
    const color = event.target.value;
    text.style.color = color;
});