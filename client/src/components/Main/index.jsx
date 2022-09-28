
import Header from "./Header";

import React, {useEffect} from 'react';
import {useState} from "react";
import useEth from "../../contexts/EthContext/useEth";
import TransactionRecorder from "../TransactionRecorder";
import TransactionReader from "../TransactionReader";
import Footer from "../Footer";

function Main() {


    return (<>
            <Header ></Header>


                <div className="container">
                    <h1>Timestamper</h1>
                    <hr />
                    <TransactionRecorder />
                    <hr />
                    <TransactionReader />
                    <hr />
                    <Footer />

            </div>
    </>

    );
}

export default Main;
