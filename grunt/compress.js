module.exports = function(grunt) {
  return {
    main: {
      options: {
        archive: 'upload.zip',
        level: 0
      },
      files: [{
        expand: true,
        cwd: 'upload/',
        src: ['index.html', 'img/**'],
        dest: '/'
      }]
    }
  }
}