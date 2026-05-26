let carouselArr = [];

class Carousel {
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }
      
    static Start(arr) {
        if(arr) {
            if(arr.length > 0) {
                Carousel._items = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next();
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
                Carousel.StartTimer();
                Carousel.SetupListeners();
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        let currentIndex = Carousel._sequence; 
        let currentItem = Carousel._items[currentIndex];

        let linkCarousel = document.getElementById('carousel-link');
        
        linkCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        let divTitle = document.getElementById('carousel-title');
        divTitle.innerHTML = currentItem.title; 

        if (Carousel._sequence === 1) { 
            linkCarousel.removeAttribute('href');
        } else {
            linkCarousel.href = "lancamento.html";
        }

        Carousel._sequence++;
        
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0; 
        }
    }

    static Prev() {
        Carousel._sequence -= 2;
        if(Carousel._sequence < 0) {
            Carousel._sequence += Carousel._size;
        }
        
        Carousel._isPrev = true; 
        
        Carousel.Next();
    }

    static StartTimer() {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(function(){ Carousel.Next(); }, 5000);
    }

    static SetupListeners() {
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                Carousel.Prev();
                Carousel.StartTimer();
            });

            nextButton.addEventListener('click', () => {
                Carousel.Next();
                Carousel.StartTimer();
            });
        }
    }
};