const fs = require('fs');
const {
    compress
} = require("compress-images/promise");


class HelperService {
    constructor() {}

    static async compressFunc(filepath, filename) {

        let destination = "comp";
        const result = await compress({
            source: filepath + filename,
            destination: filepath + destination,
            option: {
                compress_force: false,
                statistic: true,
                autoupdate: true
            },
            globoption: false,
            enginesSetup: {
                jpg: {
                    engine: "mozjpeg",
                    command: ["-quality", "60"]
                },
                jpeg: {
                    engine: "mozjpeg",
                    command: ["-quality", "60"]
                },
                png: {
                    engine: "pngquant",
                    command: ["--quality=20-50", "-o"]
                },
            },
        });
        fs.unlinkSync(filepath + filename);
        return destination
    }
}

module.exports = HelperService;