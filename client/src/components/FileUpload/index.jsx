import React from 'react';
import {useState} from "react";
import Title from "./Title";
import Dropzone from "react-dropzone";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const styles = StyleSheet.create({
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//     },
//     dropzone: {
//         padding: 20,
//         border: "3px blue dashed",
//         width: '60%',
//         margin: 'auto'
//     }
// });

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
        <Container>
            <Title/>
            <Row>
                <Col className='dropzone'>

                    <Dropzone  onDrop={async (selectedFile) => {
                    await loadFile(selectedFile[0])
                    setSelectedFile(selectedFile[0]);
                }}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop the file to compute its' SHA-256 hash value.</p>
                            </div>
                        </section>
                    )}
                </Dropzone></Col>
                <Col>Selected file : {selectedFile.path}<br/>
                     Computed hash:
                            {computedHash}

                    </Col>
            </Row>







        </Container>

    );
}

export default FileUpload;
