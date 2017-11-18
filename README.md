# draggable-react
> React components for Shopify's draggable

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [License](#license)
  - [Changelog](http://github.com/Omniroot/draggable-react/blob/master/CHANGELOG.md)

## Installation

```bash
$ yarn add draggable-react
```

## Usage

This library is still a work in progress. Currently, we expose 3 APIs:
1. A `DraggableProvider` component
2. A `DraggableContainer` component
3. A `withDraggable` higher-order component

### Basic example
To start off, we can use the `containerized` variant of the `DraggableProvider`,
which automatically creates a default `DraggableContainer` around our app.
Simply replace your main `<App />` component with some thing like this:

```jsx
<DraggableProvider containerized>
  <App />
</DraggableProvider> 
```

Next, wrap whichever components you wish to make draggable with the HOC,
then consume the `draggable` prop and use its `className`. For example:

```jsx
const DraggableDiv = withDraggable()(({draggable, children}) => (
  <div className={draggable.className}>
    {children}
  </div>
));
```

If you want the supplied prop to have a name other than `draggable`, you can specify that in the options. For example:

```jsx
const DraggableDiv = withDraggable({prop: 'drag'})(({drag, children}) => (
  <div className={drag.className}>
    {children}
  </div>
));
```

## Contribute

Check out our [Contributing Guidelines](http://github.com/Omniroot/draggable-react/blob/master/CONTRIBUTING.md)

## License

MIT, see [LICENSE.md](http://github.com/Omniroot/draggable-react/blob/master/LICENSE.md) for details.
