import { View } from 'react-native';
import extractProps from './extractProps';

const setCustomView = (customProps) => {
  const ViewRender = View.render;
  const defaultProps = View.defaultProps;

  View.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  View.render = function render(props) {
    const originalProps = props;
    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return ViewRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};

export default setCustomView;
