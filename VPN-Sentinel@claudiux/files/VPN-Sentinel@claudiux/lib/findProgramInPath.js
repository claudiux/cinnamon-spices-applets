const GLib = imports.gi.GLib;
const Cinnamon = imports.gi.Cinnamon;
const Util = imports.misc.util;
const Extension = imports.ui.extension;

var find_program_in_path = (programName, varName) => {
    findProgramViaWhich(programName, (path) => {
        varName = path;
    });
}

var findProgramViaWhich = (programName, callback) => {
    const command = "which " + programName;
    Util.spawn_async(["which", programName, "2>/dev/null"], (stdout) => {
        var cleanPath = stdout ? stdout.trim().split("\n")[0] : "";
        if (callback) {
                callback(cleanPath.length > 0 ? cleanPath : null);
        }
    });
}

if (!Extension.getCurrentExtension) {
    module.exports = { find_program_in_path, findProgramViaWhich };
}
