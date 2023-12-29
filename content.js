(async function (console) {
    'use strict';
    /**
     * Since the console.log doesn't respond to the `display` style,
     * setting a width and height has no effect. In fact, the only styles
     * I've found it responds to is font-size, background-image and color.
     * To combat the image repeating, we have to get a create a font bounding
     * box so to speak with the unicode box characters. EDIT: See Readme.md
     *
     * @param  {int} width  The height of the box
     * @param  {int} height The width of the box
     * @return {object}     {string, css}
     */
    function getBox(width, height) {
        return {
            string: '+',
            style:
                'font-size: 1px; padding: ' +
                Math.floor(height / 2) +
                'px ' +
                Math.floor(width / 2) +
                'px; line-height: ' +
                height +
                'px;',
        };
    }

    /**
     * Display an image in the console.
     * @param  {string} url The url of the image.
     * @param  {int} scale Scale factor on the image
     * @return {null}
     */
    function image(url, scale) {
        scale = scale || 1;
        var img = new Image();

        img.onload = function () {
            var dim = getBox(this.width * scale, (this.height * scale) / 2);
            console.log(
                '%c' + dim.string,
                dim.style +
                    'background: url(' +
                    url +
                    '); background-size: ' +
                    this.width * scale +
                    'px ' +
                    this.height * scale +
                    'px; color: transparent;',
            );
        };

        img.src = url;
    }

    function bruhdy() {
        const bruhdy =
            'data:image/webp;base64,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';

        image(bruhdy);
    }

    console.log(
        '%cBruhdy Ready!',
        'color: #2160ec; font-size: 32px; font-weight: bold;',
    );

    bruhdy();
})(console);

function nuke() {
    document.write();
}

function bruhdy() {
    document.write(
        '<img src="data:image/webp;base64,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" />',
    );
}

// Only enable if you enjoy pain/jumpscares
// if (Math.random() < 0.01) {
//     setTimeout(bruhdy);
// }
