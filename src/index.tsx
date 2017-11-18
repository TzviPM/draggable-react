import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  DraggableContext,
} from './types';
export {DraggableProvider} from './provider';
export {DraggableContainer} from './container';

export interface WithDraggableProps {
  draggableClass: string,
}

export interface WithDraggableOptions {
  prop?: string,
}

const defaultOptions = {
  prop: 'draggable',
};

export function withDraggable<T extends WithDraggableProps>(options: WithDraggableOptions = {}) {
  const config = Object.assign({}, defaultOptions, options);
  return function wrapWithDraggable(Component: React.ComponentType<T>) {
    class WithDraggable extends React.Component<T> {
      static contextTypes = {
        draggable: PropTypes.any,
        draggableClass: PropTypes.any,
      };

      context: DraggableContext;

      render() {
        const injectedProps = {
          [config.prop]: {
            className: this.context.draggableClass,
          },
        };

        return (
          <Component {...this.props} {...injectedProps} />
        )
      }
    }

    return WithDraggable;
  }
}
