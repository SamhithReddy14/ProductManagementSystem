const ctaButton = document.getElementById('ctaButton');
const responseMessage = document.getElementById('responseMessage');
let clickCount = 0;

ctaButton.addEventListener('click', function() {
    clickCount++;
    responseMessage.textContent = `✓ You're ready to get started! (Clicks: ${clickCount})`;
    responseMessage.classList.add('show');

    this.textContent = 'Loading...';
    this.disabled = true;

    setTimeout(() => {
        this.textContent = 'Get Started Now';
        this.disabled = false;
        responseMessage.classList.remove('show');
    }, 2000);
});
