import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./react/reportWebVitals";
import App from "./App";
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const root = ReactDOM.createRoot(document.getElementById("root"));

//lib ChakraUI. Use of a lighted version to reduce size of the import on the app
const { Button, Card, CardBody, Input } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    Card,
    CardBody,
    Input
  },
})

root.render(
  <>
    <ChakraBaseProvider theme={theme}><App /></ChakraBaseProvider>
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
