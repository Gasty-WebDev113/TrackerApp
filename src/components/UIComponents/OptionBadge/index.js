import React from 'react';
import PropTypes from 'prop-types';
import {Container, Badge} from './styles';

export const OptionBadge = ({
  innertext,
  background,
  textcolor,
  textweight,
  borderwidth,
  bordercolor,
  dashed,
}) => {
  console.log(dashed);
  return (
    <Container>
      <Badge
        background={background}
        borderwidth={borderwidth}
        bordercolor={bordercolor}
        textcolor={textcolor}
        textweight={textweight}
        dashed={dashed}>
        {innertext}
      </Badge>
    </Container>
  );
};

OptionBadge.defaultProps = {
  background: 'transparent',
  textcolor: 'gray',
  innertext: 'Example',
  borderwidth: 10,
  bordercolor: 'black',
};

OptionBadge.propTypes = {
  innertext: PropTypes.string.isRequired,
  background: PropTypes.string,
  textcolor: PropTypes.string,
  textweight: PropTypes.oneOf(['bold', 'lighter', 'normal']),
  borderwidth: PropTypes.number,
  bordercolor: PropTypes.string,
  dashed: PropTypes.bool,
}