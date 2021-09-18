import React from "react";
import  { ApolloProvider } from "@apollo/client";
import { client } from "./config/gqlconfig";
import Student from "./Component/Student";

function App() {
  return (
    <ApolloProvider client={client}>
      <Student />
    </ApolloProvider>
  );
}

export default App;
