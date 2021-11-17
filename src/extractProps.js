import _ from 'lodash';

export default (customProps, originalProps) => {
  if (_.isArray(originalProps.style)) {
    _.forEach(originalProps.style, (style) => {
      customProps.style = [...customProps.style, style];
    });
  } else {
    customProps.style = [...customProps.style, originalProps.style];
  }

  return customProps;
};
