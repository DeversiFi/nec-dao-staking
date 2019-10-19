import styled from 'styled-components'

const InactiveButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 34px;
  margin: 0px 24px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  border: 1px solid var(--inactive-border);
  color: var(--inactive-header-text);
  background: none;
`

export default InactiveButton
