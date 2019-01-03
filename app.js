(function(){
    const items = document.querySelectorAll('[data-name]');
    const sections = document.querySelectorAll('.searchableSections');
    const searchInput = document.querySelector('#searchInput');

    function searchValue() {
        return searchInput.value.trim();
    }

    function strIncludedIn(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return b.indexOf(a) >= 0;
    }

    function doesMatch(item) {
        let userInput = searchValue();
        let itemValue = item.dataset.name;
        return strIncludedIn(userInput, itemValue);
    }

    function filterElements(item) {
        item.style.display = doesMatch(item) ? '' : 'none';
    }

    function filterItems() {
        Array.from(items).forEach(filterElements);
        Array.from(sections).map(function(section) {
           let sectionList = Array.from(section.querySelectorAll('[data-name]'));
           let showSection = sectionList.some(doesMatch);
            section.style.display = showSection ? '' : 'none';
        })


    }

    searchInput.addEventListener('input', filterItems);

})()