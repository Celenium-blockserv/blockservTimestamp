import React, {useEffect, useState} from "react";

import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import Container from 'react-bootstrap/Container';

import Table from 'react-bootstrap/Table';

// const styles = StyleSheet.create({
//     text: {
//         height: 40,
//         color: 'white',
//         fontFamily: "'Inknut Antiqua', sans-serif"
// },
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         color: 'var(--celenium-yellow)',
//         fontFamily: "'Inknut Antiqua', sans-serif"
//
//     },
//     button: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         color: 'var(--celenium-grey)',
//
//     }
// });

function TransactionRecorder({fileHash}) {
    const { state: { artifact,   accounts, contract } } = useEth();

    const [hash, setHash] = useState(0);
    const [recipient, setRecipient] = useState("");

    useEffect(() => {
        if (accounts) {
            setRecipient(accounts[0])

        }
    }, [accounts]);

    useEffect(() => {
        setHash(fileHash);
    }, [fileHash]);

    const setTimestamp = async () => {

        await contract.methods.timestamp(recipient, hash,).send( { from: accounts[0] });

    };

    function handleChange(event)
    {    setRecipient( event.target.value);
    }



    const demo =
    <>
        <Title/>
        <Table>
            <thead>
            <tr>
                <th>Hash</th>
                <th>Ownership address</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{hash}</td>
                <td><input
                    onChange={handleChange}
                    value={recipient}
               />
                </td>
                <td>
                    <button  onClick={setTimestamp}> Record transaction</button>
                </td>
            </tr>
            </tbody>
        </Table>
    </>;

  return (
      <Container>
          {
        !artifact ? <NoticeNoArtifact /> :
          !contract ? <NoticeWrongNetwork /> :
            demo
      }
      </Container>
  );
}

export default TransactionRecorder;
