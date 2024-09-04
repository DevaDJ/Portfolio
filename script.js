$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});
.search {
    const data = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];
        
        const searchInput = document.getElementById("searchInput");
        const searchIcon = document.getElementById("searchIcon");
        const resultsList = document.getElementById("results");

        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase();
            const filteredData = data.filter(item => item.toLowerCase().includes(query));
            displayResults(filteredData);
        });

        function displayResults(results) {
            resultsList.innerHTML = ""; // Clear previous results
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.textContent = result;
                resultsList.appendChild(listItem);
            });
        }
}