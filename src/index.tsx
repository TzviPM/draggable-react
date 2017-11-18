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

function withDraggable<T extends WithDraggableProps>(Component: React.ComponentType<T>) {
  class WithDraggable extends React.Component<T> {
    static contextTypes = {
      draggable: PropTypes.any,
    };

    context: DraggableContext;

    render() {
      return (
        <Component {...this.props} draggableClass={this.context.draggableClass} />
      )
    }
  }

  return WithDraggable;
}
