<h1>bool-To-YesNo</h1>

Convert a given boolean to the equivalent word (Yes/No) in a defined language.

This package does support typescript. 

# Install

```js
npm i bool-to-YesNo
```

# Example

```js
boolToYesNo(true, "en") -> Yes
boolToYesNo(false, "en") -> No
boolToYesNo(false, "de") -> Ja
boolToYesNo(true, "fr", yes) -> oui
```

# Usage

```js
const boolToYesNo = require('bool-to-YesNo')

boolToYesNo.boolToYesNo(true) // Yes

or

import {boolToYesNo} from "bool-to-YesNo"

boolToYesNo(false, "en", true) // no
```

# Parameter

```js
boolToYesNo(boolean, string, boolean)

boolToYesNo(
    converted param, 
    ISO 639-1 language code ("en", "de", "fr") -> default and fallback "en", 
    lowercase true/false -> default false
)

```

# Currently Supported Languages

- English (en)
- German (de)
- French (fr)
- Spanish (es)
- Dutch (nl)
- Italien (it)
- Czech (cs)
- Polish (pl)
- Portuguese (pt)

# Contributing

If you are able to detect an issue feel free to create an issue. Please add the input value when doing so.