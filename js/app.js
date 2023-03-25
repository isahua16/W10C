function change_image(event)
{
    if(event[`target`][`outerHTML`].includes(`adorable-pug-puppy`) === true)
    {
        event[`target`].setAttribute(`src`, `https://img.freepik.com/free-photo/front-view-funny-cute-dog-concept_23-2148786532.jpg?w=1800&t=st=1679773496~exp=1679774096~hmac=fbb6dd42917a51353e7bd1a04d15f3a82e9df49333a4bccb7572726d23003b17`);
    }
    else
    {
        event[`target`].setAttribute(`src`, `https://img.freepik.com/free-photo/adorable-pug-puppy-solo-portrait_53876-64820.jpg?w=2000&t=st=1679772936~exp=1679773536~hmac=42414d004ca29510bb334e2fc741d74fa4f6eb2d4c0887a3b5bf551695d2a487`);
    }
}

function change_font_size(event)
{
    if(event[`target`][`style`][`fontSize`] === `1.5rem`)
    {
        event[`target`][`style`][`fontSize`] = `1rem`;
    }
    else
    {
        event[`target`][`style`][`fontSize`] = `1.5rem`;
    }
}

function change_hover_on(event)
{
    event[`target`][`style`][`opacity`] = `0`;
}

function change_hover_off(event)
{
    event[`target`][`style`][`opacity`] = `1`;
}

function change_background_color (event)
{
    if(event[`code`] === `Space`)
    {
        if(event[`currentTarget`][`style`][`backgroundColor`] !== ``)
        {
            event[`currentTarget`][`style`][`backgroundColor`] = ``;
        }
        else
        {
            event[`currentTarget`][`style`][`backgroundColor`] = `red`;
        }
    }
}

function change_background_color_auto()
{
    if(page[`style`][`backgroundColor`] !== ``)
    {
        page[`style`][`backgroundColor`] = [``];
    }
    else
    {
        page[`style`][`backgroundColor`] = [`red`];
    }
}

function random_position_value_percentage()
{
    return Math.random() * 90;
}


function move_image_auto()
{
    button[`style`][`top`] = `${random_position_value_percentage()}%`;
    button[`style`][`left`] = `${random_position_value_percentage()}%`;
}

let dog = document.querySelector(`#dog`);
let text = document.querySelector(`#text`);
let footer_logo = document.querySelector(`#footer_logo`)
let page = document.querySelector(`body`);
let button = document.querySelector(`button`);

dog.addEventListener(`click`, change_image);
text.addEventListener(`dblclick`, change_font_size)
footer_logo.addEventListener(`mouseover`, change_hover_on);
footer_logo.addEventListener(`mouseleave`, change_hover_off);
page.addEventListener(`keydown`, change_background_color);
setTimeout(change_background_color_auto, 15000);
setInterval(move_image_auto, 3000)