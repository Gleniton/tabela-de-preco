module.exports = function(value) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
}