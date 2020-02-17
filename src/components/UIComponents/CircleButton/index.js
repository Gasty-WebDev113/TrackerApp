import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Container, Touchable, Button, ButtonIcon, ButtonText} from './styles';

/** Button Properties
 * @param {int} buttonsize size of height and width of the button
 * @param {string} buttonbackground background of the button
 * @param {("flex-end" | "flex-start" | "center")} buttonalign receives flex-end, flex-start or center
 * @param {string} buttonicon name of the icon, it uses FontAwsome
 * @param {int} buttoniconsize size of the icon
 * @param {string} buttoniconcolor color of the button
 * @param {int} bordersize size of border
 * @param {string} bordercolor color of border
 * @param {boolean} raised raised of the icon
 * @param {string} text string of text in the bottom of the button
 * @param {int} textsize size of the text
 * @param {("bold" | "lighter" | "normal")} textweight weight of the text
 */
export const CircleButton = ({
  buttonsize,
  buttonbackground,
  buttonalign,
  buttonicon,
  buttoniconsize,
  buttoniconcolor,
  bordersize,
  bordercolor,
  raised,
  text,
  textsize,
  textweight,
  buttonfunction,
  buttonstlyleprops,
}) => {
  return (
    <Container
      size={buttonsize}
      align={buttonalign}
      >
      <Touchable onPress={() => buttonfunction()}>
        <Button background={buttonbackground}>
          <ButtonIcon
            raised={raised}
            name={buttonicon}
            size={buttoniconsize}
            color={buttoniconcolor}
            bordersize={bordersize}
            bordercolor={bordercolor}
          />
        </Button>
      </Touchable>
      {text ? <ButtonText textsize={textsize} textweight={textweight} /> : null}
    </Container>
  );
};

CircleButton.defaultProps = {
  buttonsize: 60,
  buttonbackground: 'blue',
  buttonicon: 'plus',
  buttoniconsize: 30,
  buttoniconcolor: 'white',
  raised: true,
  buttonalign: 'flex-end',
  buttonfunction: () => console.log('This is a button'),
};

CircleButton.propTypes = {
  buttonsize: PropTypes.number.isRequired,
  buttonbackground: PropTypes.string,
  buttonalign: PropTypes.oneOf(['flex-end', 'flex-start', 'center']).isRequired,
  buttonicon: PropTypes.string,
  buttoniconsize: PropTypes.number,
  buttoniconcolor: PropTypes.string,
  bordersize: PropTypes.number,
  bordercolor: PropTypes.string,
  raised: PropTypes.bool,
  text: PropTypes.string,
  textsize: PropTypes.number,
  textweight: PropTypes.oneOf(['bold', 'lighter', 'normal']),
  buttonfunction: PropTypes.func,
  buttonstlyleprops: PropTypes.object,
};
