import Header from "./Header";

import React from 'react';

import Container from 'react-bootstrap/Container';


import TransactionRecorder from "../TransactionRecorder";
import TransactionReader from "../TransactionReader";
import FileUploader from "../FileUpload";
import Footer from "../Footer";
import {useState} from "react";

function Main() {
    const [fileHash, setFileHash] = useState("");

    const setUploadedFileHash = async (childData) => {
        setFileHash(childData);

    }

    return (<>
            <Header></Header>
            <Container>
                <FileUploader setUploadedFileHash={setUploadedFileHash}/>
                <hr/>
                <TransactionRecorder fileHash={fileHash}/>
                <hr/>
                <TransactionReader/>
                <hr/>
                <Footer/>
            </Container>


        </>

    );
}

export default Main;
