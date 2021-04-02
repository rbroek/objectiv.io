export function documentLoaded(document = window.document) {
    return new Promise((resolve) => {
        if (document.readyState !== 'loading') {
            resolve();
        }
        else {
            document.addEventListener('DOMContentLoaded', () => resolve());
        }
    });
}
//# sourceMappingURL=documentLoaded.js.map