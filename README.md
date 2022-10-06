advlib-eep-rps
==============

Wireless advertising packet decoding library for EnOcean Equipment Profiles of rocker position switch (RPS) telegrams.  __advlib-eep-rps__ is typically used as a library for [advlib-esp](https://github.com/reelyactive/advlib-esp) which itself is commonly a processor module of the protocol-agnostic [advlib](https://github.com/reelyactive/advlib).

__advlib-eep-rps__ is a lightweight [Node.js package](https://www.npmjs.com/package/advlib-eep-rps) with no dependencies.  See also its sister libraries [advlib-eep-vld](https://github.com/reelyactive/advlib-eep-vld) and [advlib-eep-4bs](https://github.com/reelyactive/advlib-eep-4bs).


Installation
------------

    npm install advlib-eep-rps


Hello advlib-eep-rps!
---------------------

```javascript
const advlib = require('advlib-eep-rps');

let eepType = 'F6-02-02';
let telegram = 'f650002e0069b0';

let processedData = advlib.processRPSTelegram(eepType, telegram);

console.log(processedData);
```

Which should yield the following console output:

    {
        isButtonPressed: [ false, false, true, false ]
    }


Supported EnOcean Equipment Profiles
------------------------------------

The following EEPs are currently supported by __advlib-eep-rps__.

| EEP      | Profile Name            | /lib file       |
|:---------|:------------------------|:----------------|
| F6-02-02 | Rocker Switch, 2-Rocker | rockerswitch.js |


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


Security
--------

Consult our [security policy](SECURITY.md) for best practices using this open source software and to report vulnerabilities.

[![Known Vulnerabilities](https://snyk.io/test/github/reelyactive/advlib-eep-rps/badge.svg)](https://snyk.io/test/github/reelyactive/advlib-eep-rps)


License
-------

MIT License

Copyright (c) 2022 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
