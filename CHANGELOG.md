# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added:
- `on` and `off` functions are now proxied as `withDraggable` props under `draggable.on` and `draggable.off`
- mounting of the `Draggable` instance to the container element is now done during the `render` cycle, before any `componentDidMount` hooks are fired.
