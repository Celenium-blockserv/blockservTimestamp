import React, {useReducer, useCallback, useEffect} from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import {reducer, actions, initialState} from "./state";

function EthProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const init = useCallback(
        async artifact => {
            if (artifact) {
                const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

                try {
                    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
                    const accounts = await web3.eth.requestAccounts();
                    const networkID = await web3.eth.net.getId();
                    const {abi} = artifact;
                    let address, contract;
                    try {
                        address = artifact.networks[networkID].address;
                        contract = new web3.eth.Contract(abi, address);
                    } catch (err) {
                        console.error('EthProvider init err');
                        console.error(err);
                    }
                    dispatch({
                        type: actions.init,
                        data: {artifact, web3, accounts, networkID, contract}
                    });
                } catch {
                    console.log('ERROR: not metamask connection 1')
                }

            }
        }, []);

    useEffect(() => {
        const tryInit = async () => {
            try {
                const artifact = require("../../contracts/Timestamper.json");
                init(artifact);
            } catch (err) {
                console.error('EthProvider tryinit err');

                console.error(err);
            }
        };

        tryInit();
    }, [init]);

    useEffect(() => {
        const events = ["chainChanged", "accountsChanged"];
        const handleChange = () => {
            init(state.artifact);
        };
        try {

            events.forEach(e => window.ethereum.on(e, handleChange));
            return () => {
                events.forEach(e => window.ethereum.removeListener(e, handleChange));
            };
        } catch {
            console.log('ERROR: not metamask connection 2')
        }
    }, [init, state.artifact]);

    return (
        <EthContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </EthContext.Provider>
    );
}

export default EthProvider;
