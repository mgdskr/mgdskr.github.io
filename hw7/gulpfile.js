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
    cssBeautify = require('gulp-cssbeautify'),
    htmlv = require('gulp-html-validator'),
    rigger = require('gulp-rigger'),
    uncss = require('gulp-uncss');


var path = {
        dist: {
            html: 'dist/',
            js: 'dist/js/',
            css: 'dist/css/',
            img: 'dist/img/',
            fonts: 'dist/fonts/'
        },
        app: {
            html: 'app/html/index.html',
            sass: ['app/blocks/_tools/*.sass', 'app/blocks/**/*.sass', '!app/blocks/main.sass'],
            img: 'app/img/**/*.*',
            fonts: 'app/fonts/**/*.*'
        },
        watch: {
            html: 'app/**/*.html',
            js: 'app/blocks/**/*.js',
            style: 'app/blocks/**/*.sass',
            img: 'app/img/**/*.*',
            fonts: 'app/fonts/**/*.*'
        },
        clean: './dist'
    };

gulp.task('rigger', function () {
  gulp.src(path.app.html)
  .pipe(rigger())
  .pipe(gulp.dest('app/'))
  .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('valid', function () {
  gulp.src('app/index.html')
    .pipe(htmlv())
    .pipe(rename('validation.html'))
    .pipe(gulp.dest('./'));
});



gulp.task('sass-concat', function() {
    gulp.src(['app/blocks/_tools/*.sass', 'app/blocks/**/*.sass'])
        .pipe(concat('main.sass'))
        .pipe(gulp.dest('app/blocks'));
});



gulp.task('sass', function() {
    // gulp.src('app/blocks/**/*.sass')
    gulp.src(path.app.sass)
        .pipe(concat('main.sass'))
        .pipe(plugins.sass())
        .pipe(rename('main.css'))
        // .pipe(plugins.uncss({html: [paths.srcHtml]}))
        .pipe(cssBeautify())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});





//
// gulp.task('scripts', function() {
//     return gulp.src([
//             'app/libs/jquery/dist/jquery.min.js',
//             'app/libs/magnific-popup/dist/magnific-popup.min.js'
//         ])
//         .pipe(concat('libs.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('app/js'));
//
// });
//
// gulp.task('css-libs', ['sass'], function() {
//     return gulp.src('app/css/libs.css')
//         .pipe(cssnano())
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest('app/css'));
//
// });

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});

gulp.task('clean', function() {
    return del.sync('dist');
});


gulp.task('watch', ['sass', 'rigger', 'browser-sync'], function() {
    gulp.watch(path.app.sass, {cwd: './'}, ['sass']);
    gulp.watch('app/html/*.html', ['rigger']);
    // gulp.watch('dist/index.html', browserSync.reload);
    // works!
    // streamWatch('app/blocks/**/*.sass')
    //     .pipe(streamSass());
    // streamWatch('app/blocks/**/*.sass', function() {
    //     gulp.start('sass');
    // });



    // .pipe(streamSass());
    // gulp.watch('app/**/*.js', browserSync.reload);
});





//
// gulp.task('build', ['clean', 'sass', 'scripts'], function() {
//     var buildCss = gulp.src([
//             'app/css/libs.css',
//             'app/css/main.css'
//         ])
//         .pipe(gulp.dest('dist/css'));
//
//
//     var buildFonts = gulp.src('app/fonts/**/*')
//         .pipe(gulp.dest('dist/fonts'));
//
//
//     var buildJs = gulp.src('app/js/**/*')
//         .pipe(gulp.dest('dist/js'));
//
//
//     var buildHtml = gulp.src('app/*.html')
//         .pipe(gulp.dest('dist'));
//
// });
