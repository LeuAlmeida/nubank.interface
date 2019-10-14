import React from 'react';

import qrcode from '~/assets/qrcode.png'

import { Container, Code, QRCode } from './styles'

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode source={qrcode} />
      </Code>
    </Container>
  );
}


