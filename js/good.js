
function eitorOpen() {
  $('#summernote').summernote({
    height: 500,
    minHeight: 400,
    lang: 'zh-CN', //设置中文，需引入中文插件summernote-zh-CN.js
  });
}

function toggleEditorAndContent(EditToCont,idcontent,idedit) {
  var htmlcontent="";  
  idcontent="#"+idcontent;
  idedit="#"+idedit;
  if(EditToCont)
    {
      htmlcontent = $(idedit).summernote('code');
      $(idcontent).html(htmlcontent);
    }
    else{
      htmlcontent = $(idcontent).html();
      $(idedit).summernote('code', htmlcontent);
    }

  $(idcontent).toggle(100);
  $(idedit).next().toggle(100);
}

