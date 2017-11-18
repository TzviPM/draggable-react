# Contributing

We are open to, and grateful for, any contributions made by the community. By contributing to `draggable-react`, you agree to abide by the [code of conduct](https://github.com/Omniroot/draggable-react/blob/master/CODE_OF_CONDUCT.md).

## Reporting Issues and Asking Questions

Before opening an issue, please search the [issue tracker](https://github.com/Omniroot/draggable-react/issues) to make sure your issue hasn't already been reported.

### Bugs and Improvements

We use the issue tracker to keep track of bugs and improvements to `draggable-react` itself, its examples, and the documentation. We encourage you to open issues to discuss improvements, architecture, theory, internal implementation, etc. If a topic has been discussed before, we will ask you to join the previous discussion.

### Help Us Help You

It is a good idea to structure your code and question in a way that is easy to read to entice people to answer it. For example, we encourage you to use syntax highlighting, indentation, and split text in paragraphs.

Please keep in mind that people spend their free time trying to help you. You can make it easier for them if you provide versions of the relevant libraries and a runnable small project reproducing your issue. You can put your code on [CodePen](http://codepen.io) or, for bigger projects, on GitHub. Make sure all the necessary dependencies are declared in `package.json` so anyone can run `npm install && npm start` and reproduce your issue.

## Development

Visit the [issue tracker](https://github.com/Omniroot/draggable-react/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

```
git clone https://github.com/your-username/draggable-react.git
```

### Building

#### Building draggable-react

Run the `build` task using `yarn`:

```
yarn build
```

The result will be in the `lib` folder.

### Testing and Linting

We're currently working on a beta version of the API. As the public API is subject to change, we do not have any tests as of yet.

### Docs

Improvements to the documentation are always welcome.

### Examples

`draggable-react` does not currently come with official examples, but PRs are always welcome.

### Sending a Pull Request

For non-trivial changes, please open an issue with a proposal for a new feature or refactoring before starting on the work. We don't want you to waste your efforts on a pull request that we won't want to accept.

On the other hand, sometimes the best way to start a conversation *is* to send a pull request. Use your best judgement!

In general, the contribution workflow looks like this:

* Open a new issue in the [Issue tracker](https://github.com/Omniroot/draggable-react/issues).
* Fork the repo.
* Create a new feature branch based off the `master` branch.
* Make sure all tests pass and there are no linting errors.
* Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including unrelated commits.

After you have submitted your pull request, we'll try to get back to you as soon as possible. We may suggest some changes or improvements.

Thank you for contributing!
