import {Draggable, Containers} from '@shopify/draggable';
import * as uuid from 'uuid/v1';

export class DraggableContext {
  draggable: Draggable;
  draggableClass: string;

  constructor() {
    this.draggableClass = 'draggable' + uuid();
    // this.draggable = new Draggable(document.body, {
      // draggable: `.${this.draggableClass}`,
    // });
    // this.draggable.removeContainer(document.body);
  }
}

export interface DraggablesContext {
  draggables: {
    [key: string]: DraggableContext,
  },
}
