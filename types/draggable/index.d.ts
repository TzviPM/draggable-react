declare module '@shopify/draggable' {
  export class Draggable {
    addContainer(containers: Containers): Draggable
    removeContainer(containers: Containers): Draggable
  }

  type Containers = HTMLElement[] | NodeList | HTMLElement;
}
