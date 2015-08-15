module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n'
                + 'Name: <%= pkg.name %>  - Version: <%= pkg.version %> \n'
                + 'Author: <%= pkg.author %> \n'
                + 'Last Updated: <%= grunt.template.today(new Date()) %>\n'
                + '*/'
                + '\n' + '\n'
            },
            core_target: {
                files: {
                    'build/talented-ui.core.min.js': [
                        'src/talented-ui.core.js',
                        'src/talented-ui.core.ajax.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build', ['uglify']);

};
