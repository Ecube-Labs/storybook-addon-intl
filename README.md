# @ecubelabs/storybook-addon-intl

![storybook-addon-intl Example](https://raw.githubusercontent.com/Ecube-Labs/storybook-addon-intl/main/.github/assets/example.gif)

A simple Locale switching addon.
It can be used with third-party components, libraries and addons.

# Getting started

## Install

```sh
npm install @ecubelabs/storybook-addon-intl -D
```

## Configure

Add the following to your `.storybook/main.js`:

```js
module.export = {
  addons: ['@ecubelabs/storybook-addon-intl'],
};
```

## Apply

`src/.../your-global-layout.stories.tsx`:

```tsx
export default {
  component: YourGlobalLayout,
  argTypes: {
    locale: { intl: 'locale' },
    dir: { intl: 'direction' },
  },
};
```

# Use cases

## with `react-intl`

`.storybook/preview.tsx`:

```tsx
addDecorator((storyFn, argTypes) => {
    const { globals: { locale = 'en_US' } } = argTypes;

    return (
        <IntlProvider locale={locale} key={locale} messages={...}>
            {storyFn()}
        </IntlProvider>
    );
});
```

## with `react-helmet`

`.storybook/preview.tsx`:

```tsx
addDecorator((storyFn, argTypes) => {
    const { globals: { locale = 'en_US', direction = 'ltr' } } = argTypes;

    return (
        <Helmet locale={locale} key={locale} messages={...}>
            <html lang={locale} dir={direction} />
            {storyFn()}
        </Helmet>
    );
});
```

# Overrides

## Global overrides

`.storybook/preview.ts`:

```tsx
export const parameters = {
  // Default: ['en', 'ko']
  localeOptions: ['en_US', 'ko_KR'],

  // Default: (locale: string) => ['ar', 'he'].includes(locale)
  // If `true` is returned, direction is injected as "rtl". Otherwise "ltr" is injected.
  directionResolver: (locale: string) => {
    const [lang] = locale.split('_');
    return ['ar', 'he'].includes(lang);
  },
};
```

## Story-level overrides

`src/.../your-component.stories.tsx`:

```tsx
export default {
  component: YourComponent,
  parameters: { intl: { locale: 'ko_KR' } },
};
```
