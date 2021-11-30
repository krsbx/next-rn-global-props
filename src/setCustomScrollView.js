import { ScrollView } from 'react-native';
import extractProps from './extractProps';

const setCustomScrollView = (customProps) => {
  const ScrollViewRender = ScrollView.render;
  const defaultProps = ScrollView.defaultProps;

  ScrollView.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  ScrollView.render = function render(props) {
    const originalProps = props;
    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return ScrollViewRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};

export default setCustomScrollView;
