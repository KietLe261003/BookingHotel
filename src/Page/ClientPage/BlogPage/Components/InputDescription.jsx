import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';

const InputDescription = () => {
  return (
    <div className='w-full min-w-[200px] mb-5 text-black'>
      <label className='block mb-1 text-lg text-black font-medium'>
        Xin chào
      </label>
      <CKEditor
        editor={ClassicEditor}
        config={{
          licenseKey: 'GPL',
          toolbar: {
            items: [
              'undo',
              'redo',
              '|',
              'heading',
              '|',
              'fontSize',
              'fontColor',
              'fontBackgroundColor',
              '|',
              'bold',
              'italic',
              'strikethrough',
              'subscript',
              'superscript',
              'code',
              '-',
              '|',
              'alignment',
              'link',
              'imageUpload',
              'blockQuote',
              'codeBlock',
              '|',
              'bulletedList',
              'numberedList',
              'todoList',
              'outdent',
              'indent',
            ],
          },
          
          placeholder: "Hello",
          initialData: "Helloe",
        }}
        onChange={(event, editor) => {
          console.log(event);
          //setContent(editor.getData());
        }}
      />
    </div>
  );
}

export default InputDescription;