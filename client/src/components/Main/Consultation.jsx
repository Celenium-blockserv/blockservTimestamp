import React, {useEffect, useState} from "react";
import useEth from "../../contexts/EthContext/useEth";

import {useTranslation} from "react-i18next";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import QRCode from 'qrcode.react';
import inconeQR from "../../assets/IconeKeyQR.png";


import "./consultation.css"
import Table from "react-bootstrap/Table";

function Consultation({owner, fileHash}) {
    const { state: {  contract } } = useEth();
    const [proofs, setProofs] = useState([]);
    const [hashOwner, setHashOwner] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);

    const [editableOwner, setEditableOwner] = useState('');
    const [editableHash, setEditableHash] = useState([]);

    useEffect( () => {
        setEditableOwner(owner);
        setEditableHash(fileHash);
    }, [owner, fileHash]);


    const {t} = useTranslation();

    useEffect(() => {
        const setProofOfOwnershipList = async () => {
            try {
                if (editableOwner.length === 42) {
                    let result = await contract.methods.getProofOfOwnership(editableOwner).call()
                    setProofs(result);
                } else {
                    console.log('recipient.length= ' + editableOwner.length)
                }
            } catch (error) {
                console.log('error')
            }
        };
        if (contract) {
            if (editableOwner.length > 0) {
                setProofOfOwnershipList();
            }
        }
    }, [contract, editableOwner]);

    function handleClic() {

        const setProofOfOwnershipList = async () => {
            try {
                if (editableOwner.length === 42) {
                    let result = await contract.methods.getProofOfOwnership(editableOwner).call()
                    setProofs(result);
                } else {
                    console.log('recipient.length= ' + editableOwner.length)
                }
            } catch (error) {
                console.log('error')
            }
        };
        if (contract) {
            if (editableOwner.length > 0) {
                setProofOfOwnershipList();
            }
        }
    }

    function handleClicHash() {

        const setHashOwnerFromPolygon = async () => {
            try {
                if (editableHash.length === 64) {
                    let result = await contract.methods.getOwnerAddress(editableHash).call()
                    setHashOwner(result)

                    //setProofs(result);
                } else {
                    console.log('editableHash.length= ' + editableHash.length)
                }
            } catch (error) {
                console.log('error')
            }
        };
        if (contract) {
            if (editableHash.length > 0) {
                setHashOwnerFromPolygon();
            }
        }
    }

    function handleChange(event)
    {    setEditableOwner( event.target.value);
    }

    function handleHashChange(event)
    {    setEditableHash( event.target.value);
    }

    const downloadQRCode = (event) => {
        const qrCodeURL = document.getElementById( event.target.id )
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code_" + event.target.id + ".png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }

    function toggleShowQRCodes() {
        setShowQRCode(!showQRCode);
    }
    const imgSettings = {
        src: inconeQR,
        height:40,
        width:40
    }
    return (
        <>
            <Container fluid >
                <div className="consultation-tab">

                <br/>
                <Row>
                    <Col xs={5}><Form.Label htmlFor="ownerAddress">{t("ownerConsultation")}</Form.Label></Col>



                    <Col>
                        <Form.Control type="text" id="ownerAddress" onChange={handleChange}
                                      value={editableOwner}/>
                        <Form.Text id="passwordHelpBlock" muted>{t("inputTextConsultation")}</Form.Text>

                        </Col>
                </Row>
                <br/>

                <Row>
                    <Col xs={3}></Col>
                    <Col className="consultation-style  justify-content-center"><Button onClick={handleClic}>{t("listConsultation")}</Button></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Table>
                        <thead>
                        <tr>
                            {
                                proofs.length > 0 ? <>
                                    <th>{t("dateTransactionConsultation")}</th>
                                    <th>{t("hashTransactionConsultation")}</th>
                                    <th>{t("blockNumberTransactionConsultation")}</th>
                                    <th onClick={toggleShowQRCodes}>{
                                        showQRCode ? t("qrcodeConsultation") : t("qrcodeHideConsultation")
                                    }</th>
                                </> : <></>
                            }

                        </tr>
                        </thead>
                        <tbody>

                        {
                            proofs.map((proof) => (<tr key={proof.blockNumber}>
                                    <td>
                                        {new Date(proof.timestamp * 1000).toLocaleString()}
                                    </td>
                                    <td>
                                        {proof.hash}
                                    </td>
                                    <td>
                                        <a href={"https://polygonscan.com/block/"+proof.blockNumber}>{proof.blockNumber}</a>
                                    </td>
                                    <td hidden={showQRCode}>
                                        <QRCode
                                            id={"qrCodeId" + proof.blockNumber }
                                            value={"https://polygonscan.com/block/"+proof.blockNumber}
                                            size={128}
                                            bgColor={"#ffffff"}
                                            fgColor={"#000000"}
                                            level={"H"}
                                            includeMargin={false}
                                            onClick={downloadQRCode}
                                            imageSettings={imgSettings}

                                        />
                                    </td>
                                </tr>
                            ))
                        }

                        </tbody>
                    </Table>
                </Row>


                <Row>
                    <Col xs={5}><Form.Label htmlFor="editableFileHash">{t("hashConsultation")}</Form.Label></Col>
                    <Col> <Form.Control type="text" id="editableFileHash" onChange={handleHashChange}
                                        value={editableHash}/>
                        <Form.Text id="passwordHelpBlock" muted>{t("hashInputMsgConsultation")}</Form.Text></Col>
                </Row>

                <Row>
                    <Col xs={3}></Col>
                    <Col className="consultation-style  justify-content-center"><Button onClick={handleClicHash}>{t("getOwnerConsultation")}</Button></Col>
                    <Col></Col>
                </Row>

                    {    // eslint-disable-next-line
                        hashOwner == 0x0 ? <></> : <><Row>
                        <Col xs={6}>{t("recordedByConsultation")}</Col>
                        <Col>{hashOwner}</Col>
                        </Row></>
                    }



                </div>



            </Container>
        </>
    );
}

export default Consultation;

