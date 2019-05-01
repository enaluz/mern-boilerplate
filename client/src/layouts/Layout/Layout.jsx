import React from 'react';
import { Navbar, Footer } from '../export';

export default function Layout(props) {
  return (
    <>
      <Navbar />
        {props.children}
      <Footer />
    </>
  );
}
