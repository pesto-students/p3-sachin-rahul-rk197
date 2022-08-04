const doTask1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('task 1 executed');
        }, 2000);
    })
};

const doTask2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('task 2 executed');
        }, 4000);
    })
};

const doTask3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('task 3 executed');
        }, 6000);
    })
};

const aw = async () => {
    try {
        const response1 = await doTask1();
        console.log(response1);
        const response2 = await doTask2();
        console.log(response2);
        const response3 = await doTask3();
        console.log(response3);
    } catch (err) {
        console.error('error:', err);
    } finally {
        console.info('done');
    }
};

aw();

// Sample Output:
// task 1
// task 2
// task 3
// done
 


function* generator() {
    yield doTask1().then(res => console.log(res)).catch(err => console.err(err));
    yield doTask2().then(res => console.log(res)).catch(err => console.err(err));
    yield doTask3().then(res => console.log(res)).catch(err => console.err(err));
    return { done: true };
};

const gen = generator();
gen.next();
gen.next();
gen.next();

// Sample Output:
// task 3
// task 3 done
// task 1
// task 1 done
// task 2
// task 2 done