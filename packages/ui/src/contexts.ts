import { createContext } from 'react';
import { i18n } from './i18n';
import { getDefaultFont, Plugins, UIOptions } from '@pdfme-tables/common';
import { builtInPlugins } from '@pdfme-tables/schemas';

export const I18nContext = createContext(i18n);

export const FontContext = createContext(getDefaultFont());

export const PluginsRegistry = createContext<Plugins>(builtInPlugins);

export const OptionsContext = createContext<UIOptions>({});
