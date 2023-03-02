//sidebar//
const menuItems = document.querySelectorAll('.menu-items');

//-----------------messages-------------//
const messagesNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const meassageSearch = document .querySelector('#message-search');

//-----------------Theme-------------//
const theme = document.querySelector ('#Theme');
const themeModel = document.querySelector ('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span ');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');

//-----------------remove active class from all menu-items-------------//

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem ();
        item.classList.add('active');
        if (item.id != 'notification'){
            document.querySelector('notification-popup'). style.display = 'none';
        } 
        else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';
        }
    })
})

//----Messages -- searches chat----//
const searchMessage = () => {
    const val = meassageSearch.value.toLowerCase ();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex' ;
        } else {
            user.style.display = 'none';
        }
    })
}

meassageSearch.addEventListener('keyup', searchMessage);

//-------highlights messages card-------//
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = ' 0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout( () => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

//---theme-- display-customization------//
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
}
themeModel.addEventListener('click', closeThemeModel);

theme.addEventListener('click', openThemeModel);

//-------Font-------//
fontSizes.forEach(size => {
    let fontSize;
    size.addEventListener('click', () => {
        if(size.classList.contains('.font_size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }
        else if(size.classList.contains('font_size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }
        else if(size.classList.contains('font_size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }
        else if(size.classList.contains('font_size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        }
        else if(size.classList.contains('font_size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left','-12rem');
            root.style.setProperty('----sticky-top-right','-35rem');
        }
    //---change font size of the root html element---//
        document.querySelector('html').style.fontSize = fontSize;
    })
})
//---reove active class from color----//
const changeAvtiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//----- change primary color----//
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeAvtiveColorClass ();
        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})