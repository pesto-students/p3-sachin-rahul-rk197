function memoize(fun) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        console.log(cache, key);
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fun(...args));
        return cache.get(key);
    }
}

function add(a, b) {
    console.log(a,b);
    return a + b;
}

const memoizeTime = function (fn) {
    console.time();
    fn()
    console.timeEnd();
}

const memoizeAdd = memoize(add)

memoizeTime(() => memoizeAdd(100, 100));
memoizeTime(() => memoizeAdd(900, 9000));
memoizeTime(() => memoizeAdd(100, 200));
memoizeTime(() => memoizeAdd(100, 100));