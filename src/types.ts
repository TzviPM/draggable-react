import {Draggable, Containers} from '@shopify/draggable';
import * as uuid from 'uuid/v1';

export class DraggableContext {
  draggable: Draggable;
  draggableClass: string;

  constructor() {
    this.draggableClass = 'draggable' + uuid();
  }
}

export interface DraggablesContext {
  draggables: {
    [key: string]: DraggableContext,
  },
}
