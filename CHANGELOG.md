# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `on` and `off` functions are now proxied as `withDraggable` props under `draggable.on` and `draggable.off`.
- `on` function calls are deferred to the `componentDidMount` hook of the container node, in order to ensure that the draggable instance can be mounted first.

### Fixed
- `on` also works properly after `componentDidMount` by automatically flushing the queue of waiting calls if the `draggable` instance is already set up.
