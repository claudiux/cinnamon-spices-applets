### v3.5.0~20250629
  * Add option: Ignore Youtube features.

###  v3.4.4~20250422
  * Bugfix: Fixes [#7074](https://github.com/linuxmint/cinnamon-spices-applets/issues/7074).

### v3.4.3~20250419
  * Improves responsiveness.

### v3.4.2~20250416
  * Bugfix: Fixes [#7074](https://github.com/linuxmint/cinnamon-spices-applets/issues/7074).

### v3.4.1~20250415
  * Make certain tasks asynchronous to avoid blockages.
  * Context menu: Submenu 'Configure...' allowing direct access to each settings tab.

### v3.4.0~20250415
  * The default icon color is now determined by the theme used.
  * Code cleanup.

### v3.3.1~20250413
  * The “Try to download it from YT” menu option works again.
  * Fixes #7055.
  

### v3.3.0~20250408
  * Improved album art download.

### v3.2.0~20250403
  * Can transfer Artist and Title to AlbumArt3.0 desklet.

### v3.1.2~20250330
  * Improved Alarm-Clock settings.
  * Changes in server list.

### v3.1.1~20250325
  * Added 'Wake me up!' switch in context menu.

### v3.1.0~20250321
  * Wake up with Radio 3.0.
  * New tab Alarm Clock in settings.
  * New option "Configure the Alarm Clock..." in context menu.
  * README.md file updated.
  * New sentences to translate.

### v3.0.0~20250313
  * Now works with the version 2.0.0 of the AlbumArt3.0 applet.

### v2.9.0~20250305
  * Vertical maximization of the Settings Window becomes optional.
  * Fixes #6955.

### v2.8.3~20250302
  * Improved tooltip management.

### v2.8.2~20250218
  * Improved tooltip layout.

### v2.8.1~20250217
  * Updates the sample station list.

### v2.8.0~20250217
  * New option to load a sample station list when there is no station in the list.
  * Some minor changes.

### v2.7.8~20250205
  * Improves applet startup.

### v2.7.7~20250204
  * Code improvement.

### v2.7.4~20250116
  * mainloopTools library: improvements.

### v2.7.3~20250114
  * Increases the size of the stream buffer for improved listening comfort.
  * Settings: Sets the default value for each multimedia key bind.

### v2.7.2~20250112
  * Now the desklet uses the mainloopTools library.
  * Minor bugfixes.

### v2.7.1~20250111
  * Improved management of loops.
  * Improved management of desklet.

### v2.7.0~20250107
  * You can choose the Quality of the downloaded album cover.
  * Desklet AlbumArt3.0: New option in context menu to display the Album Art at full size. Middle-clicking on the desklet does the same.
  * Bufixes in applet and in desklet.

### v2.6.1~20250106
  * Fixes desklet issue for Cinnamon 6.0.

### v2.6.0~20250106
  * Improved functioning (start-up).

### v2.5.11~20250105
  * Improved functioning.

### v2.5.10~20250101
  * Better monitoring of files and directories.

### v2.5.9~20241231
  * Album Art 3.0 becomes faster.
  * Bugfixes.

### v2.5.8~20241230
  * Album Art 3.0 settings now accessible via the applet context menu.

### v2.5.7~20241228
  * New management of desklet displaying Album Art. Use context menu to show it.
  * Better management of signals.
  * No error reloading this applet.

### v2.5.6~20241227
  * No error at start-up. Fixes a nasty bug!

### v2.5.5~20241226
  * Minor bugfixes.

### v2.5.4~20241225
  * Fixed context menu bugs.
  * Fixed desklet bugs.

### v2.5.3~20241220
  * Fixed menu bugs (when the Category list is beside the Radio Station list).


### v2.5.2~20241219
  * Improved menu behavior. The menu no longer closes when you switch from the station list to the category list.
  * Some bugfixes, also in desklet.

### v2.5.1~20241217
  * Fixes #6689.
  * Improved menu display.
  * Reintroduces the "Display the Station list beside the Category list" option.
  * If this option is not checked, the first category is not ♥︎.
  * Favorite stations are marked with a ♥︎ in the menu.

### v2.5.0~20241215
  * You can now set/unset favorite radio stations by clicking on ♥︎ in the menu while listening to them.
  * The first category you see is ♥︎.
  * Stations are displayed beside their category. (Forced.)

### v2.4.0~20241212
  * You can now import your stations from Radio++ if you use it. See Import tab in settings.

### v2.3.3~20241205
  * Clicking on the Album Art desklet updates the image.

### v2.3.2~20241203
  * Redesigned context menu.

### v2.3.1~20241201
  * Adds an optional fade effect to the Album Art. See the Behavior tab of this applet settings.

### v2.3.0~20241129
  * Adds the ability to display on desktop the Album (or Song) Art.
  * Solves the problem with pulseaudio/pipewire.

### v2.2.3~20241119
  * Fixes #6583: Remove dummy device.
  * Updates version number.

### v2.2.2~20241114
  * Soup2/Soup3: better detection.

### v2.2.1~20241109
  * Fixes a dependency error about pulseaudio/pipewire on LM.

### v2.2.0~20241107
  * Now can display Radio name and Song title on horizontal panels.

### v2.1.4~20241012
  * Fixes an OSD error.

### v2.1.3~20240913
  * Now the "unassigned" word can be translated. See #6415.

### v2.1.2~20240731
  * Adds "Easy Effects" entry in context menu when easyeffects is present.
  * To install easyeffects (for pipewire): `apt install easyeffects calf-plugins`

### v2.1.1~20240609
  * Prevents Cvc.MixerControl from being executed more than once.

### v2.1.0~20240519
  * Improves the installation of dependencies.

### v2.0.4~20240517
  * Downloaded covers are now of high quality.

### v2.0.3~20240512
  * Correctly determines the category of a recently listened-to radio station.

### v2.0.2~20240503
  * Stores and displays the Category of the last radio station listened to in the new menu.

### v2.0.1~20240502
  * In the menu, each category indicates the number of stations it contains.

### v2.0.0~20240501
  * Added an option to display the category list alongside the radio station list in the menu.
  * New screenshot.
  * New .pot file.
  * Updated fr.po file.

### v1.19.0~20240402
  * Adds two options:
    - Whether or not to show the sound volume OSD when changing radio station.
    - Whether or not to magnetize all multiples of 25% of the sound volume.

### v1.18.0~20240328
  * Radio3.0@claudiux can now receive commands from the sound150@claudiux applet.


### v1.17.8~20240313
  * BugFixes about ZettaLite data.

### v1.17.7~20240311
  * Take into account XML data from ZettaLite to get Artist and Title.

### v1.17.6~20240310
  * Fixes #5571.
  * OSD now shows the real volume level at startup.

### v1.17.5~20240306
  * Modifies the Recordings tab in settings, adding a button to open the Recordings folder.

### v1.17.4~20240306
  * Prevents multiple identical entries in recently listened-to stations.

### v1.17.3~20240305
  * Remove error messages about St.Button.

### v1.17.2~20240304
  * Now compatible with the Horizontal OSD extension.

### v1.17.1~20240304
  * Better manage song art.

### v1.17.0~20240225
  * Create the cover of the song broadcast by Radio3.0@claudiux as soon as possible, so that it can be displayed by the [sound150@claudiux applet](https://cinnamon-spices.linuxmint.com/applets/view/306).

### v1.16.1~20240214
  * Slight improvements in settings and context menu.

### v1.16.0~20240214
  * Bugfixes.

### v1.15.3~20240211
  * Minor changes in settings (Network tab).

### v1.15.2~20240210
  * Added the ability to choose a favorite database to search for radio stations.

### v1.15.1~20240201
  * Reverses certain modifications because of the risk of data loss.
  * Code cleanup.

### v1.15.0~20240130
  * Try to minimize disk writes.
  * Uses class instead of prototype.

### v1.14.0~20240120
  * Improves sub-processes.
  * Adds a button "Open the recordings folder" in YT tab (in this applet settings).

### v1.13.0~20231224
  * Fixes #5246. Display of volume level near icon and fixes scrolling problems with Cinnamon prior to 5.1.

### v1.12.0~20231216
  * Added an option (in the context menu) to display the volume level near the icon.
  * Updated .pot file for translations.
  * Updated fr.po file - French translation.

### v1.11.3~20231210
  * Minor bugfixes. Maybe fixes #5201.

### v1.11.2~20231130
  * Updates context menu, screenshot, README and MANUAL

### v1.11.1~20231128
  * Moves the "Do not check dependencies" option from the Settings Behavior tab to the context menu. This avoids error messages.

### v1.11.0~20231128
  * Fixes dependency issues.
  * Option "Do not check about dependencies" works fine now.

### v1.10.1~20231126
  * Remove libmpv1 or libmpv2 dependency for LM and Debian.

### v1.10.0~20231126
  * Added the ability to swap artist and song title for certain radio stations.

### v1.9.1~20231115
  * Fixes #5097 and removes mpv-mpris for versions of distros that do not have the right package.

### v1.9.0~20231115
  * Change location of yt-dlp program: from `~/bin/` to `~/.local/bin/`.
  * Fedora (Cinnamon 5.8 and more): use pipewire packages.
  * (Pipewire will be used in other distros, when available, in a next version of Radio3.0.)

### v1.8.1~20231110
  * Updated dependencies.js for Soup3 - Bugfix.

### v1.8.0~20231108
  * Updated dependencies.js for Soup3.

### v1.7.0~20231014
  * Try distinguishing artist and song name in tooltip.

### v1.6.0~20231004
  * More than 300 radio stations in Radio3.0_EXAMPLES.json!

### v1.5.0~20230722
  * New icon. Author: @Hilyxx

### v1.4.2~20230718
  * Add mpv-mpris to dependencies.
### v1.4.1~20230613
  * Minor bugfix for Cinnamon 5.8.

### v1.4.0~20230526
  * Now able to display the station logo, if it exists. The user can choose to display it or not, in the contextual menu.
  * Some bugfixes.

### v1.3.0~20230516
  * Now compatible with Soup 3.
  * Fixes a bug in notifications management.
  * Fixes a bug in OSD display.

### v1.2.3~20230429
  * Update lib/checkDependencies.js (bugfix)

### v1.2.2~20230424
  * Volume scrolling is now in the same direction as Cinnamon.

### v1.2.1~20230401
  * Now compatible with OpenSUSE.

### v1.2.0~20230328
  * Adds ability to show OSD while changing volume.

### v1.1.0~20230307
  * Adds ability to keep YT video.

### v1.0.3~20230220
  * Now checks if the yt-dlp program is well present in ~/bin, and loads the latest version.

### v1.0.2~20230201
  * Add ability to use translated help.
  * Update list of dependencies.

### v1.0.1~20221221
  * Now compatible with fresh install of Linux Mint 21.1.

### v1.0.0~20221113
  * Fully functional.
  * Allows the user to create its own list of web radio stations from free databases, from directories such as ShoutCast or importing files usually used by music-readers.
  * Also, the user can record a music or radio show (directly or programming it).
  * This applet also can extract soundtracks from a YT video or playlist.
