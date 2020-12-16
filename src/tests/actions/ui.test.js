import { startLoading, finishLoading} from "../../actions/ui";
import { types } from "../../types/types";

describe('test in the ui-actions', () => {
    test('should be work fine all the actions', () => {
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect(startLoadingAction).toEqual({
            type:types.uiStartLoading
        });
        expect(finishLoadingAction).toEqual({
            type:types.uiFinishLoading
        });
        
    });
});