import styled from "styled-components";

export const Canvas = styled.div`
  height: calc(100vh - 50px);
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  background: #11e8bb; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #11e8bb 0%,
    #8200c9 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #11e8bb 0%,
    #8200c9 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #11e8bb 0%,
    #8200c9 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#11e8bb', endColorstr='#8200c9',GradientType=0 ); /* IE6-9 */
`;
