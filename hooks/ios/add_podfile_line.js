module.exports = function(ctx) {
    var fs = require('fs');
    var path = require('path');

    var podfilePath = path.join(ctx.opts.projectRoot, 'platforms', 'ios', 'Podfile');
    var podLine = "pod 'UAEPassClient', :path => 'www/UAEPassClient'";

    if (fs.existsSync(podfilePath)) {
        var podfileContent = fs.readFileSync(podfilePath, 'utf8');
        if (!podfileContent.includes(podLine)) {
            fs.appendFileSync(podfilePath, podLine + "\n");
        }
    }
};
