const getHiddenCard = (cardNumber, starsCount = 4) => {
    const visibleDigitsLine = cardNumber.slice(12);
    return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
};

const getHiddenCard2 = (card, length = 4) => {
    const hidecard = "*".repeat(length);
    const getHiddenCard = card.slice(-4);
    return hidecard + getHiddenCard
}