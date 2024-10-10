
function toggleMenu() {
    const menu = document.querySelector('.menu__list') 

    if (menu.classList.contains('active')) {
        
        menu.style.opacity = '0' 
        setTimeout(() => {
            menu.classList.remove('active') 
        }, 300) 
    } else {
        
        menu.classList.add('active') 
        setTimeout(() => {
            menu.style.opacity = '1' 
        }, 10) 
    }
}

const sliders = document.querySelectorAll('.visitors__item')

sliders.forEach((slider) => {
    let currentIndex = 0
    const images = slider.querySelectorAll('.visitors__img')
    const totalImages = images.length

    images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none' 
        img.style.opacity = 1 
        img.style.transition = 'opacity 8s' 
    })

    function showNextImage() {
        images[currentIndex].style.opacity = 0.1 
        currentIndex = (currentIndex + 1) % totalImages 
        images[currentIndex].style.display = 'block' 

        setTimeout(() => {
            images[currentIndex].style.opacity = 1 
        }, 50) 
    }

    setInterval(showNextImage, 5000)
})


/**********************************************/


document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.our-horse__items')
    const items = document.querySelectorAll('.our-horse__block')

    items.forEach(item => {
        const clone = item.cloneNode(true)
        container.appendChild(clone)
    })

    let currentIndex = 0
    const totalItems = items.length

    function moveSlider(offset) {
        currentIndex += offset
        if (currentIndex < 0) {
            currentIndex = totalItems - 1 
        } else if (currentIndex >= totalItems) {
            currentIndex = 0 
        }
        const translateX = -currentIndex * (100 / totalItems)
        container.style.transform = `translateX(${translateX}%)`
        container.style.transition = 'transform 0.5s ease'
    }

    const interval = setInterval(() => moveSlider(1), 3000)

    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(interval) 
        moveSlider(1)
    })

    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(interval)
        moveSlider(-1)
    })
})


/* ================================================================ */

let currentIndex = 0
const items = document.querySelectorAll('.clients__item')
const totalItems = items.length

document.querySelector('.clients__next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems
    updateSlider()
})

document.querySelector('.clients__prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems
    updateSlider()
})

function updateSlider() {
    const offset = -currentIndex * (100 / 3) 
    document.querySelector('.clients__items').style.transform = `translateX(${offset}%)`
}

/***************************************************************************/

const menuLinks = document.querySelectorAll('.menu__list-link, .menu-block__list-link, .menu__lists-link, .footer__list-link')

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            })
        }
    })
});

/*********************************************************************/

document.querySelector('a[href="#smooth"]').addEventListener('click', function (e) {
    e.preventDefault() 
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    })
});
