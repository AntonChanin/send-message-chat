export function typing(text: string, selector = '.out') {
    let line = 0;
    let count = 0;
    let out = '';
    let ref = document.querySelector(selector);

    function typeLine() {
        let interval = setTimeout(function() {
            out += text[line][count];
            if (ref) ref.innerHTML = `${out} |`;
            count += 1;

            if (count >= text[line].length) {
                count = 0;
                line += 1;
                if (line === text.length) {
                    clearTimeout(interval);
                    if (ref) ref.innerHTML = out;
                    return true;
                }
            }
            typeLine();
        }, getRandomInt(getRandomInt(350 * 3)))
    }

    typeLine();
}

function getRandomInt(max: number) {
    return  Math.floor(Math.random() * Math.floor(max))
}