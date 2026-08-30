// Category Scrolling Functionality
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Content Loaded - Category Navigation Script Running');
    
    const viewport = document.querySelector('.category-viewport');
    const categoryList = document.querySelector('.category-list');
    const leftArrow = document.querySelector('.category-arrow.left');
    const rightArrow = document.querySelector('.category-arrow.right');

    console.log('Elements found:', {
        viewport: !!viewport,
        categoryList: !!categoryList,
        leftArrow: !!leftArrow,
        rightArrow: !!rightArrow
    });

    if (!viewport || !categoryList || !leftArrow || !rightArrow) {
        console.error('Category navigation elements not found');
        return;
    }

    console.log('Viewport dimensions:', {
        clientWidth: viewport.clientWidth,
        scrollWidth: viewport.scrollWidth,
        offsetWidth: viewport.offsetWidth
    });

    console.log('Category list dimensions:', {
        offsetWidth: categoryList.offsetWidth,
        clientWidth: categoryList.clientWidth
    });

    // Scroll so "Scam Guard" is initially visible/centered
    const categories = categoryList.querySelectorAll('.category');
    console.log('Number of categories:', categories.length);

    if (categories.length >= 3) {
        const activeCategory = categories[2];

        const scrollPosition =
            activeCategory.offsetLeft -
            (viewport.clientWidth / 2) +
            (activeCategory.offsetWidth / 2);

        console.log('Initial scroll position:', scrollPosition);
        viewport.scrollLeft = Math.max(0, scrollPosition);
        console.log('Viewport scrollLeft after initial set:', viewport.scrollLeft);
    }

    function scrollCategories(direction) {
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        const nextScroll = Math.max(
            0,
            Math.min(maxScroll, viewport.scrollLeft + direction * 150)
        );

        viewport.scrollTo({
            left: nextScroll,
            behavior: 'smooth'
        });
    }

    leftArrow.addEventListener('click', () => scrollCategories(-1));
    rightArrow.addEventListener('click', () => scrollCategories(1));
});

// Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion__header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other panels
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherHeader.nextElementSibling.classList.remove('open');
                }
            });

            // Toggle current panel
            this.setAttribute('aria-expanded', !isExpanded);
            panel.classList.toggle('open');
        });
    });

    // Footer Accordion Functionality
    const footerAccordionHeaders = document.querySelectorAll('.footer-accordion-header');

    footerAccordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other footer panels
            footerAccordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherHeader.nextElementSibling.classList.remove('open');
                }
            });

            // Toggle current panel
            this.setAttribute('aria-expanded', !isExpanded);
            panel.classList.toggle('open');
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});