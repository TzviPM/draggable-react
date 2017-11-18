import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  DraggablesContext,
  DraggableContext,
} from './types';

export interface DraggableContainerProps {
  draggableID?: string,
}

export class DraggableContainer extends React.Component<DraggableContainerProps, never> {
  static contextTypes = {
    draggables: PropTypes.any,
  };
  static childContextTypes = {
    draggable: PropTypes.any,
  };

  context: DraggablesContext;
  elem: HTMLElement;

  componentDidMount() {
    this.draggable.addContainer(this.elem);
  }

  componentWillUnmount() {
    this.draggable.removeContainer(this.elem);
  }

  get draggable() {
    return this.draggableContext.draggable;
  }

  get draggableContext() {
    const {draggables} = this.context;
    const {draggableID} = this.props
    if (draggableID != null) {
      let draggable = draggables[draggableID];
      if (draggable == null) {
        draggable = new DraggableContext();
        draggables[draggableID] = draggable;
      }
      return draggable;
    } else {
      return draggables.default;
    }
  }

  getChildContext(): DraggableContext {
    return this.draggableContext;
  }

  render() {
    return (
      <div ref={(el) => this.elem = el}>
        {this.props.children}
      </div>
    );
  }
};
