import { ScrollView } from 'react-native';
import extractProps from './extractProps';

export default (customProps) => {
  const ScrollViewRender = ScrollView.render;
  const defaultProps = ScrollView.defaultProps;

  ScrollView.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  ScrollView.render = function render(props) {
    const originalProps = props;
    props = { ...props, style: [customProps.style] };

    try {
      return ScrollViewRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};
