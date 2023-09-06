function pow (base, exp) {
    if(!(typeof base === 'number') || !(typeof exp === 'number')) {
        throw new TypeError('the value should have type \'number\'.');
    }

    if(!Number.isInteger(base)) {
        throw new TypeError('the value should be integer.');
    }

    if(exp < 0) {
        throw new RangeError('the exp shoud be a positive number.');
    }

    return Math.pow(base, exp);
}

// typeError
try {
    console.log (pow ('eee', 2));
} catch (err) {
    console.log(err);
}

// typeError 2
try {
    console.log (pow (0.5, 2));
} catch (err) {
    console.log(err);
}

// rangeError
try {
    console.log (pow (3, -2));
} catch (err) {
    console.log(err);
}

// ok
try {
    console.log (pow (3, 2));
} catch (err) {
    console.log(err);
}

try {
    console.log (pow (-3, 3));
} catch (err) {
    console.log(err);
}