
module.exports = function(ctx) {
    var fs = require('fs');
    var path = require('path');

    var podfilePath = path.join(ctx.opts.projectRoot, 'platforms', 'ios', 'Podfile');
    var podLine = "pod 'UAEPassClient', :path => 'www/UAEPassClient'";

    if (fs.existsSync(podfilePath)) {
        var podfileContent = fs.readFileSync(podfilePath, 'utf8');
        console.log("podfileContent --- "+podfileContent);
        // Look for the target block to inject your pod dependency
        var targetBlock = /project 'GEMS Connect.xcodeproj'/g;
        if (targetBlock.test(podfileContent) && !podfileContent.includes(podLine)) {
            podfileContent = podfileContent.replace(targetBlock, `$&\n  ${podLine}`);
            fs.writeFileSync(podfilePath, podfileContent, 'utf8');
        }
                console.log("newpodfileContent --- "+podfileContent);
    }
};
