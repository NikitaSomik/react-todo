import React, { Component } from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component{

    // Централизировать управление данными - хорошая практика
    // Если данные нужно использовать в нескольких компонентах - их нужно хранить в род. комп.
    // Чтобы "поднять" данные вверх по иерархии комп., используйте события.

    // state = {
    //     done: false,
    //     important: false,
    // };

    // onLabelClick = () => {
    //     this.setState(({done}) => {
    //         return {
    //             done: !done
    //         }
    //     });
    // };

    // передаем в setState ф-цию - это сигнал для реакта
    // что этот код, этот setState нужно выполнить только тогда, когда наш текущий state уже будет в финальном состоянии и его можно использовать для того, чтобы вычислить новый state.
    // То есть всегда, когда вычисляем новый state взамисимости какое текущие значене нашего state мы исп. такую формы.
    // setState - не должен изменять текущий state
    // методы которые изменяют (mutate) массив использовать нельзя
    // newArr = [ ...oldArr.slice(0, idx), ...oldArr.slice(idx + 1)]
    // не изменяет oldArr
    // onMarkImportant = () => {
    //      this.setState(({important}) => {
    //          return {
    //              important: !important
    //          }
    //     });
    // };

    render() {
        const {
            label,
            onDeleted,
            onToggleDone,
            onToggleImportant,
            important,
            done
        } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={ onToggleDone  }>
                { label }
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={ onToggleImportant }>
                <i className="fa fa-exclamation"/>
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                <i className="fa fa-trash-o"/>
            </button>
        </span>
        );
    }
}
