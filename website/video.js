const tombolFilter = document.querySelectorAll(".filter-btn");
const itemGaleri = document.querySelectorAll(".item-galeri");

tombolFilter.forEach((button) => {
    button.addEventListener("click", () => {
        tombolFilter.forEach((tombol) =>{
            tombol.classList.remove("active");
        });

        button.classList.add("active");

        const nilaiValue = button.dataset.filter;
        itemGaleri.forEach(item => {
            if (nilaiValue === "semua" || item.classList.contains(nilaiValue)){
                item.classList.remove("hidden");
            } else{
                item.classList.add("hidden")
            }
        });
    });
});