'use strict';

hexo.extend.generator.register('index', function(locals){
  return {
    path: '',
    layout: ['index', 'archive'],
    data: locals
  };
});
