const fn = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age, gender) => ({ name, age, gender }),
    throwErr: () => {
        throw new Error('xxx');
    },
    getName: callback => {
        const name = 'Dong';
        setTimeout(() => {
            callback(name);
            // throw new Error('xxxxxx');
        }, 3000);
    },
    getAge: () => {
        const age = 31;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(age);
            }, 3000);
        });
    },
};

module.exports = fn;