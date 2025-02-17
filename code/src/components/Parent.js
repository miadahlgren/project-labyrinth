/* eslint-disable no-nested-ternary */
/* eslint-disable default-case */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
// Background images //
import dream from 'assets/images/bed.jpg';
import sunrise from 'assets/images/sunrise.jpeg';
import cavernlight from 'assets/images/cavernlight.jpg';
import cogs from 'assets/images/wheel.jpg';
import colorfulcave from 'assets/images/colorfulcave.jpeg';
import colorswirl from 'assets/images/colorswirl.jpg';
import archway from 'assets/images/archway.jpg'
import library2 from 'assets/images/library2.jpeg'
// mounted components
import Start from './Start';
import { InnerWrapper } from './reusableStyles';
import Location from './Location';
import Loading from './Loading';

const Parent = () => {
  const username = useSelector((store) => store.labyrinth.username)
  const currentLocation = useSelector((store) => store.labyrinth)

  const switchBackground = () => {
    switch (currentLocation.coordinates) {
      case '': return dream;
      case '0,0': return archway;
      case '0,1': return cogs;
      case '0,2': return colorswirl;
      case '0,3': return library2;
      case '1,0': return cavernlight;
      case '1,1': return colorfulcave;
      case '1,3': return sunrise;
    }
  }

  return (
    <OuterWrapper background={switchBackground()}>
      <InnerWrapper>
        {currentLocation.isLoading ? <Loading /> : username === null ? <Start /> : <Location />}
      </InnerWrapper>
    </OuterWrapper>
  )
}
export default Parent;

const OuterWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${((props) => props.background)});
  background-size: cover;
  background-position: center;
`