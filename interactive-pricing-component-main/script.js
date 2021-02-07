const numberPageView = document.querySelector('.cart__top--numberPageView');
const slider = document.querySelector('.cart__slide--slider');
const amount = document.querySelector('.cart__price--amount');
const toggle = document.querySelector(".cart__option--toggle");
const circleToggle = document.querySelector('.cart__option--circle');

const price = {
    amout: ["10k", "50k", "100k", "500k", "1M"],
    perMont: ["8", "12", "16", "24", "36"]
}

slider.addEventListener("mousedown", (e) => {
    let value = slider.value;
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%)${value}%, hsl(224, 65%, 95%)10%)`
})

slider.addEventListener("mouseup", (e) => {
    let value = slider.value;
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%)${value}%, hsl(224, 65%, 95%)10%)`
    let point = 0;
    if (value < 21) {
        point = 0;
    } else {
        if (value < 41) {
            point = 1
        } else {
            if (value < 61) {
                point = 2
            } else {
                if (value < 81) {
                    point = 3
                } else {
                    if (value < 101) {
                        point = 4
                    }
                }

            }

        }

    }



    numberPageView.textContent = price.amout[point];
    amount.textContent = price.perMont[point];
})

toggle.addEventListener("click", () => {
    toggle.classList.toggle('active');
    if (toggle.classList.contains("active")) {
        toggle.style.transition = "1s";
        circleToggle.style.transition = "1s";
        circleToggle.style.marginLeft = "17px";
        toggle.style.background = "hsl(174, 86%, 45%)";
        let beforeReduce = parseInt(amount.value, 10) * 0.75;
        amount.textContent = beforeReduce.toString();
    } else {
        circleToggle.style.transition = "1s";
        circleToggle.style.marginLeft = "2px";
        toggle.style.background = "hsl(223, 50%, 87%)";
        toggle.style.transition = "1s";
    }
})