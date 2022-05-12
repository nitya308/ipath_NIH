export const ActionTypes = {
    SAVE_TREATMENT: 'SAVE_TREATMENT',

};


export function saveTreatment(treatment) {
    return {
        type: ActionTypes.SAVE_TREATMENT,
        payload: treatment,
    }
}