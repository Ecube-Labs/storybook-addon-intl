import React from 'react';
import { useParameter, useGlobals } from '@storybook/preview-api';
import { IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';
import { ADDON_ID, OPTION_PARAM_KEY, DIR_RESOLVER_PARAM_KEY } from '../constants';
import { TranslateIcon } from './TranslateIcon';

const LocaleSelector = () => {
  const localeOptions = useParameter<string[]>(OPTION_PARAM_KEY);
  const directionResolver = useParameter(DIR_RESOLVER_PARAM_KEY, (locale: string) => ['ar', 'he'].includes(locale))!;
  const [{ locale: currentLocale }, updateGlobals] = useGlobals();

  if (!localeOptions || !localeOptions.length) {
    return null;
  }

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={localeOptions.map((locale) => ({
            id: locale,
            title: locale,
            value: locale,
            active: locale === currentLocale,
            onClick: () => {
              updateGlobals({ locale, direction: directionResolver(locale) ? 'rtl' : 'ltr' });
              onHide();
            },
          }))}
        />
      )}
    >
      <IconButton key={ADDON_ID} title="Select Locale">
        <TranslateIcon />
      </IconButton>
    </WithTooltip>
  );
};

export { LocaleSelector };
