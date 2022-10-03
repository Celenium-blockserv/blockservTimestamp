
import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from "./Header";

import TransactionRecorder from "../TransactionRecorder";
import TransactionReader from "../TransactionReader";
import FileUploader from "../FileUpload";
import Footer from "../Footer";
import {useState} from "react";

function Main() {
    const [fileHash, setFileHash] = useState("");
    const [proofOfOwnershipList, setProofOfOwnershipList] = useState("");

    const setUploadedFileHash = async (childData) => {
        setFileHash(childData);
    }

    const setProofOfOwnershipListMain = async (childData) => {
        setProofOfOwnershipList(childData);
    }

    return (<>
            <Header></Header>
            <Container>
                <FileUploader setUploadedFileHash={setUploadedFileHash} proofOfOwnershipList={proofOfOwnershipList}/>
                <hr/>
                <TransactionRecorder fileHash={fileHash}/>
                <hr/>
                <TransactionReader setProofOfOwnershipListMain={setProofOfOwnershipListMain}/>
                <hr/>
                <Footer/>
            </Container>
        </>

    );
}

export default Main;
