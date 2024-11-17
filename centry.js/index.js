export function centry(startFunc) {
    try {
        window.addEventListener("error", (event) => {
            console.log(`send error to email: error: "${event.error}", filename: ${event.filename}, colno: ${event.colno}, lineno: ${event.lineno}`);
        });
        startFunc();
    } catch (err) {
        console.log(`send error to email: error: "${err}", stack: ${err.stack}`);
    }
}