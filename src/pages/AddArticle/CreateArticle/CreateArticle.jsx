import { useEffect, useState } from 'react';

import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './CreateArticle.module.css'

export const CreateArticle = ({ setFormData }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (e) => setEditorState(e)

  useEffect(() => {
    const rawContentState = convertToRaw(editorState.getCurrentContent())
    const contentHTML = draftToHtml(rawContentState)
    setFormData((prevState) => ({ ...prevState, description: contentHTML }))
  }, [editorState]);

  return (
    <div className={styles.editorAdd}>
      <Editor
        editorStyle={{ height: '400px' }}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </div>)
}
