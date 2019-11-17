// require.config({
//     baseUrl: '',
//     paths: {
//       'nameDep': 'js/nameDep',
//       'say': 'js/say',
//       'name': 'js/name'
//     },
//     shim: {
//       'name': {
//         deps: ['nameDep']
//       }
//     }
//   });
//   require(['name', 'say'], function (name, say) {
//     say(name);
//   });
alert('Hello~'); 

require.config({
    paths: {
        jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery'
    }
});

require(['jquery'], function ($) {
    $(function () {
        alert('jQuery load!');
    }); 
});