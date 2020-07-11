import sass from 'node-sass';
import fs from 'fs';

export const buildCSS = () => {
    fs.readFile('./src/scss/index.scss', 'utf8', (err, styles) => {
        if (err) console.log('err:', err)
        const result = sass.renderSync({
            data: styles
        });

        fs.writeFile('./dist/css/index.css', result.css, (err) => {
            if (err) throw err;
            console.log('The css file has been saved!');
        });
    })
}
