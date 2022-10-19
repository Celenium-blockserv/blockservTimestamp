import React, {useEffect, useState} from "react";
import useEth from "../../contexts/EthContext/useEth";

import {useTranslation} from "react-i18next";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import inconeQR from "../../assets/IconeKeyQR.png";

import "./consignation.css"
import QRCode from "qrcode.react";
function Consignation({fileHash, setOwnerInParent}) {
    const { state: { accounts, contract } } = useEth();

    const [recipient, setRecipient] = useState("");
    const [hashOwner, setHashOwner] = useState('');
    const [blockNumber, setBlockNumber] = useState(0);

    useEffect(() => {
        const setHashOwnerFromPolygon = async () => {
            try {
                // eslint-disable-next-line
                if (fileHash != 0x0) {
                    let result = await contract.methods.getOwnerAddress(fileHash).call()
                    setHashOwner(result)
                }
            } catch (error) {
                console.log('error')
            }
        };
        if (contract) {

                setHashOwnerFromPolygon();

        }
    }, [contract, fileHash]);



    function handleChange(event)
    {    setRecipient( event.target.value);
        setOwnerInParent(event.target.value);
    }

    const setTimestamp = async () => {
        let response = await contract.methods.timestamp(recipient, fileHash,).send( { from: accounts[0] });
        if ( response.blockNumber) {
            setBlockNumber(response.blockNumber);
        }
        console.log(response);
    };

    const {t} = useTranslation();
    const downloadQRCode = () => {
        const qrCodeURL = document.getElementById('qrCodeId')
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        console.log(qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }
    const imgSettings = {
        src: inconeQR,
        height:40,
        width:40
    }
    return (
        <>
            <Container fluid>
                <br/>
                <Row>
                    <Col xs={5}>{t("hashConsignation")}</Col>
                    <Col>{!fileHash ? '' : '0x' + fileHash.toString().toUpperCase()}</Col>
                </Row>
                <br/>
                <Row>
                    <Col xs={5}><Form.Label htmlFor="ownerAddress">{t("ownerConsignation")}</Form.Label></Col>
                    <Col>
                        <Form.Control type="text" id="ownerAddress" onChange={handleChange}
                                      value={recipient}/>
                        <Form.Text id="passwordHelpBlock" muted>{t("inputTextConsignation")}</Form.Text></Col>
                </Row>
                <br/>
                <Row>
                    <Col></Col>
                    <Col className="consignation-style  justify-content-center">
                        <Button onClick={setTimestamp} disabled={
                            // eslint-disable-next-line
                            !(hashOwner == 0x0)
                        }>{t("recordConsignation")}</Button></Col>
                    <Col></Col>
                </Row>

                <br/>
                    {
                        // eslint-disable-next-line
                        hashOwner == 0x0 ? <></> : <>

                        <Alert  variant='danger'>
                            <Row>

                            <Col xs={5}>L'empreinte numérique a déjà été déposée par </Col>
                                <Col>{hashOwner}</Col>

                            </Row>
                        </Alert>



                        </>

                    }
                <Row>
                    {
                        blockNumber === 0 ? <></> : <>
                            <Col></Col>
                            <Col className="consignation-style  justify-content-center">
                                <QRCode
                                    id="qrCodeId"
                                    value={"https://polygonscan.com/block/"+blockNumber}
                                    size={128}
                                    bgColor={"#ffffff"}
                                    fgColor={"#000000"}
                                    level={"H"}
                                    includeMargin={false}
                                    onClick={downloadQRCode}
                                    imageSettings={imgSettings}
                                />
                            </Col>
                            <Col></Col>
                        </>
                    }

                </Row>

            </Container>
        </>
    );
}

export default Consignation;

// 0xB39CD751C2A472A500700039A5207C71DA4D469976368138267EC1535BCA237F
// 0x0458fBac829b8e330C7f80253389CBdA7Ba369D5