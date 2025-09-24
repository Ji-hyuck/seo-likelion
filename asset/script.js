document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

            // Close all other open answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
                    otherItem.querySelector('.faq-answer').style.padding = '0 20px';
                    otherItem.querySelector('.faq-toggle').textContent = '+';
                }
            });

            // Toggle the clicked item
            if (isOpen) {
                answer.style.maxHeight = '0px';
                answer.style.padding = '0 20px';
                toggle.textContent = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 20px 20px';
                toggle.textContent = '-';
            }
        });
    });
});