import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width:100%;
  gap: 8px;
  list-style: none;
  padding: 0;
`;

export const Text = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
`;
