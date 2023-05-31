import styled from 'styled-components';

export const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 4px 1px,
    rgba(0, 0, 0, 0.14) 0px 2px 10px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
