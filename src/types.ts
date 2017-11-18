import {Draggable} from '@shopify/draggable';
import * as uuid from 'uuid/v1';

export class DraggableContext {
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
