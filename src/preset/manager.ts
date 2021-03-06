import { addons, types } from '@storybook/addons';
import { LocaleSelector } from '../components';
import { ADDON_ID, TOOL_ID } from '../constants';

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Locale select',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: LocaleSelector,
  });
});
