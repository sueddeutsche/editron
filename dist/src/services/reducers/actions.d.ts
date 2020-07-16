export declare const ActionTypes: {
    DATA_SET: string;
    UNDO: any;
    REDO: any;
    ERRORS_SET: string;
};
export declare const ActionCreators: {
    setData(pointer: any, newValue: any, prevValue: any, isSynched?: boolean): {
        type: string;
        pointer: any;
        value: any;
        prevValue: any;
        isSynched: boolean;
    };
    undo(): any;
    redo(): any;
    setErrors(errors?: any[]): {
        type: string;
        errors: any[];
    };
};
