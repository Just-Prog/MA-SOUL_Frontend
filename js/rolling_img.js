let i = 1;

setInterval(() => {
    $(".rolling_imgs").css('left',  '-' + i*100 + '%');
    i++;
    if(i>3){
        i=0;
    }
}, 5000);