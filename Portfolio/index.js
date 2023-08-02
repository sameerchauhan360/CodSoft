const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        }
        else {
            entry.target.classList.remove('show-animate');
        }

    })
})
const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach(el => observer.observe(el));
