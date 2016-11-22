var gulp = require('gulp'),
    // sass         = require('gulp-sass'),
    browserSync = require('browser-sync'),
    plugins = require('gulp-load-plugins')(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    streamWatch = require('gulp-watch'),
    cssBeautify = require('gulp-cssbeautify');


// gulp.task('streamSass', function() {
//     return streamWatch('src/blocks/**/*.sass', function() {
//
//         gulp.src('src/blocks/**/*.sass')
//             .pipe(plugins.sass())
//             .pipe(concat('main.css'))
//             .pipe(gulp.dest('src/css'))
//             .pipe(browserSync.reload({
//                 stream: true
//             }));
//
//
//     });
// });

gulp.task('sass', function() {
    gulp.src('src/blocks/**/*.sass')
        .pipe(plugins.sass())
        .pipe(concat('main.css'))
        .pipe(cssBeautify())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

//
// function streamSass() {
//     gulp.src('src/blocks/**/*.sass')
//         .pipe(plugins.sass())
//         .pipe(concat('main.css'))
//         .pipe(gulp.dest('src/css'))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// }
//



//
// gulp.task('callback', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
//     return watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(gulp.dest('build'));
//     });
// });




//
// gulp.task('scripts', function() {
//     return gulp.src([
//             'src/libs/jquery/dist/jquery.min.js',
//             'src/libs/magnific-popup/dist/magnific-popup.min.js'
//         ])
//         .pipe(concat('libs.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('src/js'));
//
// });
//
// gulp.task('css-libs', ['sass'], function() {
//     return gulp.src('src/css/libs.css')
//         .pipe(cssnano())
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest('src/css'));
//
// });

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    })
});

gulp.task('clean', function() {
    return del.sync('dist');
});


gulp.task('watch', ['sass', 'browser-sync'], function() {
    gulp.watch('src/blocks/**/*.sass', {cwd: './'}, ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    // works!
    // streamWatch('src/blocks/**/*.sass')
    //     .pipe(streamSass());
    // streamWatch('src/blocks/**/*.sass', function() {
    //     gulp.start('sass');
    // });



    // .pipe(streamSass());
    // gulp.watch('src/**/*.js', browserSync.reload);
});





//
// gulp.task('build', ['clean', 'sass', 'scripts'], function() {
//     var buildCss = gulp.src([
//             'src/css/libs.css',
//             'src/css/main.css'
//         ])
//         .pipe(gulp.dest('dist/css'));
//
//
//     var buildFonts = gulp.src('src/fonts/**/*')
//         .pipe(gulp.dest('dist/fonts'));
//
//
//     var buildJs = gulp.src('src/js/**/*')
//         .pipe(gulp.dest('dist/js'));
//
//
//     var buildHtml = gulp.src('src/*.html')
//         .pipe(gulp.dest('dist'));
//
// });
