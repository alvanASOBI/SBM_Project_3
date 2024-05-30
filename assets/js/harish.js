// let currentBanner = 0;
// const banners = document.querySelectorAll('.banner');
// const totalBanners = banners.length;

// function showNextBanner() {
//     banners[currentBanner].style.transform = `translateX(-${currentBanner * 100}%)`;
//     currentBanner = (currentBanner + 1) % totalBanners;
//     banners[currentBanner].style.transform = `translateX(-${currentBanner * 100}%)`;
// }

// setInterval(showNextBanner, 4000);

let currentBanner = 0;
const banners = document.querySelectorAll('.banner');
const totalBanners = banners.length;

function showNextBanner() {
    banners.forEach((banner, index) => {
        banner.style.transform = `translateX(-${currentBanner * 100}%)`;
    });

    currentBanner = (currentBanner + 1) % totalBanners;

    banners.forEach((banner, index) => {
        banner.style.transform = `translateX(-${currentBanner * 100}%)`;
    });
}

banners.forEach((banner, index) => {
    banner.style.transform = `translateX(-${index * 100}%)`;
});

setInterval(showNextBanner, 4000);


