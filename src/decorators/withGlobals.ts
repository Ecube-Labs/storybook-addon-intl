/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useMemo } from 'react';
import {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
  Addon_DecoratorFunction as DecoratorFunction,
  Args,
} from '@storybook/types';
import { useGlobals, useArgs } from '@storybook/client-api';

export const withGlobals: DecoratorFunction = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  // prop destruction
  const {
    argTypes,
    parameters: { intl },
  } = context;

  // lib, style hooks
  const [_, updateArgs] = useArgs();
  const [globals, updateGlobals] = useGlobals();

  // state, ref hooks
  // formik hooks
  // query hooks
  // calculated values
  const injectedKeys = useMemo(
    () =>
      Object.entries(argTypes)
        .filter(([key, argType]) => argType.intl)
        .map(([key, argType]) => [key, argType.intl]),
    [argTypes],
  );

  // effects
  useEffect(() => {
    updateGlobals({ locale: intl?.locale || 'en', direction: intl?.direction || 'ltr' });
  }, [intl, updateGlobals]);

  useEffect(() => {
    const newArgs = injectedKeys.reduce((acc, [key, intlType]) => {
      if (globals[intlType]) {
        return {
          ...acc,
          [key]: globals[intlType],
        };
      }
      return acc;
    }, {} as Args);
    updateArgs(newArgs);
  }, [injectedKeys, globals, updateArgs]);

  // handlers

  return StoryFn(context);
};
