import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Arial"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});


function Title() {
  return (<>
          <h1>File Uploader</h1>
          <h2>Upload file to compute its sha256 hash.</h2>
  </>

  );
}

export default Title;
