call cordova clean android 
call cordova build android --release 
call jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ezmarket.keystore D:\projects\web2app\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk ezmarket 
call zipalign -v 4 D:\projects\web2app\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk D:\projects\web2app\platforms\android\app\build\outputs\apk\release\rmarket.apk