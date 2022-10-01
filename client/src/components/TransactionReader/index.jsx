import React, {useEffect, useState} from "react";

import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import Container from 'react-bootstrap/Container';

import Table from 'react-bootstrap/Table';


function TransactionReader() {
    const {state: {artifact, accounts, contract}} = useEth();

    const [recipient, setRecipient] = useState("");
    const [proofs, setProofs] = useState([]);

    useEffect(() => {
        if (accounts) {
            setRecipient(accounts[0])

        }
    }, [accounts]);


    const setTimestamp = async () => {

        let result = await contract.methods.getProofOfOwnership(recipient).call()
        console.log(result);
        setProofs(result);
    };

    function handleChange(event) {
        setRecipient(event.target.value);
    }

    const demo =
        <>
            <Title/>
            <Container fluid>
                Ownership address =
                <input
                    onChange={handleChange}
                    value={recipient}
                />
                <button onClick={setTimestamp}>
                    Get proof of owner ship
                </button>
            </Container>
            <Table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Hash</th>
                    <th>Block Number</th>
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
                                {proof.blockNumber}
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </Table>


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
