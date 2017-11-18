import {Draggable, Containers} from '@shopify/draggable';
import * as PropTypes from 'prop-types';
import * as uuid from 'uuid/v1';

export const contextTypes = {
  on: PropTypes.any,
  off: PropTypes.any,
  draggableClass: PropTypes.any,
}

export class DraggableContext {
  draggable: Draggable;
  draggableClass: string;

  private queue: [string, Function][] = [];

  constructor() {
    this.draggableClass = 'draggable' + uuid();
  }

  on(eventName: string, listener: Function) {
    this.queue.push([eventName, listener]);
  }

  off(eventName: string, listener: Function) {
    this.draggable.off(eventName, listener);
  }

  flushQueue() {
    let onEvent: [string, Function];
    while (onEvent = this.queue.pop()) {
      this.draggable.on(onEvent[0], onEvent[1]);
    }
  }
}

export interface DraggablesContext {
  draggables: {
    [key: string]: DraggableContext,
  },
}
