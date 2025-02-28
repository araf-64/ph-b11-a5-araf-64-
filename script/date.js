function updateDate() {
    const now = new Date();
    
    const day = now.toLocaleDateString(undefined, { weekday: 'long' });
    document.getElementById('day').innerText = day;
    const date = now.getDate();
    document.getElementById('date').innerText = date;
    const month = now.toLocaleDateString(undefined, { month: 'short' });
    document.getElementById('month').innerText = month;
    const year = now.getFullYear();
    document.getElementById('year').innerText = year;
}

updateDate();