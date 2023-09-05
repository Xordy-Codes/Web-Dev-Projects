//sidebar
const menuItems = document.querySelectorAll('.menu-item');

//Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelector('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');

//remove active class  from all menu items
    const changeActiveItem = () => {
        menuItems.forEach(item => {
            item.classList.remove('active');
        })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//-----------------Messages------------------//

//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display ='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

//theme customization

//opens modal
const openThemeModal = () => {
     themeModal.style.display = 'grid';
}
     //close modal
     const closeThemeModal = (e) => {
        if(e.target.classList.contains('customize-theme')){
            themeModal.style.display = 'none';
        }
     }


//close model
themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal);

//-----------------------------fonts----------------------------
fontSizes.forEach(size => {
    let fontSize;
    

    size.addEventListener('click', () => {
        if(size.classList.contain('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }else if(size.classList.contain('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }else if(size.classList.contain('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }else if(size.classList.contain('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }else if(size.classList.contain('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})


//remove active class from colors

const changeActiveColorClass = () => {

}
    // change primary color
    colorPalette.forEach(color => {
        color.addEventListener('click', () => {
            let primaryHue;
    
            if (color.classList.contains('color-1')) {
                primaryHue = 252;
            } else if (color.classList.contains('color-2')) {
                primaryHue = 52;
            } else if (color.classList.contains('color-3')) {
                primaryHue = 352;
            } else if (color.classList.contains('color-4')) {
                primaryHue = 152;
            } else if (color.classList.contains('color-5')) {
                primaryHue = 202;
            }
            color.classList.add('active');
    
            root.style.setProperty('--color-primary', primaryHue);
        });
    });
