var gulp = require('gulp'),
    sass = require('gulp-sass'),
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
    uncss = require('gulp-uncss'),
    prettify = require('gulp-html-prettify'),
    fs = require('fs'),
    spritesmith = require('gulp.spritesmith'),
    autoprefixer = require('gulp-autoprefixer'),
    postcss = require('gulp-postcss'),
    flexibility = require('postcss-flexibility'),
    sourceMaps = require('gulp-sourcemaps'),
    sort = require('gulp-sort');



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
        sass: ['app/blocks/_tools/*.sass', 'app/blocks/*.sass', '!app/blocks/{main,stylus}.sass'],
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



gulp.task('prettify', function() {
    gulp.src(['app/html', '!app/html/index.html'])
        .pipe(prettify({
            indent_char: '  ',
            indent_size: 1
        }))
        .pipe(gulp.dest('app/html'))
});


gulp.task('sprite', function() {
    var spriteData =
        gulp.src('./app/img/sprite/slider-img/*.*')
            .pipe(spritesmith({
                imgName: 'slider-img-sprite.png',
                cssName: 'slider-img-sprite.sass',
                cssFormat: 'sass',
                algorithm: 'top-down',
                padding: 1,


            }));

    spriteData.img.pipe(gulp.dest('./app/img/'));
    spriteData.css.pipe(gulp.dest('./app/blocks/_tools'));
});



gulp.task('rigger', function() {
    gulp.src(path.app.html)
        .pipe(rigger())
        .pipe(prettify({
            indent_char: '  ',
            indent_size: 1
        }))
        .pipe(gulp.dest('app/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('valid', function() {
    gulp.src('app/index.html')
        .pipe(htmlv())
        .pipe(rename('validation.html'))
        .pipe(gulp.dest('./'));
});



// gulp.task('sass-concat', function() {
//     gulp.src(['app/blocks/_tools/*.sass', 'app/blocks/**/*.sass', '!app/blocks/main.sass'])
//         .pipe(concat('main.sass'))
//         .pipe(gulp.dest('app/blocks'));
// });


//appending to file end }

var addMedia = function(fileMedia, fileToWrite) {

    if (fs.existsSync(fileMedia)) {
        fs.readFile(fileMedia, (err, data) => {
            fs.writeFile(fileToWrite, data);
        });
        fs.readFile("app/css/temp.css", (err, data) => {
            if (err) throw err;
            fs.appendFile(fileToWrite, data);
            fs.appendFile(fileToWrite, "}/*end of media query*/");
        });

    } else {
        fs.readFile("app/css/temp.css", (err, data) => {
            fs.writeFile(fileToWrite, data);
        });
        // fs.renameSync("app/css/temp.css", fileToWrite);
    }

};

gulp.task('media', function() {
    addMedia("app/blocks/_media/media.css", "app/css/main.css");
    browserSync.reload({
        stream: true
    });
});






gulp.task('sass', function() {
    gulp.src(path.app.sass)
    // gulp.src('app/blocks/styles.sass')
    // gulp.src(['app/blocks/*.sass', '!app/blocks/main.sass', '!app/blocks/styles.sass'])
    // gulp.src('app/blocks/main.sass')
        // .pipe(sort()) //sorts files in order files with vars (name starts with "_" come first into pipe)
        .pipe(sourceMaps.init())
        .pipe(concat('main.sass'))
        .pipe(sass())
        // .pipe(plugins.uncss({html: [paths.srcHtml]}))
        .pipe(autoprefixer({ browsers: ['> 1%', 'IE 8'], cascade: false }))
        .pipe(postcss([flexibility]))
        .pipe(rename('main.css'))
        // .pipe(cssBeautify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
        ;
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
    gulp.watch(path.app.sass, {
        cwd: './'
    }, ['sass']);
    gulp.watch('app/html/*.html', ['rigger']);
    // gulp.watch('app/blocks/_media/media.css', ['media']);
    // gulp.watch('app/css/temp.css', ['media']);

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
