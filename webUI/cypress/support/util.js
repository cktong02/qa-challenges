module.exports = {
    setCookieToContentWindow: (
        contentWindow,
        name,
        value,
        { expireMinutes = 1 } = {},
    ) => {
        const date = new Date();
        const expireTime = expireMinutes * 60 * 1000;

        date.setTime(date.getTime() + expireTime);

        const assignment = `${name}=${encodeURIComponent(value)}`;
        const expires = `expires=${date.toGMTString()}`;
        const path = 'path=/';

        contentWindow.document.cookie = [assignment, expires, path].join(';');
    }
}