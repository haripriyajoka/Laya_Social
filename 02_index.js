//sidebar//
const menuItems = document.querySelectorAll('.menu-items');
const messagesNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const meassageSearch = document .querySelector('#message-search');

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

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = ' 0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout( () => {
        messages.style.boxShadow = 'none';
    }, 2000);
})