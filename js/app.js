//When a user clicks an image, check if the url contains part of string and change the src attribute to another url in orde to change the image. Put the original url/image back if it does not.
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
//When a user doubleclicks an element, if the font size of that element is 1.5 rem, reset the font-size to 1rem, otherwise increase the font size to 1.5 rem.
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

//When a user's mouse enters an element on the page, change that element's opacity to 0.
function change_hover_on(event)
{
    event[`target`][`style`][`opacity`] = `0`;
}

//When a user's mouse enters an element on the page, change that element's opacity back to 1.
function change_hover_off(event)
{
    event[`target`][`style`][`opacity`] = `1`;
}

//When a user presses a key on their keyboard, check to see if the resulting code attached to that event is `Space`, which links to the keyboard spacebar. If the keyboard pressed was the spacebar, check to see if the element onto which the listener for this event is attached has a background-color that is not none (not empty string). if it does, reset its background color to none (empty string). Otherwise, change the background color of that element to red.
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

//Same logic as above.
function change_background_color_auto()
{
    if(page[`style`][`backgroundColor`] !== ``)
    {
        page[`style`][`backgroundColor`] = ``;
    }
    else
    {
        page[`style`][`backgroundColor`] = `red`;
    }
}

// Return a number between 0 and 90.
function random_position_value_percentage()
{
    return Math.random() * 90;
}

//Set the top and left position of the button element to random percentage values between 0 and 90%. For this to work, the button is positioned absolutely on the page. I chose 90% and not 100% so the element wouldn't go off the page.
function move_image_auto()
{
    button[`style`][`top`] = `${random_position_value_percentage()}%`;
    button[`style`][`left`] = `${random_position_value_percentage()}%`;
}

//Get HTML elements off the page for manipulation
let dog = document.querySelector(`#dog`);
let text = document.querySelector(`#text`);
let footer_logo = document.querySelector(`#footer_logo`)
let page = document.querySelector(`body`);
let button = document.querySelector(`button`);

//Add event listeners to HTML elements on the page
dog.addEventListener(`click`, change_image);
text.addEventListener(`dblclick`, change_font_size)
footer_logo.addEventListener(`mouseover`, change_hover_on);
footer_logo.addEventListener(`mouseleave`, change_hover_off);
page.addEventListener(`keydown`, change_background_color);

//Set a timer to change the background color of the page according to the logic in the functionref after 15 seconds that the page is loaded.
setTimeout(change_background_color_auto, 15000);
//Every 3 seconds, the button element will change its top and left position values according to the logic above.
setInterval(move_image_auto, 3000);

//This function is triggered when a user presses a key down on their keyboard. If that event's [`key`] key is one of `secret`, add them to a string. When that string includes all the secret characters, add an h1 tag containing the password below the dog element only if that id tag of #secret is not already on the page.
function secret_password(event)
{
    if(event[`key`] === `s` || event[`key`] === `e` || event[`key`] === `c` || event[`key`] === `r` || event[`key`] === `t`)
    {
       str = str + `${event[`key`]}`;
    }
    
    if(str.includes(`s`) && str.includes(`e`) && str.includes(`c`) && str.includes(`r`) && str.includes(`t`))
    {
        if(!document.querySelector(`#secret`))
        {
            dog.insertAdjacentHTML(`afterend`, `<h1 id="secret">THE SECRET PASSWORD IS SECRET</h1>`)
        }
    }
}

let str = ``;
page.addEventListener(`keydown`, secret_password);