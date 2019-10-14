import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: 'center' },
})`
  margin: 0 30px;
`;

export const QRCode = styled.Image`
  width: 75px;
  height: 75px;
`;

export const Code = styled.View`
  background: #FFF;
  padding: 10px;
  overflow: hidden;
`;