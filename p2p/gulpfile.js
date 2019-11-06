var gulp=require('gulp');
var uglify=require('gulp-uglify');
var less=require('gulp-less');
var cleancss=require('gulp-clean-css');
var rename=require('gulp-rename');
var browserSync=require('browser-sync');
gulp.task('uglify',function(){
    gulp.src('src/js/*.js').pipe(uglify()).pipe(rename(function(path){
        path.basename+='.min';
    })).pipe(gulp.dest('dist/js'));
})
gulp.task('less',function(){
    gulp.src('src/less/*.less').pipe(less()).pipe(cleancss()).pipe(rename(function(path){
        path.basename+='.min';
    })).pipe(gulp.dest('dist/css'));
})
gulp.task('default',['uglify','less'],function(){
    browserSync.init({
        server:'./'
    })
    gulp.watch('./src/js/*.js',['uglify']);
    gulp.watch('./src/less/*.less',['less']);
});