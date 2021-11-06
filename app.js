const bubble1 = document.querySelector('.bubble-1');
const bubble2 = document.querySelector('.bubble-2');
const bubble3 = document.querySelector('.bubble-3');
const bubble4 = document.querySelector('.bubble-4');
const bubble5 = document.querySelector('.bubble-5');
const bubble6 = document.querySelector('.bubble-6');
const bubble7 = document.querySelector('.bubble-7');
const bubble8 = document.querySelector('.bubble-8');
const bubble9 = document.querySelector('.bubble-9');

const content1 = document.querySelector('.cards_item_content--1');
const content2 = document.querySelector('.cards_item_content--2');
const content3 = document.querySelector('.cards_item_content--3');
const content4 = document.querySelector('.cards_item_content--4');
const content5 = document.querySelector('.cards_item_content--5');
const content6 = document.querySelector('.cards_item_content--6');
const content7 = document.querySelector('.cards_item_content--7');
const content8 = document.querySelector('.cards_item_content--8');
const content9 = document.querySelector('.cards_item_content--9');


const cardItem1 = document.querySelector('.card_item_1');
const cardItem2 = document.querySelector('.card_item_2');
const cardItem3 = document.querySelector('.card_item_3');

function bubbleShow9() 
{
    bgcover3('https://images.ctfassets.net/j95d1p8hsuun/7yqyTKtqhVSeaO566eA7OX/093a5417e49e6233d2d7d86fa1e0ac0b/forge.jpg');
    bubble9.style.backgroundColor = "blue";
    content9.style.display = "block";
    content8.style.display = "none";
    content7.style.display = "none";
    bubble9.style.transition = "1s ease-in-out";
    bubble8.style.backgroundColor = "lightgray";
    bubble7.style.backgroundColor = "lightgray";
}

function bubbleShow8() 
{
    bgcover3('https://sm.ign.com/ign_fr/news/n/new-world-/new-world-reportedly-has-a-vulnerability-that-makes-it-possi_qetz.jpg');
    bubble8.style.backgroundColor = "blue";
    content8.style.display = "block";
    content9.style.display = "none";
    content7.style.display = "none";
    bubble8.style.transition = "1s ease-in-out";
    bubble9.style.backgroundColor = "lightgray";
    bubble7.style.backgroundColor = "lightgray";
}

function bubbleShow7() 
{
    bgcover3('https://images.ctfassets.net/j95d1p8hsuun/302v7wNGLEDkNDjMLsODDA/f36f0cc3a541aa69feac13677acf3b60/NW_News_Gen_01_740x416.jpg');
    bubble7.style.backgroundColor = "blue";
    content7.style.display = "block";
    content8.style.display = "none";
    content9.style.display = "none";
    bubble7.style.transition = "1s ease-in-out";
    bubble8.style.backgroundColor = "lightgray";
    bubble9.style.backgroundColor = "lightgray";
}

function bubbleShow6() 
{
    bgcover2('https://www.journaldugeek.com/content/uploads/2020/06/new-world.jpg');
    bubble6.style.backgroundColor = "blue";
    content6.style.display = "block";
    content5.style.display = "none";
    content4.style.display = "none";
    bubble6.style.transition = "1s ease-in-out";
    bubble5.style.backgroundColor = "lightgray";
    bubble4.style.backgroundColor = "lightgray";
}

function bubbleShow5() 
{
    bgcover2('https://images.ctfassets.net/j95d1p8hsuun/4aiPgnMp3CrvZ39oQqQnHE/34aed6174b535f280ff21de1d0140d85/Shattered-Obelisk-thumb.jpg');
    bubble5.style.backgroundColor = "blue";
    content5.style.display = "block";
    content4.style.display = "none";
    content6.style.display = "none";
    bubble5.style.transition = "1s ease-in-out";
    bubble4.style.backgroundColor = "lightgray";
    bubble6.style.backgroundColor = "lightgray";
}

function bubbleShow4() 
{
    bgcover2('https://www.geekgeneration.fr/wp-content/uploads/2020/05/New-World-Spriggan_hero_mist_720.jpg');
    bubble4.style.backgroundColor = "blue";
    content4.style.display = "block";
    content5.style.display = "none";
    content6.style.display = "none";
    bubble4.style.transition = "1s ease-in-out";
    bubble5.style.backgroundColor = "lightgray";
    bubble6.style.backgroundColor = "lightgray";
}

function bubbleShow3() 
{
    bgcover1('https://www.alwaysforkeyboard.com/wp-content/uploads/2021/11/new_world_129.jpg');
    bubble3.style.backgroundColor = "blue";
    content3.style.display = "block";
    content1.style.display = "none";
    content2.style.display = "none";
    bubble3.style.transition = "1s ease-in-out";
    bubble2.style.backgroundColor = "lightgray";
    bubble1.style.backgroundColor = "lightgray";
}

function bubbleShow2() 
{
    bgcover1('https://cdn1.dotesports.com/wp-content/uploads/sites/8/2021/09/29080214/logging1-2.jpg');
    bubble2.style.backgroundColor = "blue";
    content2.style.display = "block";
    content1.style.display = "none";
    content3.style.display = "none";
    bubble2.style.transition = "1s ease-in-out";
    bubble3.style.backgroundColor = "lightgray";
    bubble1.style.backgroundColor = "lightgray";
}

function bubbleShow1() 
{
    bgcover1('https://www.warlegend.net/wp-content/uploads/New-World_-Launch-Trailer-1-12-screenshot-scaled.jpg');
    bubble1.style.backgroundColor = "blue";
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    bubble1.style.transition = "1s ease-in-out";
    bubble2.style.backgroundColor = "lightgray";
    bubble3.style.backgroundColor = "lightgray";
}

function bgcover1(url)
{
    cardItem1.style.background = "url('" + url + "')";
    cardItem1.style.backgroundPosition = "center center";
    cardItem1.style.backgroundSize = "cover";
    cardItem1.style.transition = "2s ease-in-out";
}

function bgcover2(url)
{
    cardItem2.style.background = "url('" + url + "')";
    cardItem2.style.backgroundPosition = "center center";
    cardItem2.style.backgroundSize = "cover";
    cardItem2.style.transition = "2s ease-in-out";
}

function bgcover3(url)
{
    cardItem3.style.background = "url('" + url + "')";
    cardItem3.style.backgroundPosition = "center center";
    cardItem3.style.backgroundSize = "cover";
    cardItem3.style.transition = "2s ease-in-out";
}