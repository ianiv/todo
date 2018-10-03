/**
 * TodoWidget
 *
 * (c) Machinify 2018. All rights reserved.
 * @flow
 **/
"use strict";
import * as React from "react";
import Todo from "../models/Todo.js";

export type TodoWidgetProps = {
  todo: Todo,
};

export type TodoWidgetState = {
};

export default class TodoWidget extends React.Component<TodoWidgetProps, TodoWidgetState> {
  static defaultProps: void;

  constructor(props: TodoWidgetProps) {
    super(props);
    autobind(this, "_handleTitleChanged", "_handleTitleBlur");
    this.state = {
    };
  }

  render(): React.Node {
    return (
      <div>
        <input
          type="text"
          value={this.props.todo.title}
          onChange={this._handleTitleChanged}
          onBlur={this._handleTitleBlur}
          />
      </div>
    );
  }

  _handleTitleChanged(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      this.props.todo.title = event.target.value;
      this.forceUpdate();
    }
  }

  _handleTitleBlur() {
    this.props.todo.save()
  }
}