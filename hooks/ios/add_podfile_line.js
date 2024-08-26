module.exports = function(ctx) {
    var fs = require('fs');
    var path = require('path');

    var podfilePath = path.join(ctx.opts.projectRoot, 'platforms', 'ios', 'Podfile');
    var podLine = "pod 'UAEPassClient', :path => 'www/UAEPassClient'";

    if (fs.existsSync(podfilePath)) {
        var podfileContent = fs.readFileSync(podfilePath, 'utf8');
        console.log("podfileContent --- "+podfileContent);
        if (!podfileContent.includes(podLine)) {
            fs.appendFileSync(podfilePath, "\n"+podLine + "\n");
            console.log("new podfileContent --- "+podLine);
        }
        console.log("newpodfileContent --- "+podfileContent);
    }
};
