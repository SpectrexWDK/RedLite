function calculateTimePassed(startDate) {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)) % 12;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30.44;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return { years, months, days, hours, minutes, seconds };
}

function updateTimer() {
    const startDate = new Date('2024-07-30T16:55:00'); // Замените на вашу начальную дату
    const timePassed = calculateTimePassed(startDate);

    document.getElementById('years').textContent = Math.floor(timePassed.years);   
    document.getElementById('months').textContent = Math.floor(timePassed.months);
    document.getElementById('days').textContent = Math.floor(timePassed.days);  
    document.getElementById('hours').textContent = Math.floor(timePassed.hours) ;   
    document.getElementById('minutes').textContent = Math.floor(timePassed.minutes);
    document.getElementById('seconds').textContent = Math.floor(timePassed.seconds);
}

setInterval(updateTimer, 1000); // Обновляем таймер каждую секунду
