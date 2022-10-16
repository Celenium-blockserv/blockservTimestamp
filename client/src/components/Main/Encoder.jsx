import React, {useState} from "react";
import {useTranslation} from "react-i18next";

import Container from "react-bootstrap/Container";
import Dropzone from "react-dropzone";

import "./encoder.css"

function Encoder({setUploadedFileHash}) {
    const [selectedFile, setSelectedFile] = useState('');
    const [computedHash, setComputedHash] = useState('');

    const {t} = useTranslation();

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
        <>
            <Container fluid>
                <br/>
                <Container  className='dropzone'>

                    <Dropzone  onDrop={async (selectedFiles) => {
                        await loadFile(selectedFiles[0])
                        console.log(selectedFiles[0])
                        setSelectedFile(selectedFiles[0].name);
                    }}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>{
                                        selectedFile === "" ? t("dragNDropEncoder"): selectedFile
                                    }</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>

                </Container>

                <br/>
                {t("warningEncoder")}
                <br/>
                <br/>
                 {computedHash === '' ? '': 'Empreinte numérique de votre fichier: 0x' + computedHash.toString().toUpperCase()}

            </Container>
        </>
    );
}

export default Encoder;
