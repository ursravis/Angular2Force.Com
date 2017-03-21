var gulp = require('gulp');
var zip = require('gulp-zip');
var forceDeploy = require('gulp-jsforce-deploy');



gulp.task('createzip',function(){
    return gulp.src('dist/**')
        .pipe(zip('ScrimsApp.resource'))
        .pipe(gulp.dest('salesforce_dist/staticresources/'))

});

gulp.task('deploy',['createzip'],function(){
    return gulp.src('./salesforce_dist/**', { base: "." })
        .pipe(zip('package.zip'))
        .pipe(forceDeploy({
            username:'scrims.admin@test.com',
            password:'Testpassword@2lpFfyKxYGb1cMZ46kgAXW7Cv',
            loginUrl:'https://login.salesforce.com',
            version:'36.0'
        }))
})
