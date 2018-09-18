require.config({
    baseUrl: 'js',
    paths:{
        'jquery': '../jquery/jquery',
        'jquery.fullscreen': '../jquery/jquery.fullscreen'
    },
    shim:{
        'jquery.fullscreen': ['jquery']
    }
})

require(['Game'], function(Game){
    new Game('main')
})