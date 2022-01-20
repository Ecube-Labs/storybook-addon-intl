import React from 'react';
import { useParameter, useGlobals } from '@storybook/api';
import { IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';
import { TOOL_ID, OPTION_PARAM_KEY, DIR_RESOLVER_PARAM_KEY } from '../constants';
import { TranslateIcon } from './TranslateIcon';

const LocaleSelector = () => {
  const localeOptions = useParameter(OPTION_PARAM_KEY, ['en', 'ko']);
  const directionResolver = useParameter(DIR_RESOLVER_PARAM_KEY, (locale: string) => ['ar', 'he'].includes(locale));
  const [{ locale: currentLocale }, updateGlobals] = useGlobals();

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
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
      <IconButton key={TOOL_ID} title="Select Locale">
        <TranslateIcon />
      </IconButton>
    </WithTooltip>
  );
};

export { LocaleSelector };
