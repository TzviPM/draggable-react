import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Draggable} from '@shopify/draggable';

export interface DraggablesContext {
  draggables: {
    [key: string]: Draggable,
  },
}

export interface DraggableContext {
  draggable: Draggable,
}

export interface DraggableProviderProps {
  containerized?: boolean,
}

export class DraggableProvider extends React.Component<DraggableProviderProps, void> {
  draggables: DraggablesContext['draggables'];

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
    return this.props.containerized
      ? (
        <DraggableContainer>
          {this.props.children}
        </DraggableContainer>
      )
      : React.Children.only(this.props.children);
  }

  getChildContext(): DraggablesContext {
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

  getChildContext(): DraggableContext {
    return {
      draggable: this.draggable,
    };
  }

  render() {
    return (
      <div ref={(el) => this.elem = el}>
        {this.props.children}
      </div>
    );
  }
};
