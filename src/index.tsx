import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Draggable} from '@shopify/draggable';

export interface DraggableContext {
  draggables: {
    [key: string]: Draggable,
  },
}

export class DraggableProvider extends React.Component<void, void> {
  draggables: DraggableContext['draggables'];

  static childContextTypes = {
    draggables: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.draggables = {
      default: new Draggable(),
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }

  getChildContext(): DraggableContext {
    return {
      draggables: this.draggables,
    };
  }
}

export interface DraggableContainerProps {
  draggableID?: string,
}

export class DraggableContainer extends React.Component<DraggableContainerProps, never> {
  static contextTypes = {
    draggables: PropTypes.any,
  };
  context: DraggableContext;

  elem: HTMLElement;

  componentDidMount() {
    this.draggable.addContainer(this.elem);
  }

  componentWillUnmount() {
    this.draggable.removeContainer(this.elem);
  }

  get draggable() {
    const {draggables} = this.context;
    const {draggableID} = this.props
    if (draggableID != null) {
      let draggable = draggables[draggableID];
      if (draggable == null) {
        draggable = new Draggable();
        draggables[draggableID] = draggable;
      }
      return draggable;
    } else {
      return draggables.default;
    }
  }

  render() {
    return (
      <div ref={(el) => this.elem = el}>
        {this.props.children}
      </div>
    );
  }
};
