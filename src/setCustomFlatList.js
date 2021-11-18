import { FlatList } from 'react-native';
import extractProps from './extractProps';

export default (customProps) => {
  const FlatListRender = FlatList.render;
  const defaultProps = FlatList.defaultProps;

  FlatList.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  FlatList.render = function render(props) {
    const originalProps = props;
    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return FlatListRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};
