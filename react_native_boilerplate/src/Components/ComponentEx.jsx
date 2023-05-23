import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';

import {useTheme} from '../Theme';

const ComponentEx = ({height, width, mode}) => {
  const {Layout, Images} = useTheme();

  return (
    <View style={{height, width}}>
      <Image style={Layout.fullSize} source={Images.logo} resizeMode={mode} />
    </View>
  );
};

/* Runtime type checking for React props and similar objects.
 prop-types can be used to document the intended types of properties passed to components. */
ComponentEx.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
};

ComponentEx.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
};

export default ComponentEx;
