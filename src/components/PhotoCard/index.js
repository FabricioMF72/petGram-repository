import React from 'react'
import { ImgWrapper, Img, Button } from './style';
import { AiOutlineHeart } from 'react-icons/ai';

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button> <AiOutlineHeart size='32px' /> {likes} </Button>
    </article>
  )
}
