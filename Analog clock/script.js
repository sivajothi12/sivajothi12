setInterval(()=>{
    d=new Date();
    hhour=d.getHours();
    hmin=d.getMinutes();
    hsec=d.getSeconds();

    hourrot = 30*hhour+hmin/2;
    minrot = 6*hmin;
    secrot = 6*hsec;

    sec.style.transform='rotate(${secrot}deg)';
    hour.style.transform='rotate(${hourrot}deg)';
    min.style.transform='rotate(${minrot}deg)';

},1000);