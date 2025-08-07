
const lastXDays = (x, label) => {
    const currentDate = new Date();
    const DAY = 24 * 60 * 60 * 1000;
    const date = new Date(currentDate - x * DAY); 
    const dateString = date.toISOString().slice(0, 10);
    return ({
        value: dateString,
        label: label
    })
}

const getDateInputOptions = () => {
    const recentDateOptions = [
        lastXDays(1, "Last 24h"), 
        lastXDays(7, "Past Week"), 
        lastXDays(30, "Past Month"), 
        lastXDays(365, "Past Year"),
        lastXDays(5 * 365, "Last 5 Years"),
    ];
    return recentDateOptions;
}

const dateInputOptions = getDateInputOptions();

export {dateInputOptions};