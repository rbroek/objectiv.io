export function addTimeoutToPromise(promise, timeout) {
    let timeoutId;
    return new Promise((resolve, reject) => {
        timeoutId = window.setTimeout(() => reject(new Error('timeout')), timeout);
        promise
            .then((...args) => {
            clearTimeout(timeoutId);
            resolve(...args);
        })
            .catch((error) => reject(error));
    });
}
//# sourceMappingURL=addTimeoutToPromise.js.map