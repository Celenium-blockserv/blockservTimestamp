import {useEffect, useState} from "react";
import {StyleSheet} from 'react-native';

import useEth from "../../contexts/EthContext/useEth";
import {  Text, TextInput } from 'react-native';
import Title from "./Title";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";


const styles = StyleSheet.create({
    text: {
        height: 40,
        color: 'white',
        fontFamily: "'Inknut Antiqua', sans-serif"

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'var(--celenium-yellow)',
        fontFamily: "'Inknut Antiqua', sans-serif"

    },
    button: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'var(--celenium-grey)'
    }
});


function TransactionReader() {
    const { state: { artifact,   accounts, contract } } = useEth();

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

    const demo =
    <>
        <Title></Title>

        <Text  style={styles.text}>Ownership address  = </Text>
        <TextInput
            style={styles.input}
            onChangeText={setRecipient}
            value={recipient}
        />
        <button  style={styles.button} onClick={setTimestamp}>
            Get proof of owner ship
        </button>

        {
            proofs.map((proof) => (
                <li key={proof.hash}>
                    {new Date(proof.timestamp * 1000).toLocaleString()} - {proof.hash} - {proof.blockNumber}
                </li>
            ))
        }


    </>;

  return (
    <div className="demo">
      {
        !artifact ? <NoticeNoArtifact /> :
          !contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

export default TransactionReader;
