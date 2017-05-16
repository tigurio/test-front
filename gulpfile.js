var gulp	=	require('gulp');
var sass	=	require('gulp-sass');
var concat	=	require('gulp-concat');
var uglify	=	require('gulp-uglify');
var pump	=	require('pump');
var cssmin  =	require('gulp-cssmin');
var rename	=	require('gulp-rename');
var sourcemaps	=	require('gulp-sourcemaps');



gulp.task('sass', function(){
	return gulp.src('./_scss/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error',sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./_scss/*.scss', ['sass']);

});

gulp.task('scripts', function(){
	return gulp.src('./_js/*.js')
	.pipe(sourcemaps.init())
		.pipe(concat('scripts.js'))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('./javascript'));
	
});

gulp.task('compress', function(cb){
	pump([
		gulp.src('javascript/*.js'),
		uglify(),
		gulp.dest('javascript/*.js')
	],
	cb
	);
});

gulp.task('cssMin', function(){
	return gulp.src('./css/*.css')
	.pipe(cssmin())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./css/*.css'));
})

// gulp.task('gulp', function(){
	
// })

gulp.task('default', ['sass','scripts','compress','cssMin']);