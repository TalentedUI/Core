module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n' + 'Name: <%= pkg.name %>  - Version: <%= pkg.version %> \n' + 'Author: <%= pkg.author %> \n' + 'Last Updated: <%= grunt.template.today(new Date()) %>\n' + '*/' + '\n' + '\n',
                mangle: false
            },
            core_target: {
                files: {
                    'build/talented-ui.core.min.js': [
                        'src/talented-ui.core.js',
                        'src/talented-ui.core.ajax.js'
                    ]
                }
            }
        },
        sass: {
            option:{
                sourceMap: true
            },
            dist: {
                files: {
                    'build/talented-ui.core.css': 'src/sass/talented-ui.core.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('uglify-js', ['uglify']);
    grunt.registerTask('compile-sass',['sass']);
    grunt.registerTask('build',['uglify','sass']);

};
