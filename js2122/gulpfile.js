var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    plugins = require('gulp-load-plugins')(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
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
    sort = require('gulp-sort'),
    babel = require('gulp-babel'),
    es2015 = require('babel-preset-es2015'),
    jasmine = require('gulp-jasmine');
    // jasminePhantomJs = require('gulp-jasmine2-phantomjs'),
    // phantom = require('phantomjs');




//pathes to files
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
        sass: ['app/blocks/core/*.scss', 'app/blocks/*.scss', '!app/blocks/main.scss'],
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*',
        js: ['app/js/**/*.js', '!app/js/bundle.min.js']
    },
    watch: {
        html: 'app/**/*.html',
        js: ['app/js/**/*.js', '!app/js/bundle.js'],
        // js: 'app/blocks/**/*.js',
        style: 'app/blocks/**/*.scss',
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    clean: './dist'
};


//html beautify after rigger
gulp.task('prettify', function() {
    gulp.src(['app/html', '!app/html/index.html'])
        .pipe(prettify({
            indent_char: '  ',
            indent_size: 1
        }))
        .pipe(gulp.dest('app/html'));
});

//sprites
gulp.task('sprite', function() {
    var spriteData =
        gulp.src('./app/img/for_sprites/contacts/*.*')
            .pipe(spritesmith({
                imgName: 'sprite-contacts.png',
                cssName: 'sprite-contacts.scss',
                cssFormat: 'scss',
                algorithm: 'top-down',
                padding: 1,
            }));
    spriteData.img.pipe(gulp.dest('./app/img/'));
    spriteData.css.pipe(gulp.dest('./app/blocks/core/'));
});

//riger - concats parts of HTML into one
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

//html validator
gulp.task('valid', function() {
    gulp.src('app/index.html')
        .pipe(htmlv())
        .pipe(rename('validation.html'))
        .pipe(gulp.dest('./'));
});


// adding media querirs to files
// var addMedia = function(fileMedia, fileToWrite) {
//
//     if (fs.existsSync(fileMedia)) {
//         fs.readFile(fileMedia, (err, data) => {
//             fs.writeFile(fileToWrite, data);
//         });
//         fs.readFile("app/css/temp.css", (err, data) => {
//             if (err) throw err;
//             fs.appendFile(fileToWrite, data);
//             fs.appendFile(fileToWrite, "}/*end of media query*/");
//         });
//
//     } else {
//         fs.readFile("app/css/temp.css", (err, data) => {
//             fs.writeFile(fileToWrite, data);
//         });
//         // fs.renameSync("app/css/temp.css", fileToWrite);
//     }
//
// };
//
// gulp.task('media', function() {
//     addMedia("app/blocks/_media/media.css", "app/css/main.css");
//     browserSync.reload({
//         stream: true
//     });
// });


//processing SCSS files into CSS
gulp.task('sass', function() {
    gulp.src(path.app.sass)
        .pipe(sourceMaps.init())
        .pipe(concat('main.scss'))
        .pipe(sass())
        // .pipe(plugins.uncss({html: [paths.srcHtml]}))
        .pipe(autoprefixer({ browsers: ['> 1%', 'IE 8'], cascade: false }))
        // .pipe(postcss([flexibility]))
        .pipe(rename('main.css'))
        // .pipe(cssBeautify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
        ;
});




gulp.task('scripts', function() {
    return gulp.src(path.app.js)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// gulp.task('tests', function () {
//   return gulp.src('./spec/test.js')
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(rename('./testES6.js'))
//         // .pipe(jasmine())
//         .pipe(gulp.dest('./spec'));
// });


gulp.task('tests', function () {
  return gulp.src('./spec/test.js')
        .pipe(jasmine());
        // gulp.watch('spec/test.js', ['tests']);
});



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

//local server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});



gulp.task('watch', ['sass', 'rigger', 'scripts', 'browser-sync'], function() {
    gulp.watch(path.app.sass, {
        cwd: './'
    }, ['sass']);
    gulp.watch('app/html/*.html', ['rigger']);
    gulp.watch(path.app.js, ['scripts']);
});





// gulp.task('clean', function() {
//     return del.sync('dist');
// });
//
// gulp.task('build', ['clean', 'sass', 'scripts'], function() {
//     var buildCss = gulp.src([
//             'app/css/libs.css',
//             'app/css/main.css'
//         ])
//         .pipe(gulp.dest('dist/css'));
//
//     var buildFonts = gulp.src('app/fonts/**/*')
//         .pipe(gulp.dest('dist/fonts'));
//
//     var buildJs = gulp.src('app/js/**/*')
//         .pipe(gulp.dest('dist/js'));
//
//     var buildHtml = gulp.src('app/*.html')
//         .pipe(gulp.dest('dist'));
//
// });
