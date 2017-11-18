import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  DraggablesContext,
  DraggableContext,
} from './types';
import {DraggableContainer} from './container';

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
