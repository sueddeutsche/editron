import m from "mithril";
import { Button } from "mithril-material-forms";
export function renderAction(action) {
    return m(Button, {
        class: action.classNames,
        disabled: action.disabled(),
        onclick: () => action.action()
    }, m("i.mmf-icon", action.icon), action.title && m("span", action.title));
}
