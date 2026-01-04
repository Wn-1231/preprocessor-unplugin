import { Context, MessageDirective, ifDirective, theDefineDirective } from 'unplugin-preprocessor-directives';

let contextInstance = null;

export function getPreprocessorContext() {
    if (!contextInstance) {
        //参考： https://github.com/KeJunMao/unplugin-preprocessor-directives/blob/667aca04e39db449f4fe533e10f22d1dc7054735/src/core/unplugin.ts#L12
        contextInstance = new Context({ directives: [ifDirective, theDefineDirective, MessageDirective] });
    }
    return contextInstance;
}