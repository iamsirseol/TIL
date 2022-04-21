const { throwErr } = require('./fn');
const fn = require('./fn');


describe('part1', () => {
    test ('이름! 나이!', () => {
        expect(fn.makeUser('Mike', 30)).toEqual({
            name: 'Mike',
            age: 30,
        });
      });
    
    
    test ('이름! 나이!', () => {
        expect(fn.makeUser('Mike', 30, 'male')).toStrictEqual({
            name: 'Mike',
            age: 30,
            gender: 'male',
        });
      });
    
    
    // toBeNull
    // toBeUndefined
    // toBeDefined
    test ('null is null', () => {
        expect(null).toBeNull();
    });
    
    // toBeTruthy
    // toBeFalsy
    test ('0 is falsy', () => {
        expect(fn.add(1, -1)).toBeFalsy();
    });
    test ('string is truthy', () => {
        expect(fn.add('Hello', 'world')).toBeTruthy();
    });
    
    // toBeGreatherThan
    // toBeGreatherThanOrEqual
    // toBeLessThan
    // toBeLessThanOrEqual
    test ('ID는 10자 이하', () => {
        const id = 'study';
        expect(id.length).toBeLessThanOrEqual(10);
    });
    
    // test('0.1 + 0.2 = 0.3', () => {
    //     expect(fn.add(0.1, 0.2)).toBe(0.3); // 2진법으로 계산하기때문에 0.30000000000000004의 값이 나옴.
    // });
    test ('0.1 + 0.2 = 0.3', () => {
        expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
    
    test ('Hello World에 H(h)가 있나?', () => {
        expect('Hello World').toMatch(/h/i); // i가 있으면 대소구분 x
    });
    
    test ('Mike가 있나?', () => {
        const user = 'Mike';
        const userList = ['Tom', 'Mike', 'Dev'];
        expect(userList).toContain(user);
    });
    
    test ('error?', () => {
        expect(() => throwErr()).toThrow('xxx');
    });
    test ('error??', () => {
        expect(fn.throwErr()).toThrow('xxx');
    });
    test ('3초 후에 내 이름', (done) => {
        function callback(name) {
            try {
                expect(name).toBe('Dong');
                done();
            } catch (error) {
                done();
            }
        }
        fn.getName(callback);
    });
    
    test ('1 + 1은 2', () => {
        expect(fn.add(1, 1)).toBe(2);
    });
    
    test ('3초 후에 내 나이', async () => {
        // return fn.getAge().then(age => {
        //     expect(age).toBe(31);
        // });
        await expect(fn.getAge()).resolves.toBe(31);
    });
    
    test ('3초 후에 내 나이', async () => {
        const age = await fn.getAge();
        expect(age).toBe(31);
    });
});

describe('part2', () => {
    let num = 10;

    beforeEach(() => { // 각 test 전에 실행
        num = 0; // let num = 10으로 해주어도 상관없음.
    });

    // afterEach(() => { // 각 test 후에 실행
    //     num = 0;
    // });

    it ('0 + 1 = 1', () => {
        num = fn.add(num, 1);
        expect(num).toBe(1);
    });

    it ('0 + 2 = 2', () => {
        num = fn.add(num, 2);
        expect(num).toBe(2);
    });

    it ('0 + 3 = 3', () => {
        num = fn.add(num, 3);
        expect(num).toBe(3);
    });

    // it('will fail every time', () => {
    //     const user = {
    //       createdAt: new Date(),
    //       id: Math.floor(Math.random() * 20),
    //       name: 'LeBron James',
    //     };
      
    //     expect(user).toMatchSnapshot();
    //   });
    
    test.only('this will be the only test that runs', () => { // 하나의 테스트만 실행할 경우 사용
        expect(true).toBe(true);
      });
      
      test('this test will not run', () => {
        expect('A').toBe('A');
      });
});

