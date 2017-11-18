declare module '@shopify/draggable' {
  export class Draggable {
    constructor(containers: Containers)
    constructor(containers: Containers, options: Options)
    addContainer(containers: Containers): Draggable
    removeContainer(containers: Containers): Draggable
    destroy(): void
    on(eventName: string, listener: Function)
    off(eventName: string, listener: Function)
  }

  export interface Options {
    draggable?: string,
    handle?: string,
    delay?: number,
    plugins?: Plugin[],
    sensors?: Sensor[],
    appendTo?: String | HTMLElement | (() => HTMLElement),
    classes?: Classes,
  }

  export type Plugin = any;
  export type Sensor = any;

  export interface Classes {
    'body:dragging': string,
    'container:dragging': string,
    'source:dragging': string,
    'source:placed': string,
    'container:placed': string,
    'draggable:over': string,
    'container:over': string,
    'mirror': string,
  }

  export type Containers = HTMLElement[] | NodeList | HTMLElement;
}
