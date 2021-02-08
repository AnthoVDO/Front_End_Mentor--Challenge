const numberPageView = document.querySelector('.cart__top--numberPageView');
const slider = document.querySelector('.cart__slide--slider');
const amount = document.querySelector('.cart__price--amount');
const toggle = document.querySelector(".cart__option--toggle");
const circleToggle = document.querySelector('.cart__option--circle');

const price = {
    amount: ["10k", "50k", "100k", "500k", "1M"],
    perMont: ["8", "12", "16", "24", "36"]
}

slider.addEventListener("mousedown", (e) => {
    let value = slider.value;
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%)${value}%, hsl(224, 65%, 95%)10%)`
})

slider.addEventListener("mouseup", (e) => {
    let value = slider.value;

    let point = 0;
    if (value < 21) {
        slider.value = 1;
        point = 0;
    } else {
        if (value < 41) {
            slider.value = 25;
            point = 1
        } else {
            if (value < 61) {
                slider.value = 50;
                point = 2
            } else {
                if (value < 81) {
                    slider.value = 75;
                    point = 3
                } else {
                    if (value < 101) {
                        slider.value = 100;
                        point = 4
                    }
                }

            }

        }

    }
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%)${slider.value}%, hsl(224, 65%, 95%)10%)`;
    let priceValue = price.perMont[point];
    if (toggle.classList.contains("active")) {
        priceValue = priceValue * 0.75;
    } else {
        priceValue = price.perMont[point];
    }

    numberPageView.textContent = price.amount[point];
    amount.textContent = priceValue + ".00";
})

toggle.addEventListener("click", () => {

    toggle.classList.toggle('active');
    if (toggle.classList.contains("active")) {
        toggle.style.transition = "1s";
        circleToggle.style.transition = "1s";
        circleToggle.style.marginLeft = "17px";
        toggle.style.background = "hsl(174, 86%, 45%)";
        let beforeReduce = parseInt(amount.textContent, 10) * 0.75;
        amount.textContent = beforeReduce.toString() + ".00";
    } else {
        let afterReduce = parseInt(amount.textContent, 10) / 0.75;
        amount.textContent = afterReduce.toString() + ".00";
        circleToggle.style.transition = "1s";
        circleToggle.style.marginLeft = "2px";
        toggle.style.background = "hsl(223, 50%, 87%)";
        toggle.style.transition = "1s";
    }
})