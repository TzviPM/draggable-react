import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Draggable} from '@shopify/draggable';
import * as uuid from 'uuid/v1';

class DraggableContext {
  draggable: Draggable;
  draggableClass: string;

  constructor() {
    this.draggableClass = uuid();
    this.draggable = new Draggable({
      draggable: this.draggableClass,
    });
  }
}

export interface DraggablesContext {
  draggables: {
    [key: string]: DraggableContext,
  },
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
      default: new DraggableContext(),
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

export interface WithDraggableProps {
  draggableClass: string,
}

function withDraggable<T extends WithDraggableProps, C>(Component: React.ComponentType<T> & C) {
  class WithDraggable extends React.Component {
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
