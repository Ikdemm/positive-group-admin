const ACTIVATION_FEE = 5;
const BONUS_PERCENTAGE = 0.05;
const ACTIVATION_BONUS = ACTIVATION_FEE * BONUS_PERCENTAGE;
const BONUS_LEVELS = 10


// Initial Response for BonusTree
let INITIAL_BONUS_TREE = {}

for (let i = 1; i <= BONUS_LEVELS; i++) {
    INITIAL_BONUS_TREE[`level${i}Invitees`] = []
}

module.exports = {
    ACTIVATION_FEE,
    BONUS_PERCENTAGE,
    ACTIVATION_BONUS,
    INITIAL_BONUS_TREE
}