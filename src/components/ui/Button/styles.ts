import styled from 'styled-components'

export const Button = styled.button`
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
  border-radius: 44px;
  padding: 8px 20px;
  font-size: 16px;
  outline: none;
  border: 0;
`