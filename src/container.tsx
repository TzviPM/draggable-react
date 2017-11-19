import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  DraggablesContext,
  DraggableContext,
  contextTypes,
} from './types';
import {Draggable} from '@shopify/draggable';

export interface DraggableContainerProps {
  draggableID?: string,
}

export class DraggableContainer extends React.Component<DraggableContainerProps, never> {
  static contextTypes = {
    draggables: PropTypes.any,
  };
  static childContextTypes = contextTypes;

  context: DraggablesContext;
  elem: HTMLElement;

  componentDidMount() {
    const context = this.draggableContext;
    context.draggable = new Draggable(this.elem, {
      draggable: `.${context.draggableClass}`,
    });
    context.flushQueue();
  }

  componentWillUnmount() {
    this.draggableContext.destroy();
  }

  get draggableContext() {
    const {draggables} = this.context;
    const {draggableID = 'default'} = this.props
    let draggable = draggables[draggableID];
    if (draggable == null) {
      draggable = new DraggableContext();
      draggables[draggableID] = draggable;
    }
    return draggable;
  }

  getChildContext() {
    return this.draggableContext.filter();
  }

  render() {
    return (
      <div ref={(elem) => this.elem = elem}>
        {this.props.children}
      </div>
    );
  }
};
