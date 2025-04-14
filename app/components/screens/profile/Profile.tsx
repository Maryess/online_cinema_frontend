import TextEditor from "components/ui/text-editor/TextEditor";
import { EditorState } from "draft-js";
import { NextPage } from "next";
import { ChangeEvent, ReactEventHandler, useState } from "react";

const Profile:NextPage = () => {

    const [editorState,setEditorState] = useState(()=>EditorState.createEmpty())

    return <div>
        <TextEditor/>
    </div>
}

export default Profile