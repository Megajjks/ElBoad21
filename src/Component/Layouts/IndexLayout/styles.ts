import styled from 'styled-components';

type Props = {
  wallpaper: any;
}

export const IndexWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  border: solid 1px red;
  display: grid;
  grid-template-columns: 40% 1fr;

`
export const SideA = styled.div<Props>`
  background-image: url(${props => props.wallpaper});
  border:solid 2px green;
  padding: 3rem;
`

export const SideB = styled.div`
  border:solid 2px orange;
  padding: 3rem;
`