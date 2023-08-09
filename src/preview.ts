import { Addon_DecoratorFunction as DecoratorFunction, Renderer, StoryContext } from '@storybook/types';
import { withGlobals } from './decorators/withGlobals';

export const decorators: DecoratorFunction[] = [withGlobals];

const fallback = { locale: 'en_US', direction: 'ltr' };

const addIntlArgs = (context: StoryContext<Renderer>) => {
  const {
    argTypes,
    parameters: { intl = {} },
  } = context;

  const injectedKeys = Object.entries(argTypes)
    .filter(([key, argType]) => argType.intl)
    .map(([key, argType]) => [key, argType.intl]);

  return injectedKeys.reduce(
    (acc, [key, intlType]) => {
      acc[key] = intl[intlType] || fallback[intlType as 'locale' | 'direction'];
      return acc;
    },
    {} as Record<string, any>,
  );
};

export const argsEnhancers = [addIntlArgs];

export const globals = {
  locale: null,
  direction: null,
};
