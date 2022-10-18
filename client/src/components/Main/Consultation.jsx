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
    const { state: {  contract } } = useEth();
    const [proofs, setProofs] = useState([]);
    const [hashOwner, setHashOwner] = useState('');

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
                console.log(fileHash.length)
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


    return (
        <>
            <Container fluid >
                <div className="consultation-tab">



                <br/>
                <Row>
                    <Col xs={5}><Form.Label htmlFor="ownerAddress">Compte du dépositaire:</Form.Label></Col>



                    <Col>
                        <Form.Control type="text" id="ownerAddress" onChange={handleChange}
                                      value={editableOwner}/>
                        <Form.Text id="passwordHelpBlock" muted>{t("inputTextConsignation")}</Form.Text>

                        </Col>
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
                            {
                                proofs.length > 0 ? <>
                                    <th>{t("dateTransactionReader")}</th>
                                    <th>{t("hashTransactionReader")}</th>
                                    <th>{t("blockNumberTransactionReader")}</th>
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
                                </tr>
                            ))
                        }

                        </tbody>
                    </Table>
                </Row>


                <Row>
                    <Col xs={5}><Form.Label htmlFor="editableFileHash">Empreinte numérique: </Form.Label></Col>
                    <Col> <Form.Control type="text" id="editableFileHash" onChange={handleHashChange}
                                        value={editableHash}/>
                        <Form.Text id="passwordHelpBlock" muted>Empreinte numérique sur 64 nombre hexadecimaux</Form.Text></Col>
                </Row>

                <Row>
                    <Col xs={3}></Col>
                    <Col className="consultation-style  justify-content-center"><Button onClick={handleClicHash}>Verifier quel est le dépositaire de l'empreinte numérique</Button></Col>
                    <Col></Col>
                </Row>

                    {    // eslint-disable-next-line
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