import styled from 'styled-components';

type Props = {
  wallpaper: any;
}

export const IndexWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 40% 1fr;

`
export const SideA = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.wallpaper});
  background-position: center;
  background-size: cover;
  //border:solid 2px green;
  padding: 3rem;
`

export const SideB = styled.div`
  //border:solid 2px orange;
  padding: 3rem;
`

export const SocialLinksWrapper = styled.div`
  /* width:100%;
  display: grid;
  justify-items: center;  
  grid-template-columns: repeat(auto-fill, minmax(24px, 1fr));
  column-gap: 10px; */
  display: flex;
  column-gap: 10px;
  margin-top:2rem;
`

export const SocialLink = styled.a`

`