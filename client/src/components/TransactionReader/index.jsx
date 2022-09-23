import {useEffect, useState} from "react";
import {StyleSheet} from 'react-native';

import useEth from "../../contexts/EthContext/useEth";
import {  Text, TextInput } from 'react-native';
import Title from "./Title";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    dropzone: {
        padding: 20,
        border: "3px blue dashed",
        width: '60%',
        margin: 'auto'
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

        <Text>Ownership address  = </Text>
        <TextInput
            style={styles.input}
            onChangeText={setRecipient}
            value={recipient}
        />
        <button onClick={setTimestamp}>
            Get proof of owner ship
        </button>

        {
            proofs.map((proof) => (
                <li key={proof.hash}>
                    {new Date(proof.timestamp * 1000).toLocaleString()} - {proof.hash}
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
