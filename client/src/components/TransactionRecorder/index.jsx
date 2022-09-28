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
        color: 'var(--celenium-grey)',

    }
});

function TransactionRecorder() {
    const { state: { artifact,   accounts, contract } } = useEth();

    const [hash, setHash] = useState(0);
    const [recipient, setRecipient] = useState("");

    useEffect(() => {
        if (accounts) {
            setRecipient(accounts[0])

        }
    }, [accounts]);


    const setTimestamp = async () => {

        await contract.methods.timestamp(recipient, hash,).send( { from: accounts[0] });

    };

    const demo =
    <>
        <Title></Title>

        <Text style={styles.text}>Hash  = </Text>
        <TextInput
            style={styles.input}
            onChangeText={setHash}
            value={hash}
        />
        <Text style={styles.text}>Ownership address  = </Text>
        <TextInput
            style={styles.input}
            onChangeText={setRecipient}
            value={recipient}
        />
        <button style={styles.button} onClick={setTimestamp}>
            Record transaction
        </button>



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

export default TransactionRecorder;
