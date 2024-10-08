//process глобально доступный объект

//pid
//console.log(process.pid) // возвращает id процесса, его так же можно найти в диспетчере задач во кладке "Подробности"

// while (true) {
//
// }

//env - переменные окружения, их можно указывать в конфигурационных файлах, отдельные переменные можно указывать при запуске приложения
//при конфигурации Docker контейнера
//console.log(process.env);

// let env_object = {
//     USERDOMAIN_ROAMINGPROFILE: 'COMPUTER',
//     PROCESSOR_LEVEL: '6',
//     NVM_SYMLINK: 'C:\\Program Files\\nodejs',
//     SESSIONNAME: 'Console',
//     ALLUSERSPROFILE: 'C:\\ProgramData',
//     PROCESSOR_ARCHITECTURE: 'AMD64',
//     GATEWAY_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\gateway.vmoptions',
//     PSModulePath: 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\Wired Networking\\',
//     SystemDrive: 'C:',
//     RIDER_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\rider.vmoptions',
//     USERNAME: 'Slipbang',
//     DEVECOSTUDIO_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\devecostudio.vmoptions',
//     STUDIO_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\studio.vmoptions',
//     'ProgramFiles(x86)': 'C:\\Program Files (x86)',
//     GPU_USE_SYNC_OBJECTS: '1',
//     GPU_MAX_ALLOC_PERCENT: '100',
//     FPS_BROWSER_USER_PROFILE_STRING: 'Default',
//     PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW',
//     APPCODE_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\appcode.vmoptions',
//     DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
//     ProgramData: 'C:\\ProgramData',
//     DATASPELL_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\dataspell.vmoptions',
//     ProgramW6432: 'C:\\Program Files',
//     HOMEPATH: '\\Users\\Slipbang',
//     PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 158 Stepping 13, GenuineIntel',
//     ProgramFiles: 'C:\\Program Files',
//     PUBLIC: 'C:\\Users\\Public',
//     windir: 'C:\\WINDOWS',
//     GPU_MAX_HEAP_SIZE: '100',
//     DATAGRIP_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\datagrip.vmoptions',
//     LOCALAPPDATA: 'C:\\Users\\Slipbang\\AppData\\Local',
//     ChocolateyLastPathUpdate: '133193147669235416',
//     GPU_SINGLE_ALLOC_PERCENT: '100',
//     USERDOMAIN: 'COMPUTER',
//     GPU_FORCE_64BIT_PTR: '0',
//     WEBSTORM_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\webstorm.vmoptions',
//     LOGONSERVER: '\\\\COMPUTER',
//     PYCHARM_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\pycharm.vmoptions',
//     FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
//     CLION_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\clion.vmoptions',
//     JETBRAINSCLIENT_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\jetbrainsclient.vmoptions',
//     GOLAND_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\goland.vmoptions',
//     OneDrive: 'C:\\Users\\Slipbang\\OneDrive',
//     APPDATA: 'C:\\Users\\Slipbang\\AppData\\Roaming',
//     VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: '1',
//     IDEA_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\idea.vmoptions',
//     RUBYMINE_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\rubymine.vmoptions',
//     ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
//     JETBRAINS_CLIENT_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\jetbrains_client.vmoptions',
//     CommonProgramFiles: 'C:\\Program Files\\Common Files',
//     Path: 'C:\\Python311\\Scripts\\;C:\\Python311\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\ProgramData\\chocolatey\\bin;C:\\Users\\Slipbang\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\Git\\cmd;C:\\Users\\Slipbang\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Slipbang\\AppData\\Roaming\\npm;C:\
// \Users\\Slipbang\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\Slipbang\\AppData\\Local\\GitHubDesktop\\bin',
//     OS: 'Windows_NT',
//     COMPUTERNAME: 'COMPUTER',
//     NVM_HOME: 'C:\\Users\\Slipbang\\AppData\\Roaming\\nvm',
//     PROCESSOR_REVISION: '9e0d',
//     CommonProgramW6432: 'C:\\Program Files\\Common Files',
//     ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
//     TEMP: 'C:\\Users\\Slipbang\\AppData\\Local\\Temp',
//     SystemRoot: 'C:\\WINDOWS',
//     WEBIDE_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\webide.vmoptions',
//     HOMEDRIVE: 'C:',
//     USERPROFILE: 'C:\\Users\\Slipbang',
//     TMP: 'C:\\Users\\Slipbang\\AppData\\Local\\Temp',
//     'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
//     NUMBER_OF_PROCESSORS: '6',
//     PHPSTORM_VM_OPTIONS: 'C:\\jetbra\\vmoptions\\phpstorm.vmoptions',
//     IDEA_INITIAL_DIRECTORY: 'C:\\Users\\Slipbang\\Desktop'
// }

// // важные конфигурационные переменные объекта process.env:
// const dotenv = require('dotenv'); // для чтения файла ".env" требуется установить модуль dotenv!!! и конфигурировать как в этом коде.
// dotenv.config();
//
// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);

//argv возвращает массив с командами которые мы можем выполнять при запуске файла
//console.log(process.argv);
// node process.js command1 command2 command3 command4
// const commands = [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\Slipbang\\Desktop\\node JS\\process.js',
//     'command1',
//     'command2',
//     'command3',
//     'command4'
// ]


