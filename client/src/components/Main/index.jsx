
import React, {useState} from "react";

import {useTranslation} from "react-i18next";


import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";
import Encoder from "./Encoder";
import Consignation from "./Consignation";
import Consultation from "./Consultation";


function Main() {

    const {t} = useTranslation();

    const [fileHash, setFileHash] = useState("");
    const [owner, setOwner] = useState("");
    const setUploadedFileHash = async (childData) => {
        setFileHash(childData);
    }
    const setOwnerInParent = async (childData) => {
        setOwner(childData);
    }

    return (<>
            <Header></Header>

            <Container className="body-style">
                <Tabs fill defaultActiveKey={1} id="uncontrolled-tab-example">

                    <Tab eventKey={1} title={t("encodingMain")} >
                        <Encoder setUploadedFileHash={setUploadedFileHash}></Encoder>
                    </Tab>


                    <Tab eventKey={2} title={t("consignationMain")}  >
                        <Consignation fileHash={fileHash} setOwnerInParent={setOwnerInParent}></Consignation>
                    </Tab>
                    <Tab eventKey={3} title={t("consultationMain")}>
                        <Consultation owner={owner} fileHash={fileHash}></Consultation>

                    </Tab>


                </Tabs>


            </Container>


            <Footer></Footer>


        </>
    );
}

export default Main;


// import React from 'react';
// import Container from 'react-bootstrap/Container';
//
// import Header from "./Header";
//
// import TransactionRecorder from "../TransactionRecorder";
// import TransactionReader from "../TransactionReader";
// import FileUploader from "../FileUpload";
// import Footer from "../Footer";
// import {useState} from "react";
//
// function Main() {
//     const [fileHash, setFileHash] = useState("");
//     const [proofOfOwnershipList, setProofOfOwnershipList] = useState("");
//
//     const setUploadedFileHash = async (childData) => {
//         setFileHash(childData);
//     }
//
//     const setProofOfOwnershipListMain = async (childData) => {
//         setProofOfOwnershipList(childData);
//     }
//
//     return (<>
//             <Header></Header>
//             <Container>
//                 <FileUploader setUploadedFileHash={setUploadedFileHash} proofOfOwnershipList={proofOfOwnershipList}/>
//                 <hr/>
//                 <TransactionRecorder fileHash={fileHash}/>
//                 <hr/>
//                 <TransactionReader setProofOfOwnershipListMain={setProofOfOwnershipListMain}/>
//                 <hr/>
//                 <Footer/>
//             </Container>
//         </>
//
//     );
// }
//
// export default Main;
