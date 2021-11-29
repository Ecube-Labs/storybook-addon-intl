import { StoryContext } from '@storybook/addons';

const fallback = { locale: 'en_US', direction: 'ltr' };

const addIntlArgs = (context: StoryContext) => {
  const {
    argTypes,
    parameters: { intl = {} },
  } = context;

  const injectedKeys = Object.entries(argTypes)
    .filter(([key, argType]) => argType.intl)
    .map(([key, argType]) => [key, argType.intl]);

  return injectedKeys.reduce((acc, [key, intlType]) => {
    acc[key] = intl[intlType] || fallback[intlType as 'locale' | 'direction'];
    return acc;
  }, {} as Record<string, any>);
};

export const argsEnhancers = [addIntlArgs];
