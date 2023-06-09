let offset = 0;
const sliderItems = document.querySelector('.slider__items');
let width;
document.querySelector('.slider__next').addEventListener('click', function(){
  width = document.querySelector('.slider__item').clientWidth;
  if (width == 1140){
    offset += 1140;
      if (offset > 3420){
        offset = 0;
      }
      sliderItems.style.left = -offset + 'px';

      let numberSlide = document.getElementsByClassName('slider__amount-item')[0].textContent;
      if (offset == 0){
        document.getElementsByClassName('slider__amount-item')[0].textContent = '1';
      }else if(offset == 1140){
        document.getElementsByClassName('slider__amount-item')[0].textContent = '2';
      }else if(offset == 2280){
        document.getElementsByClassName('slider__amount-item')[0].textContent = '3';
      }else if(offset == 3420){
        document.getElementsByClassName('slider__amount-item')[0].textContent = '4';
      }
  } else{
    offset += 340;
      if (offset > 1020){
        offset = 0;
      }
      sliderItems.style.left = -offset + 'px';

      let numberSlide = document.getElementsByClassName('slider__amount-item')[0].textContent;
      if (offset == 0){
        document.getElementsByClassName('slider__amount-item')[0].textContent = '1';
      }else if(offset == 340){
        document.getElementsByClassName('slider__amount-item')[0].textContent = '2';
      }else if(offset == 680){
        document.getElementsByClassName('slider__amount-item')[0].textContent = '3';
      }else if(offset == 1020){
        document.getElementsByClassName('slider__amount-item')[0].textContent = '4';
      }
  }
  
});


document.querySelector('.slider__prev').addEventListener('click', function(){
  width = document.querySelector('.slider__item').clientWidth;
  if (width == 1140){
    offset -= 1140;
    if (offset < 0){
      offset = 3420;
    }
    sliderItems.style.left = -offset + 'px';
  
    let numberSlide = document.getElementsByClassName('slider__amount-item')[0].textContent;
    if (offset == 0){
      document.getElementsByClassName('slider__amount-item')[0].textContent = '1';
    }else if(offset == 1140){
      document.getElementsByClassName('slider__amount-item')[0].textContent = '2';
    }else if(offset == 2280){
      document.getElementsByClassName('slider__amount-item')[0].textContent = '3';
    }else if(offset == 3420){
      document.getElementsByClassName('slider__amount-item')[0].textContent = '4';
    }
  }else{
    offset -= 340;
    if (offset < 0){
      offset = 1020;
    }
    sliderItems.style.left = -offset + 'px';

    let numberSlide = document.getElementsByClassName('slider__amount-item')[0].textContent;
    if (offset == 0){
      document.getElementsByClassName('slider__amount-item')[0].textContent = '1';
    }else if(offset == 340){
      document.getElementsByClassName('slider__amount-item')[0].textContent = '2';
    }else if(offset == 680){
      document.getElementsByClassName('slider__amount-item')[0].textContent = '3';
    }else if(offset == 1020){
      document.getElementsByClassName('slider__amount-item')[0].textContent = '4';
    }
  }
});

document.getElementById("menu__btn").addEventListener('click', () =>{
  document.querySelector('header').classList.toggle('open');
})
