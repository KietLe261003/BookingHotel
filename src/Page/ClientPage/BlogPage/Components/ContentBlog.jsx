import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";
const editorConfiguration = {
  licenseKey: "GPL",
  toolbar: {
    items: [],
    shouldNotGroupWhenFull: true,
  },
  contentsCss: ["./test.css"],
};
const ContentBlog = ({ content }) => {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data={content}
        onReady={(editor) => {
          const editableElement = editor.ui.view.editable.element;
          if (editableElement) {
            editableElement.style.border = "none";
            editableElement.style.boxShadow = "none";
          }
        }}
        disabled
      />
    </>
  );
};

export default ContentBlog;
