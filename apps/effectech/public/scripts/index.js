/** @format */

/* cSpell:disable */

/* eslint-disable func-names -- 3rd party script */
/* eslint-disable no-console -- 3rd party script */
(function () {
    if (typeof window !== 'undefined') {
        const { head } = document;
        setTimeout(() => {
            const googleScript = document.createElement('script');
            googleScript.setAttribute('src', '/scripts/google.js');
            head.appendChild(googleScript);
        }, 1000);
        setTimeout(() => {
            const hjScript = document.createElement('script');
            hjScript.setAttribute('src', '/scripts/hotjar.js');
            head.appendChild(hjScript);
        }, 1200);
    }
})();
