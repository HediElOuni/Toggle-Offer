document.getElementById("toggleButton").addEventListener("click", function() {
    let priceAnn = document.getElementsByClassName('price-a');
    let priceMon = document.getElementsByClassName('price-m');
    if (this.classList.contains("animate-right")) {
        this.classList.remove("animate-right");
        this.classList.add("animate-left");
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                priceAnn[i].style.display = 'inline-block';
                priceMon[i].style.display = 'none';
            }, 300);
        }
    } else {
        this.classList.remove("animate-left");
        this.classList.add("animate-right");
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                priceAnn[i].style.display = 'none';
                priceMon[i].style.display = 'inline-block';
            }, 300);
        }
    }
});