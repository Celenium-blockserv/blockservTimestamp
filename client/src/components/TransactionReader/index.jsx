import React, {useEffect, useState} from "react";

import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import Container from 'react-bootstrap/Container';

import Table from 'react-bootstrap/Table';
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { useTranslation } from "react-i18next";


function TransactionReader({setProofOfOwnershipListMain}) {
    const {state: {artifact, accounts, contract}} = useEth();

    const [recipient, setRecipient] = useState("");
    const [proofs, setProofs] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        if (accounts) {
            setRecipient(accounts[0]);
        }
    }, [accounts]);

    useEffect(() => {
        const setProofOfOwnershipList = async () => {
            try {
                if (recipient.length === 42) {
                    let result = await contract.methods.getProofOfOwnership(recipient).call()
                    setProofs(result);
                    setProofOfOwnershipListMain(result)
                } else {
                    console.log('recipient.length= ' + recipient.length)
                }
            } catch (error) {
                console.log('error')
            }
        };
        if (contract) {
            if (recipient.length > 0) {
                setProofOfOwnershipList();
            }
        }
    }, [contract, recipient, setProofOfOwnershipListMain]);

    function handleChange(event) {
        setRecipient(event.target.value);
    }

    const demo =
        <>
            <Title/>
            <Row>
                <Container fluid>
                    {t("ownershipTransactionReader")}
                    <input
                        onChange={handleChange}
                        value={recipient}
                    />
                </Container>
            </Row>
            <Row>
                <Alert key='primary' variant='primary'>
                    {t("primaryTransactionReader")}
                </Alert>
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
        </>;

    return (
        <Container>
            {
                !artifact ? <NoticeNoArtifact/> :
                    !contract ? <NoticeWrongNetwork/> :
                        demo
            }
        </Container>
    );
}

export default TransactionReader;
