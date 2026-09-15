console.log("AI Hub Loaded Successfully");
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', function () {

    const searchTerm = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }

    });

});

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});