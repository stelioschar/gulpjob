
/**
 * Watchers
 */

var watch = function(){
    gulp.task('default', function () {
        // Build
        gulp.start('build');

        // SCSS
        gulp.watch(basePaths.dist + 'src/sass/**/*.scss', ['scss']).on('change', function (evt) {
            changeEvent(evt)
        });
        ;
        // Sprites
        gulp.watch(basePaths.dist + 'img/icons/*.png', ['sprites', 'rename_sprites', 'clean']).on('change', function (evt) {
            changeEvent(evt)
        });
        ;
        // JS
        gulp.watch(basePaths.dist + 'src/js/**/*.js', ['js']).on('change', function (evt) {
            changeEvent(evt)
        });
        ;
    });
};

module.exports = watch;