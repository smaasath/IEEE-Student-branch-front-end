import React, { useEffect, useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML, convertFromHTML } from "draft-convert";
import { EditorState, ContentState } from "draft-js";
import { convertFromHTML as draftConvertFromHTML } from 'draft-js'; // Import from draft-js
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toolbar } from '../../../../Data/toolbar';
import edit from '../../../assets/icons/edit.png';
import save from '../../../assets/icons/save.png';

const CommonEditor = ({ setHtml, html, updateProject }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (html) {
            // Use draft-js's convertFromHTML to get content blocks
            const blocksFromHTML = draftConvertFromHTML(html);
            const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, [html]);

    const onEditorStateChange = (state) => {
        setEditorState(state);
        const contentState = state.getCurrentContent();
        const htmlContent = convertToHTML(contentState);
        setHtml(htmlContent);
    };

    return (
        <>
            <div className='d-flex flex-column gap-2 w-100'>
                <div className='d-flex justify-content-end w-100'>
                    {
                        editMode ? (
                            <button className='border-0 bg-transparent' onClick={() => {
                                updateProject(),
                                    setEditMode(false)
                            }}>
                                <img src={save} width={25} />
                            </button>
                        ) : (
                            <button className='border-0 bg-transparent' onClick={() => { setEditMode(true) }}><img src={edit} width={25} /></button>
                        )
                    }
                </div>
                {
                    editMode ? (
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange}
                            toolbar={toolbar}
                        />
                    ) : (
                        <p className="text-secondary text-wrap" dangerouslySetInnerHTML={{
                            __html: html,
                        }}>
                        </p>
                    )
                }
            </div>
        </>
    );
}

export default CommonEditor;
