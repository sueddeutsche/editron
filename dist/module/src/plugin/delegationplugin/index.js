import m from "mithril";
import AbstractEditor from "../../editors/AbstractEditor";
import { Button } from "mithril-material-forms";
import OverlayService from "../../services/OverlayService";
import { translate } from "../../utils/i18n";
class AbstractDelegationEditor extends AbstractEditor {
    constructor(pointer, editron, options) {
        options.isDelegated = true;
        super(pointer, editron, options);
        this.render();
    }
    static editorOf(pointer, editron, options) {
        return options.delegate != null && options.isDelegated !== true;
    }
    update(event) {
        console.log("update delegation pliugin", event);
    }
    delegate(pointer, options) {
        throw new Error("notify has not been implemented in 'DelegationEditor'");
    }
    render() {
        var _a;
        m.render(this.dom, m(`.editron-delegate.editron-delegate--${this.getSchema().type}`, m(Button, { onclick: () => this.delegate(this.pointer, this.options) }, translate(((_a = this.options.delegate) === null || _a === void 0 ? void 0 : _a.buttonText) || "open"))));
    }
    destroy() {
        m.render(this.dom, m("o"));
    }
}
export var DelegationTarget;
(function (DelegationTarget) {
    DelegationTarget["Overlay"] = "overlay";
})(DelegationTarget || (DelegationTarget = {}));
export default class DelegationPlugin {
    constructor(options = {}) {
        this.id = "delegation-plugin";
        this.onDelegation = options.onDelegation || this.onDelegation;
        this.dom = document.createElement("div");
    }
    initialize(editron) {
        this.editron = editron;
        class DelegationEditor extends AbstractDelegationEditor {
        }
        DelegationEditor.prototype.delegate = this.delegate.bind(this);
        this.editron.registerEditor(DelegationEditor);
    }
    delegateToOverlay(editor) {
        return OverlayService
            .open(editor.getElement(), { abortButton: false })
            .then(() => this.editron.destroyEditor(editor));
    }
    delegate(pointer, options) {
        var _a;
        if (this.current) {
            this.editron.destroyEditor(this.current);
        }
        this.current = this.editron.createEditor(pointer, this.dom, { isDelegated: true });
        if (((_a = options === null || options === void 0 ? void 0 : options.delegate) === null || _a === void 0 ? void 0 : _a.delegateTo) === DelegationTarget.Overlay) {
            this.delegateToOverlay(this.current);
            return;
        }
        if (this.onDelegation) {
            this.onDelegation({
                editron: this.editron,
                pointer,
                editor: this.current
            });
        }
    }
}
