document.addEventListener('DOMContentLoaded', () => {
    const changeFontBtn = document.getElementById('changeFontBtn');
    const changeBgColorBtn = document.getElementById('changeBgColorBtn');
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    const infoBtn = document.getElementById('infoBtn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementsByClassName('close-btn')[0];

    const quotes = [
        '"Peace comes from within. Do not seek it without." - Buddha',
        '"The mind is everything. What you think you become." - Buddha',
        '"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." - Buddha',
        '"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship." - Buddha'
    ];

    let currentFont = 0;
    const fonts = ['Courier New', 'Georgia', 'Verdana', 'Times New Roman'];

    changeFontBtn.addEventListener('click', () => {
        currentFont = (currentFont + 1) % fonts.length;
        document.getElementById('quote').style.fontFamily = fonts[currentFont];
    });

    changeBgColorBtn.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });

    newQuoteBtn.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quote').innerText = randomQuote;
    });

    infoBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
