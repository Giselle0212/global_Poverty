const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c9c7e17bdcmshf50c7817141dd28p1b69e8jsn02ee9a2cf585',
        'X-RapidAPI-Host': 'community-worldbank.p.rapidapi.com'
    }
};
fetch('https://community-worldbank.p.rapidapi.com/datacatalog?format=json', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    let slideIndex = 1;
    showSlides(slideIndex)

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentslide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
    