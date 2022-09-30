import React from 'react';
import {StyleSheet} from 'react-native';
import {useState} from "react";
import Title from "./Title";
import Dropzone from "react-dropzone";

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    dropzone: {
        padding: 20,
        border: "3px blue dashed",
        width: '60%',
        margin: 'auto'
    }
});

function FileUpload({setUploadedFileHash}) {

    const [selectedFile, setSelectedFile] = useState('No file selected yet');
    const [computedHash, setComputedHash] = useState([]);

    async function parse(file) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        const result = await new Promise((resolve, reject) => {
            reader.onload = function (event) {
                resolve(reader.result)
            }
        })
        return result;
    }


    async function loadFile(theSelectedFile) {
        let fileContent = await parse(theSelectedFile);
        crypto.subtle.digest('SHA-256', fileContent).then(
            (hash) => {
                const hashArray = Array.from(new Uint8Array(hash));                     // convert buffer to byte array
                const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
                setComputedHash(hashHex)
                setUploadedFileHash(hashHex)
            })
    }

    return (
        <div className="demo">
            <Title/>

            <div style={styles.dropzone}>
                <Dropzone onDrop={async (selectedFile) => {
                    await loadFile(selectedFile[0])
                    setSelectedFile(selectedFile[0]);
                }}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop the file to upload</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                {selectedFile.path}
            </div>
            <div className="scroll">
                <ul>
                    {computedHash}
                </ul>
            </div>
        </div>
    );
}

export default FileUpload;
