import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  InformationContainer,
  CaloriesContainer,
  CaloriesTitle,
  Calories,
  KilometersContainer,
  KilometersTitle,
  Kilometers,
} from './styles';
import {useCircleAnimation} from '../../../../hooks/useCircularAnimation';
import {useStepCounter} from '../../../../hooks/useStepCounter';
import {circunference} from '../../../../constants/circunference';
import {connect} from 'react-redux';
import {setsteps} from '../../../../actions/stepactions';

const Pedometer = props => {

  const stepnumber = useStepCounter(props.steps.steps, props.date.date);
  // Calories burneds by walk
  const calories = Math.round(stepnumber * 0.05);
  const kilometers = (stepnumber * 0.00076).toFixed(2);

  const podometerprogress = useCircleAnimation(
    (stepnumber * circunference) / 10000,
    'rgba(0, 230, 64, 1)',
    'rgba(0, 255, 51, 1)',
    `${stepnumber}`,
    'trophy',
    30,
    10000,
  );
  // After 12pm store the data, and substract with steps
  return (
    <Container>
      {podometerprogress}
      <InformationContainer>
        <CaloriesContainer>
          <Icon name="fire" size={45} color="white" />
          <CaloriesTitle>Calorias</CaloriesTitle>
          <Calories>{calories}</Calories>
        </CaloriesContainer>
        <KilometersContainer>
          <Icon name="star" size={45} color="white" />
          <KilometersTitle>Km</KilometersTitle>
          <Kilometers>{kilometers}</Kilometers>
        </KilometersContainer>
      </InformationContainer>
    </Container>
  );
  // Add loader
};

// eslint-disable-next-line require-jsdoc
function mapStateToProps(state) {
  return {steps: state.steps, date: state.date};
}

export default connect(mapStateToProps)(Pedometer);
