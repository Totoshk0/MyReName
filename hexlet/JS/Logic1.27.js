const isInternationalPhone2 = (PhoneNumber) => {
    const Phoneslice = PhoneNumber.slice(0, 1);
    return Phoneslice === "+";
};

const isInternationalPhone = (phone) => phone[0] === '+';