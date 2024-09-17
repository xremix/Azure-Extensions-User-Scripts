# Azure-Extensions - UserScripts

This repository contains user scripts for enhancing your Azure experience.

## Features

- Auto Expand Navigation Groups
- Increase Key Vault Textfield Size
- See all Key Vault Secrets in the Overview

## What is Tampermonkey?

Tampermonkey is a popular userscript manager that is available for various browsers. It allows you to run custom scripts to modify web pages on the fly.

## How to Install

The most **easy way to install the script** and keep it update is to install it on [Greasy Fork](https://greasyfork.org/de/scripts/508798-azure-extensions).

### Manual Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Click on the "Dashboard" option.
3. In the Tampermonkey Dashboard, click on the "+" button to create a new script.
4. Replace the default script content with your custom script the [Azure Extension Script](main.js)

### Exclude Functionality

You can simply disable the fatures you don't want to use in the script:

```js
(function () {
  'use strict';
  extendAutoExpandNavigationGroupings();
  increaseKeyVaultTextfield();
  // showSecretsInOverview(); <-- This is disabled
})();
```
