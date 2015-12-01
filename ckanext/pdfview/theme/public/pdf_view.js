ckan.module('pdf_view', function () {
  return {
    initialize: function () {
      // set pdfjs worker uri
      PDFJS.workerSrc = pdfjs_workerSrc;

      var params = {
        file: resource_url
      };

      loadPdfJsView(params);
    }
  };
});
