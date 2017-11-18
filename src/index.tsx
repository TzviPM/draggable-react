import * as React from 'react';
import {
  DraggableContext,
  contextTypes,
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
      static contextTypes = contextTypes;

      context: DraggableContext;

      render() {
        const injectedProps = {
          [config.prop]: {
            className: this.context.draggableClass,
            on: (eventName: string, listener: Function) => () => this.context.on(eventName, listener),
            off: (eventName: string, listener: Function) => () => this.context.off(eventName, listener),
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
