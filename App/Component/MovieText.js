// Importing functionality from external packages
import React from "react";
import { Text, StyleSheet } from "react-native";

// Styles for component
const styles = StyleSheet.create({
  base: {
    color: "black"
  },
  h1: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "700"
  },
  h2: {
    fontSize: 17,
    fontWeight: "700",
    color:'#000000',
    opacity:0.4
  },
  p: {
    fontSize: 16
  }
});

// ///////////////////////////////////////////////////////////////////
// Three basic stylized <Text> components to be used througout the app;
// Takes in as parameters:
//    children - All the items passed in in the <BasicRow>children</BasicRow> tags
//    style - Style object
// ///////////////////////////////////////////////////////////////////
export const H1 = ({ children, style = {} }) => (
  <Text style={[styles.base, styles.h1, style]}>{children}</Text>
);

export const H2 = ({ children, style = {} }) => (
  <Text style={[styles.base, styles.h2, style]}>{children}</Text>
);

export const P = ({ children, style = {} }) => (
  <Text style={[styles.base, styles.p, style]}>{children}</Text>
);
