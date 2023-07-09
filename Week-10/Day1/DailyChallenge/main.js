const largeNumber = 356;

module.exports = largeNumber;

function getCurrentDateTime() {
    const currentData = new Date();
    return currentData.toLocaleString();
}

module.exports = getCurrentDateTime;