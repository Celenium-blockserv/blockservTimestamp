import React, {useEffect, useState} from "react";
import useEth from "../../contexts/EthContext/useEth";

import {useTranslation} from "react-i18next";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';


import "./consultation.css"
import Table from "react-bootstrap/Table";
function Consultation({owner, fileHash}) {
    const { state: { artifact,   accounts, contract } } = useEth();
    const [proofs, setProofs] = useState([]);
    const [hashOwner, setHashOwner] = useState('');

    const {t} = useTranslation();

    useEffect(() => {
        const setProofOfOwnershipList = async () => {
            try {
                if (owner.length === 42) {
                    let result = await contract.methods.getProofOfOwnership(owner).call()
                    setProofs(result);
                } else {
                    console.log('recipient.length= ' + owner.length)
                }
            } catch (error) {
                console.log('error')
            }
        };
        if (contract) {
            if (owner.length > 0) {
                setProofOfOwnershipList();
            }
        }
    }, [contract, owner]);

    function handleClic() {

        const setProofOfOwnershipList = async () => {
            try {
                if (owner.length === 42) {
                    let result = await contract.methods.getProofOfOwnership(owner).call()
                    setProofs(result);
                } else {
                    console.log('recipient.length= ' + owner.length)
                }
            } catch (error) {
                console.log('error')
            }
        };
        if (contract) {
            if (owner.length > 0) {
                setProofOfOwnershipList();
            }
        }
    }

    function handleClicHash() {

        const setHashOwnerFromPolygon = async () => {
            try {
                if (owner.length === 42) {
                    let result = await contract.methods.getOwnerAddress(fileHash).call()
                    setHashOwner(result)

                    //setProofs(result);
                } else {
                    console.log('recipient.length= ' + owner.length)
                }
            } catch (error) {
                console.log('error')
            }
        };
        if (contract) {
            if (owner.length > 0) {
                setHashOwnerFromPolygon();
            }
        }
    }

    return (
        <>
            <Container fluid >
                <div className="consultation-tab">



                <br/>
                <Row>
                    <Col xs={5}>Compte du dépositaire: </Col>
                    <Col>{owner}</Col>
                </Row>
                <br/>

                <Row>
                    <Col xs={3}></Col>
                    <Col className="consultation-style  justify-content-center"><Button onClick={handleClic}>Liste des empreintes numeriques du dépositaire</Button></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Table>
                        <thead>
                        <tr>
                            <th>{t("dateTransactionReader")}</th>
                            <th>{t("hashTransactionReader")}</th>
                            <th>{t("blockNumberTransactionReader")}</th>
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
                                </tr>
                            ))
                        }

                        </tbody>
                    </Table>
                </Row>


                <Row>
                    <Col xs={5}>Empreinte numérique: </Col>
                    <Col>{fileHash}</Col>
                </Row>

                <Row>
                    <Col xs={3}></Col>
                    <Col className="consultation-style  justify-content-center"><Button onClick={handleClicHash}>Verifier quel est le dépositaire de l'empreinte numérique</Button></Col>
                    <Col></Col>
                </Row>

                    {
                        hashOwner == 0x0 ? <></> : <><Row>
                        <Col xs={5}>Cette empreinte numérique a été déposée par: </Col>
                        <Col>{hashOwner}</Col>
                        </Row></>
                    }



                </div>



            </Container>
        </>
    );
}

export default Consultation;

// 0xB39CD751C2A472A500700039A5207C71DA4D469976368138267EC1535BCA237F
// 0x0458fBac829b8e330C7f80253389CBdA7Ba369D5