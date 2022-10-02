import React from 'react';
import Alert from 'react-bootstrap/Alert';

import {useState} from "react";
import Title from "./Title";
import Dropzone from "react-dropzone";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


function FileUpload({setUploadedFileHash, proofOfOwnershipList}) {
    const Status = {
        Waiting: "waiting",
        Ok: "ok",
        AlreadyRecorded: "already recorded",
    };
    const [currentStatus, setCurrentStatus] = useState(Status.Waiting);

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

    function isAlreadyRecorded(hashAsString) {
        return ( proofOfOwnershipList.filter(p => ( p.hash === hashAsString )).length > 0)


    }


    async function loadFile(theSelectedFile) {
        let fileContent = await parse(theSelectedFile);
        crypto.subtle.digest('SHA-256', fileContent).then(
            (hash) => {
                const hashArray = Array.from(new Uint8Array(hash));                     // convert buffer to byte array
                const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
                setComputedHash(hashHex)
                setUploadedFileHash(hashHex)

                if (isAlreadyRecorded(hashHex)) {
                    setCurrentStatus(Status.AlreadyRecorded);
                } else {
                    setCurrentStatus(Status.Ok);

                }
            })
    }

    return (
        <Container>
            <Title/>
            <Row>
                <Col  xs={2} className="colClass">
                    <Container  className='dropzone'>

                    <Dropzone  onDrop={async (selectedFile) => {
                    await loadFile(selectedFile[0])
                    setSelectedFile(selectedFile[0]);
                }}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop the file here</p>
                            </div>
                        </section>
                    )}
                </Dropzone>

                    </Container></Col>
                <Col xs={10}>
                    <Table>
                        <tbody>
                        <tr>
                            <td>Selected file:</td>
                            <td>{selectedFile.path}</td>
                        </tr>
                        <tr>
                            <td>Computed hash:</td>
                            <td>{computedHash}</td>
                        </tr>
                        </tbody>
                    </Table>



                    </Col>
            </Row>
            <Row>

                {
                    (currentStatus === Status.AlreadyRecorded) ? <Alert key='warning' variant='warning'>
                            This hash is already recorded for current metamask account!
                        </Alert> :
                        (currentStatus === Status.Waiting) ? <Alert key='primary' variant='primary'>
                                Select a file to compute its' hash
                            </Alert> :
                            <Alert key='success' variant='success'>
                                Hash could be computed. If you want, you can select another file to replace this one.
                            </Alert>
                }



            </Row>







        </Container>

    );
}

export default FileUpload;
