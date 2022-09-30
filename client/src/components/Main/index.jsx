
import Header from "./Header";

import React from 'react';
import TransactionRecorder from "../TransactionRecorder";
import TransactionReader from "../TransactionReader";
import FileUploader from "../FileUpload";
import Footer from "../Footer";
import {useState} from "react";

function Main() {
    const [fileHash, setFileHash] = useState("");

    const  setUploadedFileHash = async (childData) => {
        setFileHash(childData);

    }

    return (<>
            <Header ></Header>


                <div className="container">
                    <h1>Timestamper</h1>
                    <hr />
                    <FileUploader  setUploadedFileHash={setUploadedFileHash}/>
                    <hr />
                    <TransactionRecorder fileHash={fileHash}/>
                    <hr />
                    <TransactionReader />
                    <hr />
                    <Footer />

            </div>
    </>

    );
}

export default Main;
